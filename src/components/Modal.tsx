import React from 'react';
import "./Modal.css";

interface ModalProps {
    isModalOpen : boolean;
    setIsModalOpen : (value : boolean) => void;
}

const Modal:React.FC<ModalProps> = ({isModalOpen, setIsModalOpen})=> {

    const handleClick = ()=>{
        setIsModalOpen(!isModalOpen);
    }
  return (
      <>
      {isModalOpen && <div className='modal'>
      <div onClick={handleClick} className='overlay'>
          <div className='modal-content'>
              <p>Edit Profile</p>
              <p>Log Out</p>
          </div>
      </div>
  </div>}
      
  </>
  )
}

export default Modal;