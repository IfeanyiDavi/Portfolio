import React, {useContext, useState, useEffect} from "react";
import $ from "jquery";
import { ContactData } from "../../context/context";
import { Basic } from "../../util/data";
import { Standard } from "../../util/data";
import { Premium } from "../../util/data";
import Button_ from "../button/button";

import "./section.css";
function Aside(){
    const {contact, setContact, dispatch} = useContext(ContactData);
    const [webBuild, setWebBuid] = useState()

    const BasicBtn = e=>{
        dispatch({
            type :"DISABLE"
        });
        setContact({contact, [e.target.name]:"Basic"})
        $(window).scrollTop(2400, 0)
    }
    const BasicBtn1 = e=>{
        dispatch({
            type :"DISABLE"
        });
        setContact({contact, [e.target.name]:"Standard"})
        $(window).scrollTop(2400, 0)
    }

    const BasicBtn2 = e=>{
        dispatch({
            type :"DISABLE"
        });
        setContact({contact, [e.target.name]:"Premium"})
        $(window).scrollTop(2400, 0)
    }


    return(
        <div className="aside">
            <label className="aside_title">Pricing Per Build</label>
            
            <div className="box_component">
                <div className="asideBox">
                     <span>BASIC</span>
                     <span className="asideBoxList">{Basic.map((info, id)=>{
                            return(
                                <span key={id}>{info}</span>
                            )
                            })}
                     </span>
                    <Button_ onClick={BasicBtn} name="plan" namePlan="Request Qoute" type = "button"/>
                </div>
                <div className="asideBox second">
                     <span>STANDARD</span>
                     <span className="asideBoxList" >{Standard.map((info, id)=>{
                            return(
                                <span key={id}>{info}</span>
                            )
                     })}</span>
                     <Button_ namePlan="Request Qoute" type = "button" onClick={BasicBtn1} name="plan"/>

                </div>
                <div className="asideBox last">
                     <span>PREMIUM</span>
                     <span className="asideBoxList">{Premium.map((info, id)=>{
                            return(
                                <span key={id}>{info}</span>
                            )
                            
                     })
                     }</span>
                     <Button_ namePlan="Request Qoute" type = "button" onClick={BasicBtn2} name="plan"/>

                </div>
            </div>
        </div>
    )
}

export default Aside;