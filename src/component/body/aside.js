
import { Basic } from "../../util/data";
import { Standard } from "../../util/data";
import { Premium } from "../../util/data";
import Button_ from "../button/button";

import "./section.css";
function Aside(){
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
                     <Button_ name="Request Qoute" type="button" backgroundColor="gray"/>

                </div>
                <div className="asideBox second">
                     <span>STANDARD</span>
                     <span className="asideBoxList" >{Standard.map((info, id)=>{
                            return(
                                <span key={id}>{info}</span>
                            )
                     })}</span>
                     <Button_ name="Request Qoute" type = "button"/>

                </div>
                <div className="asideBox last">
                     <span>PREMIUM</span>
                     <span className="asideBoxList">{Premium.map((info, id)=>{
                            return(
                                <span key={id}>{info}</span>
                            )
                            
                     })
                     }</span>
                     <Button_ name="Request Qoute" type = "button"/>

                </div>
            </div>
        </div>
    )
}

export default Aside;