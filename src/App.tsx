import React, { useEffect, useState } from 'react';
import {SideBarData} from "./components/SidebarData";
import "./App.css";
import VerticalMenu from './components/VerticalMenu';
import {dataType} from "./sideBarData.model"
import Header from './components/Header';
import Modal from './components/Modal';

const App : React.FC = ()=> {
  const [categories, setCategories] = useState<dataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [subItem, setSubItem] = useState<string>("");

  const receiveClickedSubItem = (str:string) => {
    setSubItem(str);
  }

  useEffect(()=>{
    setCategories([...SideBarData]);
  },[]);
  return (
    <div className="App">
     <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <VerticalMenu categories={categories} backGroundColor="" collapsible={false}
      receiveClickedSubItem={receiveClickedSubItem}/>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <h1 className='final-text'>You are viewing {subItem} page</h1>
    </div>
  );
}

export default App;
