import { faL } from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import "../component/footer/footer.css";
import { ContactData } from "../context/context";


function RadioBtn(){
    const {contact, setContact, state} = useContext(ContactData);
    const select = e =>{
        setContact({...contact, [e.target.name]:e.target.value })
    }
    return(
        <>
             <select disabled={state?true:false} className="select" onChange={select} name="plan"  value={contact.plan}>
                <option>{state?contact.plan:"Select plan"}</option>
                <option>Basic</option>
                 <option>Standard</option>
                 <option>Premium</option>
            </select>
        </>
    )
}

export default RadioBtn;