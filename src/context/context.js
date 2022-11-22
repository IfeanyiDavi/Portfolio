import React, {createContext, useState} from "react";



export const ContactData = createContext("")

export const ContactContext = ({children})=>{

    const [contact, setContact] = useState({
        email : "",
        plan : "",
        message : ""
    })
    
    return(
        <ContactData.Provider value= {{contact, setContact}}>{children}</ContactData.Provider>
    )
}
