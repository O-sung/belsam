import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB_MzhJJTy6CveAlmr55L5wbSYMhPe--oo',
  authDomain: 'sendme-37283.firebaseapp.com',
  projectId: 'sendme-37283',
  storageBucket: 'sendme-37283.appspot.com',
  messagingSenderId: '945056469046',
  appId: '1:945056469046:web:2fd167a5f675dee1420897'
}

// Initialize Firebase
let app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)
const storage = getStorage(app)
const auth = getAuth()
const db = getFirestore()

export { app, auth, db, storage }
