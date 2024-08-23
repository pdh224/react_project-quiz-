
import './square.css'; // 스타일 파일을 import
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Modal from './quiz';
import { firestore } from "./firebaseck";
import { doc, getDoc } from 'firebase/firestore';



function Square() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [test, setTest] = useState({})
  const [number, setNumber] = useState(1);
  const handleClick = () => {
    openModal();
    setNumber(1);
  };


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

  useEffect(() => {
    if (number === 4) {
      closeModal();
    }
  }, [number]);





  return (
    <div className="square">
        <div className='oo'>
            <h2 className='ranking'>Ranking</h2>
            <div className='btnbtn'>
            <button className='btn'>re</button>
            </div>

        </div>
        <div className='ll'>
            <div className="square2"></div>
        </div>
        <button type="button" class="btn btn-primary" onClick={handleClick} >문제시작</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>
                {test && <div>{test[number]}</div>}
              </h2>       
              <div>
                <label>
                  1&nbsp;<input type="radio" name="fruit" value="1" />&nbsp;
                </label>                
                <label>
                  2&nbsp;<input type="radio" name="fruit" value="2" />&nbsp;
                </label>
                <label>
                  3&nbsp;<input type="radio" name="fruit" value="3" />&nbsp;
                </label>
                <label>
                  4&nbsp;<input type="radio" name="fruit" value="4" />&nbsp;
                </label>
              </div>
              <button onClick={() => setNumber(number + 1)}  class="btn btn-primary">다음</button>
          
            </Modal>
    </div>
  );
}

export default Square;