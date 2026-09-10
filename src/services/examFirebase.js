import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Public web-app configuration; access is controlled by Authentication and rules.
const config = {
  apiKey: 'AIzaSyBVstRMIRoxz5ghA5IuiQb_et-lIID1WS8',
  authDomain: 'pruefung-schulrecht-schulorga.firebaseapp.com',
  projectId: 'pruefung-schulrecht-schulorga',
  storageBucket: 'pruefung-schulrecht-schulorga.firebasestorage.app',
  messagingSenderId: '232869602043',
  appId: '1:232869602043:web:a08e10d560e30bb0a0c65e'
}

const appName = 'pruefung-lernapp'

export function getExamFirebase() {
  const app = getApps().some((candidate) => candidate.name === appName)
    ? getApp(appName)
    : initializeApp(config, appName)

  return { app, auth: getAuth(app), db: getFirestore(app) }
}
