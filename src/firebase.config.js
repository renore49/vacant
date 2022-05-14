import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyDUOU3OyovNCl986GSHehbTnwN5QEqPeik',
	authDomain: 'vacant-bf336.firebaseapp.com',
	projectId: 'vacant-bf336',
	storageBucket: 'vacant-bf336.appspot.com',
	messagingSenderId: '1003577476620',
	appId: '1:1003577476620:web:dbb98601ff419ffe20d029',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
