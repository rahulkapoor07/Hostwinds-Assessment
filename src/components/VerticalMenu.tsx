import React,{ReactElement, MouseEvent, useState} from 'react'
import hostwind from "../hostwind.svg";
import "./VericalMenu.css";
import {RiArrowDropDownLine} from "react-icons/ri"; 
import { SideBarData } from './SidebarData';

interface category{
    id : string;
    title : string;
    path : string;
    logo : ReactElement;
    subItems : string[];
    active?: boolean
}

interface VerticalMenuProps {
    categories : category[];
    backGroundColor ? : string;
    collapsible ? : boolean;
    receiveClickedSubItem : (str : string) => void;
    sideBarOpen : boolean;
    setSideBarOpen : (value : boolean) => void;
};

const VerticalMenu : React.FC<VerticalMenuProps> = ({categories, backGroundColor, collapsible,
    receiveClickedSubItem, sideBarOpen, setSideBarOpen})=> {
    const [array, setArray] = useState(SideBarData);


    const handleClick = (e : MouseEvent<HTMLLIElement>)=>{
        e.preventDefault();
        receiveClickedSubItem((e.currentTarget.dataset.item)!);
    }

    const handleDropArrowClick = (index: number)=>{
        let temporaryArray: category[] = array.slice();
        temporaryArray[index].active = !temporaryArray[index].active;
        setArray(temporaryArray);
    }


    const Collapsible = ()=>{
        return (
            <div>
                <div className="sidebar-logo">
                    <img className='image' src={hostwind} alt="" />
                </div>
                <div className="service-list">
                    {categories.map((data, index) => (
                        <div className='service' key={data.id}>
                            <div className='logo'>{data.logo}</div>
                            <div className='category'>
                                <div className="cat-header">
                                    <h3 className='title'>{data.title}</h3>
                                    <span className='dropdown' data-related-items = {`dropdown${data.active ? '-active': ''}`}
                                    onClick={() => handleDropArrowClick(index)}><RiArrowDropDownLine/></span>
                                </div>
                                <div className={`cat-body${data.active ? '-active': ''}`}>
                                    <div  className='items'>
                                    <ul>
                                        {data.subItems.map((item, key) => (
                                            <li data-item = {item} onClick={handleClick}
                                            className='subItems' key={key}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             <div className='headers-Item'>
                     <h3 className='header-1'>Edit Profile</h3>
                     <h3 className='header-2'>Log Out</h3>
                 </div>
            </div>
        )
    }

    const CollapsibleForPhone = ()=>{
        return (
            <div>
                <div className="service-list">
                    {categories.map((data, index) => (
                        <div className='service' key={data.id}>
                            <div className='logo'>{data.logo}</div>
                            <div className='category'>
                                <div className="cat-header">
                                    <h3 className='title'>{data.title}</h3>
                                    <span className='dropdown' data-related-items = {`dropdown${data.active ? '-active': ''}`}
                                    onClick={() => handleDropArrowClick(index)}><RiArrowDropDownLine/></span>
                                </div>
                                <div className={`cat-body${data.active ? '-active': ''}`}>
                                    <div  className='items'>
                                    <ul>
                                        {data.subItems.map((item, key) => (
                                            <li data-item = {item} onClick={handleClick}
                                            className='subItems' key={key}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             <div className='headers-Item'>
                     <h3 className='header-1'>Edit Profile</h3>
                     <h3 className='header-2'>Log Out</h3>
                 </div>
            </div>
        )
    }

    const NonCollapsible = ()=>{
        return (
            <div>
                <div className="sidebar-logo">
                    <img className='image' src={hostwind} alt="" />
                </div>
                <div className="service-list">
                    {categories.map(data => (
                        <div className='service' key={data.id}>
                            <div className='logo'>{data.logo}</div>
                            <div className='category'>
                                <div className="cat-header">
                                    <h3 className='title'>{data.title}</h3>
                                </div>
                                <div className="cat-body-active">
                                    <div  className='items'>
                                    <ul>
                                        {data.subItems.map((item, key) => (
                                            <li data-item = {item} onClick={handleClick}
                                            className='subItems' key={key}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             <div className='headers-Item'>
                     <h3 className='header-1'>Edit Profile</h3>
                     <h3 className='header-2'>Log Out</h3>
                 </div>
            </div>
        )
    }

    const NonCollapsibleForPhone = ()=>{
        return (
            <div>
                <div className="sidebar-logo">
                    <img className='image' src={hostwind} alt="" />
                </div>
                <div className="service-list">
                    {categories.map(data => (
                        <div className='service' key={data.id}>
                            <div className='logo'>{data.logo}</div>
                            <div className='category'>
                                <div className="cat-header">
                                    <h3 className='title'>{data.title}</h3>
                                </div>
                                <div className="cat-body-active">
                                    <div  className='items'>
                                    <ul>
                                        {data.subItems.map((item, key) => (
                                            <li data-item = {item} onClick={handleClick}
                                            className='subItems' key={key}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             <div className='headers-Item'>
                     <h3 className='header-1'>Edit Profile</h3>
                     <h3 className='header-2'>Log Out</h3>
                 </div>
            </div>
        )
    }
  return (
      <>
      {sideBarOpen &&  <div className='VerticalMenuForPhone' style={{"backgroundColor" : `${backGroundColor ? backGroundColor : "black"}`}}>
{collapsible ?CollapsibleForPhone() : NonCollapsibleForPhone()}
</div>} 
<div className='VerticalMenu' style={{"backgroundColor" : `${backGroundColor ? backGroundColor : "black"}`}}>
         {collapsible ?Collapsible() : NonCollapsible()}
    </div>
    </>
  )
}

export default VerticalMenu;