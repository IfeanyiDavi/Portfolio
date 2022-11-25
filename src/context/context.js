import React, {createContext, useState,  useReducer} from "react";
import Reducer from "./reducer.js";


const Disable = false;

export const ContactData = createContext("")

export const ContactContext = ({children})=>{

    const [contact, setContact] = useState({
        email : "",
        plan : "",
        message : ""
    })
    const [state, dispatch] = useReducer(Reducer, Disable);
    return(
        <ContactData.Provider value= {{contact, setContact, state, dispatch}}>{children}</ContactData.Provider>
    )
}
