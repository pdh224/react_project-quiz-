//전체 확인하기

//firebase.js
// import firebase from "firebase/app";

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADmewWqGls3ii2E6UOoSyhm9cX7CXrPPA",
    authDomain: "quiz-project-214ae.firebaseapp.com",
    projectId: "quiz-project-214ae",
    storageBucket: "quiz-project-214ae.appspot.com",
    messagingSenderId: "838071901518",
    appId: "1:838071901518:web:3fa71f4b292d32e871121f"
  };

// firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);


// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
const firestore = getFirestore(app);
// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };



