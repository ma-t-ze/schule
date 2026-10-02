import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import assert from 'node:assert/strict'
const require = createRequire(process.env.BKGD_TEST_DEPENDENCIES ? `${process.env.BKGD_TEST_DEPENDENCIES}/package.json` : import.meta.url)
const { initializeTestEnvironment, assertSucceeds, assertFails } = require('@firebase/rules-unit-testing')
const { doc, setDoc, updateDoc, getDoc, getDocs, collection, Timestamp, serverTimestamp } = require('firebase/firestore')
const fragment = await readFile(new URL('./firestore.rules.fragment', import.meta.url), 'utf8')
const env = await initializeTestEnvironment({ projectId: 'demo-bkgd-quiz', firestore: { host: '127.0.0.1', port: 8080, rules: `rules_version = '2'; service cloud.firestore { match /databases/{database}/documents { ${fragment} } }` } })
const host = env.authenticatedContext('host').firestore()
const alice = env.authenticatedContext('alice').firestore()
const bob = env.authenticatedContext('bob').firestore()
const guest = env.unauthenticatedContext().firestore()
const pin = '987654'
const room = db => doc(db, 'bkgd_quiz_games', pin)
const player = (db, uid) => doc(db, 'bkgd_quiz_games', pin, 'players', uid)
const answer = (db, uid, q = 0) => doc(db, 'bkgd_quiz_games', pin, 'answers', `${q}_${uid}`)
const base = { ownerUid: 'host', version: 1, phase: 'lobby', questionIndex: -1, startedAt: null, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }
let questionStartedAt
const response = (uid, questionIndex = 0, choice = 1) => ({ uid, questionIndex, choice, questionStartedAt, answeredAt: serverTimestamp() })
try {
  await env.clearFirestore()
  await assertFails(setDoc(room(guest), base))
  await assertSucceeds(setDoc(room(host), base))
  await assertSucceeds(setDoc(player(alice, 'alice'), { name: 'Alice', joinedAt: serverTimestamp() }))
  await assertFails(setDoc(player(alice, 'bob'), { name: 'Bob', joinedAt: serverTimestamp() }))
  await assertFails(updateDoc(room(alice), { phase: 'question', questionIndex: 0, startedAt: serverTimestamp(), updatedAt: serverTimestamp() }))
  await assertSucceeds(updateDoc(room(host), { phase: 'question', questionIndex: 0, startedAt: serverTimestamp(), updatedAt: serverTimestamp() }))
  questionStartedAt = (await getDoc(room(host))).data().startedAt
  await assertFails(setDoc(player(bob, 'bob'), { name: 'Bob', joinedAt: serverTimestamp() }))
  await assertFails(setDoc(answer(bob, 'bob'), response('bob')))
  await assertFails(setDoc(answer(alice, 'alice'), response('alice', 0, 4)))
  await assertFails(setDoc(answer(alice, 'alice', 1), response('alice', 1)))
  await assertFails(setDoc(answer(alice, 'alice'), { ...response('alice'), questionStartedAt: Timestamp.fromMillis(Date.now() + 10000) }))
  await assertSucceeds(setDoc(answer(alice, 'alice'), response('alice')))
  await assertFails(setDoc(answer(alice, 'alice'), response('alice', 0, 0)))
  await assertSucceeds(getDoc(answer(alice, 'alice')))
  await assertFails(getDoc(answer(bob, 'alice')))
  await assertFails(getDocs(collection(alice, 'bkgd_quiz_games', pin, 'answers')))
  await assertSucceeds(getDocs(collection(host, 'bkgd_quiz_games', pin, 'answers')))
  await assertFails(updateDoc(room(host), { phase: 'reveal', updatedAt: serverTimestamp() }))
  await env.withSecurityRulesDisabled(async context => {
    await updateDoc(room(context.firestore()), { startedAt: Timestamp.fromMillis(Date.now() - 31000) })
    await setDoc(player(context.firestore(), 'bob'), { name: 'Bob', joinedAt: Timestamp.now() })
  })
  questionStartedAt = (await getDoc(room(host))).data().startedAt
  await assertFails(setDoc(answer(bob, 'bob'), response('bob')))
  await assertSucceeds(updateDoc(room(host), { phase: 'reveal', updatedAt: serverTimestamp() }))
  await assertFails(updateDoc(room(host), { phase: 'question', questionIndex: 7, startedAt: serverTimestamp(), updatedAt: serverTimestamp() }))
  await assertSucceeds(updateDoc(room(host), { phase: 'question', questionIndex: 1, startedAt: serverTimestamp(), updatedAt: serverTimestamp() }))
  questionStartedAt = (await getDoc(room(host))).data().startedAt
  await assertFails(setDoc(answer(bob, 'bob', 0), response('bob', 0)))
  await assertSucceeds(setDoc(answer(bob, 'bob', 1), response('bob', 1, 2)))
  await env.withSecurityRulesDisabled(async context => { await updateDoc(room(context.firestore()), { phase: 'reveal', questionIndex: 19 }) })
  await assertSucceeds(updateDoc(room(host), { phase: 'finished', updatedAt: serverTimestamp() }))
  const final = await assertSucceeds(getDocs(collection(alice, 'bkgd_quiz_games', pin, 'answers')))
  assert.equal(final.size, 2)
  await assertFails(updateDoc(room(host), { ownerUid: 'alice', updatedAt: serverTimestamp() }))
  await assertSucceeds(setDoc(doc(alice, 'bkgd_quiz_clocks', 'alice'), { time: serverTimestamp() }))
  await assertFails(setDoc(doc(bob, 'bkgd_quiz_clocks', 'alice'), { time: serverTimestamp() }))
  console.log('PASS: host ownership, lobby registration, immutable answers, deadline, choice/index validation, answer privacy, ordered progression, final ranking access, clock ownership.')
} finally { await env.cleanup() }
