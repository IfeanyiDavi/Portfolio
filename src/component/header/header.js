import React, {useState, useEffect} from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {GiCancel} from "react-icons/gi";

import "./header.css";


function Header(){
    const [hide, setHide] = useState(false)
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        function ScrollFnct(){
            setSticky(window.scrollY >100)
        }
        $(window).on("scroll", ScrollFnct)
    
        return ()=> $(window).unbind("scroll", ScrollFnct);
    })

    return(
        <div className={`${sticky?"sticky":""}`} style={{display:"grid"}}>
            <div className="header_component">
            <div className="logo_hire_me">
                <label className="logo">D<span className="logoA">a</span>v<span className="logoI">i</span>s</label>
                <span className="hire_me">Hire Me</span>
            </div>
            <div  className="mobile_menu">{!hide?<AiOutlineMenu onClick={()=>setHide(!hide)}/>:<GiCancel onClick={()=>setHide(!hide)}/>}</div>
            <ul className="desktopResponsive">
                <li><Link to={"/"}>Home</Link></li>
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
        </div>
    )
}

export default Header;