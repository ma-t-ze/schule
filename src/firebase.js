import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'

export { ref, get, set }

const firebaseConfig = {
  apiKey: 'AIzaSyB23bed3QtYc2iff2QVeK6Lk4z3dtauiio',
  authDomain: 'dprint-9cc8e.firebaseapp.com',
  databaseURL: 'https://dprint-9cc8e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dprint-9cc8e',
  storageBucket: 'dprint-9cc8e.firebasestorage.app',
  messagingSenderId: '1020573422609',
  appId: '1:1020573422609:web:9c1cb06e3ff1df73940db0'
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
