import React, {useState, useEffect} from "react";
import $ from "jquery";
import { Link,NavLink } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {ImCross} from "react-icons/im";

import "./header.css";

function Header(){
    const [hide, setHide] = useState(false)
    const [sticky, setSticky] = useState(false);
    const width =  $(window).innerWidth()
    
    $(window).on("scroll", ()=>{
        const counter = $(window).scrollTop();
        if(counter < width){
            $(".progressor span").css({width : `${counter}px`})
        }
        else{
            $(".progressor span").css({width : `100%`})

        }
    })


    useEffect(()=>{
        function ScrollFnct(){

                setSticky(window.scrollY >100)
        }
        $(window).on("scroll", ScrollFnct)
    
        return ()=> $(window).unbind("scroll", ScrollFnct);
    })

    return(
        <div className={`${sticky?"sticky":""}`} style={{display:"grid"}} id="scroll_top">
            <div className="header_component">
            
                <label className="logo">D<span className="logoA">a</span>v<span className="logoI">i</span>s</label>

            <div  className="mobile_menu">{!hide?<AiOutlineMenu onClick={()=>setHide(!hide)}/>:<ImCross onClick={()=>setHide(!hide)}/>}</div>
            <ul className="desktopResponsive">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><Link to={"/portfolio"}>Portofolio</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>

            <ul className={hide?"mobileResponsive":"mobileInvicible"}>              
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/portfolio"}>Portofolio</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
        <div className="progressor"><span></span></div>
        </div>
    )
}

export default Header;