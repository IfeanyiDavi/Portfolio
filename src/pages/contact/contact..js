import React, {useState, useContext} from "react";
import Header from "../../component/header/header";
import MainFooter from "../../component/footer/mainFooter";
import image from "../../public/images1.jpg";
import RadioBtn from "../../util/radiobtt";

import { ContactData } from "../../context/context";
import "./contact.css";

function Contact(){

    const [enquire, setEnquire] = useState({
        emailEnquire : "",
        messageEnquire  : ""
    });

    const {contact, setContact} = useContext(ContactData);

    const EnquireEvent = e=>{
        setEnquire({...enquire, [e.target.name]:e.target.value});
        console.log(enquire)
    }
    const contactEvent = e =>{

    }

    return(
        <div className="home_component">
            <Header/>
            <div className="form_body">

                <div className="form_image">

                    <img src={image}/>
                    <div>
                        <span>Contact us</span>
                        <p>Our office is open from monday to friday by 9amm to 6pm for Enquiring or Project work</p>
                    </div>
                </div>

                <div className="form_componenet">
                    <div className="enquiring_label">
                        <span>Enquiring or Contact us for work Project?</span>
                    </div>
                    <div className="form_info">
                        <label>Email</label>
                        <input type={"email"} name="emailEnquire" value={enquire.emailEnquire} onChange={EnquireEvent}/>
                    </div>
                    <div className="form_info">
                        <label>Message</label>
                        <textarea value={enquire.messageEnquire} name="messageEnquire" onChange={EnquireEvent}/>
                    </div>
                    <button>Enquire</button>
                
                
                    <div className="form_component1">
                        <label className="form_title">OR</label>
                            <div className="form_info">
                                    <label>Email</label>
                                    <input type={"email"} value={contact.email} onChange={contactEvent}/>
                            </div>
                            <div className="form_info">
                                <label>Plan</label>
                                <RadioBtn/>
                            </div>
                            <div className="form_info">
                                <label>Message</label>
                                <textarea />
                            </div>
                            <button>Submit</button>
                    </div>
        
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}

export default Contact;