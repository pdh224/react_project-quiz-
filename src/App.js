import Square from './components/square';
import { useEffect, useState } from 'react';
import Modal from './components/quiz';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firestore } from "./components/firebaseck";
import { doc, getDoc } from 'firebase/firestore';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [test, setTest] = useState({})
  async function getTest() {
    // document에 대한 참조 생성
    const docRef = doc(firestore, "quiz", "question");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTest(docSnap.data())
    }
  };
  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getTest()
  }, [])

  useEffect(() => {
    console.log(test)
  }, [test])


  return (
    <div className="App">
        <Square />   
    </div>
    
    
       
  );
}

export default App;
