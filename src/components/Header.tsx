import React from 'react'
import {FaChevronDown} from "react-icons/fa"; 
import "./Header.css";
import hostwind from "../hostwind.svg";

interface HeaderProps {
  isModalOpen : boolean;
  setIsModalOpen : (value : boolean) => void;
}

const Header:React.FC<HeaderProps> = ({isModalOpen, setIsModalOpen})=> {

  const handleClick = ()=>{
    setIsModalOpen(!isModalOpen);
  }
  
  return (
    <>
    <nav className='Header'>
      <img className='header-image' src={hostwind} alt=""/>
        <div className='profile'>
            <p className='profile-title'>Profile</p>
            <div className='dropIcon'>
        <FaChevronDown onClick={handleClick} color='#2197ff' size="15px"/>
        </div>
        </div>
       
        
    </nav>
    
    </>
  )
}

export default Header;