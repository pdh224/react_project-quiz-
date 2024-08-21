
import './square.css'; // 스타일 파일을 import
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Modal from './quiz';
function Square() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
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
        <button type="button" class="btn btn-primary" onClick={openModal}>문제시작</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>문제</h2>
              <p>이곳에 원하는 내용을 넣으세요.</p>
            </Modal>
    </div>
  );
}

export default Square;