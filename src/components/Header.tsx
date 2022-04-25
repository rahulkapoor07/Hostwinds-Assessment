import React from 'react'
import {FaChevronDown} from "react-icons/fa"; 
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import "./Header.css";
import hostwind from "../hostwind.svg";

interface HeaderProps {
  isModalOpen : boolean;
  setIsModalOpen : (value : boolean) => void;
  sideBarOpen : boolean;
  setSideBarOpen : (value : boolean) => void;
}

const Header:React.FC<HeaderProps> = ({isModalOpen, setIsModalOpen,sideBarOpen, setSideBarOpen})=> {

  

  const handleClick = ()=>{
    setIsModalOpen(!isModalOpen);
  }

  const handleBar = ()=>{
    setSideBarOpen(!sideBarOpen);
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
        <div className='barCross' onClick={handleBar}>
        {sideBarOpen ? 
        <div><FaBars size="1.5rem" color="#2197ff"/></div> :  <div><ImCross size="1.5rem" color="#2197ff"/></div>}
        </div>
    </nav>
    <div className='buttons'>
      <button className='blue-back'>Active</button>
      <button className='white-back'>Inactive</button>
    </div>
    </>
  )
}

export default Header;