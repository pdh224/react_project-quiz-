import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // 모달이 열려있지 않으면 아무 것도 렌더링하지 않음
  
    return (
      <div className="modal-overlay_">
        <div className="modal-content_">
          <button className="modal-close_" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;


// import React from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // 스타일 컴포넌트 정의
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 4px;
//   width: 300px;
//   position: relative;
// `;

// const ModalClose = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   border: none;
//   background: none;
//   font-size: 20px;
//   cursor: pointer;
// `;

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null; // 모달이 열려있지 않으면 아무 것도 렌더링하지 않음

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <ModalClose onClick={onClose}>
//           &times;
//         </ModalClose>
//         {children}
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default Modal;
