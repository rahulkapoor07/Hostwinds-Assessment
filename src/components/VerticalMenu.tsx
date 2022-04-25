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
};

const VerticalMenu : React.FC<VerticalMenuProps> = ({categories, backGroundColor, collapsible,
    receiveClickedSubItem})=> {

    // const liUseRef = useRef<HTMLLIElement[]>([]);

    const handleClick = (e : MouseEvent<HTMLLIElement>)=>{
        e.preventDefault();
        receiveClickedSubItem((e.currentTarget.dataset.item)!);
        
    }


    const Collapsible = ()=>{
        return (
            <div>
                <img className='image' src={hostwind} alt="" />
             {categories.map(data => (
                 <div className='service' key={data.id}>
                     <div className='logo'>{data.logo}</div>
                     <div className='category'>
                     
                     <h3 className='title'>{data.title} kidda</h3>
                     <span className='dropdown'><RiArrowDropDownLine/></span>
                     <div  className='items'>
                     <ul>
                         {data.subItems.map((item, key) => (
                             <li data-item = {item}
                             className='subItems' key={key}>{item}</li>
                         ))}
                     </ul>
                     </div>
                     </div>
                     {/* <div><FaChessKnight size="2rem" color='white' onClick={handleClick}/></div> */}
                 </div>
             ))}
             <div className='headers-Item'>
                     <h3 className='header-1'>Profile</h3>
                     <h3 className='header-2'>Log Out</h3>
                 </div>
            </div>
        )
    }

    const NonCollapsible = ()=>{
        return (
            <>
            <img className='image' src={hostwind} alt="" />
             {categories.map(data => (
                 <div className='service' key={data.id}>
                     <div className='logo'>{data.logo}</div>
                     <div className='category'>
                     <h3 className='title'>{data.title}</h3>
                     <ul>
                         {data.subItems.map((item, key) => (
                            
                             <li data-item = {item} onClick={handleClick}
                             className='subItems' key={key}>{item}</li>
                         ))}
                     </ul>
                     </div>
                 </div>
             ))}
             <div className='headers-Item'>
                     <h3 className='headerItem'>Profile</h3>
                     <h3 className='headerItem'>Log Out</h3>
                 </div>
            </>
        )
    }
  return (
    <div className='VerticalMenu' style={{"backgroundColor" : `${backGroundColor ? backGroundColor : "black"}`}}>
         {collapsible ? NonCollapsible() : Collapsible()}
    </div>
  )
}

export default VerticalMenu;