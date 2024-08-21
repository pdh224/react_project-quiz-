import Square from './components/square';
import React, { useState } from 'react';
import Modal from './components/quiz';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
          <Square />
          
    </div>
       
  );
}

export default App;
