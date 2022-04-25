import React,{ReactElement, MouseEvent} from 'react'
import hostwind from "../hostwind.svg";
import "./VericalMenu.css";
import {RiArrowDropDownLine} from "react-icons/ri"; 

interface VerticalMenuProps {
    categories : {id : string;
        title : string;
        path : string;
        logo : ReactElement;
        subItems : string[];}[];
    backGroundColor ? : string;
    collapsible ? : boolean;
    receiveClickedSubItem : (str : string) => void;
    sideBarOpen : boolean;
    setSideBarOpen : (value : boolean) => void;
};

const VerticalMenu : React.FC<VerticalMenuProps> = ({categories, backGroundColor, collapsible,
    receiveClickedSubItem, sideBarOpen, setSideBarOpen})=> {

    const handleClick = (e : MouseEvent<HTMLLIElement>)=>{
        e.preventDefault();
        receiveClickedSubItem((e.currentTarget.dataset.item)!);
    }

    const handleDropArrowClick = (e : MouseEvent<HTMLSpanElement>)=>{
        // const itemList : HTMLLIElement | null = document.querySelector(e.currentTarget.dataset.relatedItems!);
        // console.log(itemList);
        const itemsClass :string | undefined = e.currentTarget.dataset.relatedItems;
        const itemList : HTMLLIElement | null = document.querySelector(`.${itemsClass}`);
        console.log(itemList);
    }


    const Collapsible = ()=>{
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
                                    <span data-related-items = {`cat-body-${data.subItems[0]}`}
                                    onClick={handleDropArrowClick} className='dropdown'><RiArrowDropDownLine/></span>
                                </div>
                                <div className={`cat-body-${data.subItems[0]}`}>
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
                            {/* <div><FaChessKnight size="2rem" color='white' onClick={handleClick}/></div> */}
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
                {/* <div className="sidebar-logo">
                    <img className='image' src={hostwind} alt="" />
                </div> */}
                <div className="service-list">
                    {categories.map(data => (
                        <div className='service' key={data.id}>
                            <div className='logo'>{data.logo}</div>
                            <div className='category'>
                                <div className="cat-header">
                                    <h3 className='title'>{data.title}</h3>
                                    <span 
                                    onClick={handleDropArrowClick} className='dropdown'><RiArrowDropDownLine/></span>
                                </div>
                                <div className="cat-body">
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
                            {/* <div><FaChessKnight size="2rem" color='white' onClick={handleClick}/></div> */}
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
                                    {/* <span className='dropdown'><RiArrowDropDownLine/></span> */}
                                </div>
                                <div className="cat-body">
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
                            {/* <div><FaChessKnight size="2rem" color='white' onClick={handleClick}/></div> */}
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
                                    {/* <span className='dropdown'><RiArrowDropDownLine/></span> */}
                                </div>
                                <div className="cat-body">
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
                            {/* <div><FaChessKnight size="2rem" color='white' onClick={handleClick}/></div> */}
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
      {sideBarOpen ? <div className='VerticalMenu' style={{"backgroundColor" : `${backGroundColor ? backGroundColor : "black"}`}}>
         {collapsible ? NonCollapsible() : Collapsible()}
    </div> : <div className='VerticalMenuForPhone' style={{"backgroundColor" : `${backGroundColor ? backGroundColor : "black"}`}}>
{collapsible ? NonCollapsibleForPhone() : CollapsibleForPhone()}
</div>}
    </>
  )
}

export default VerticalMenu;