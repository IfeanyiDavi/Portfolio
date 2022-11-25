

import RadioBtn from "../../util/radiobtt";
import "./footer.css";
function Footer(){
    return(
        <div className="footer">
            <form>
                <div className="form_component">
                    <label className="form_title">Contact Us</label>
                    <div className="section_form">
                       <div className="plan inputs">
                            <input type={"email"} className="form_input" id="email" placeholder=" "/>
                            <label className="form_label" htmlFor="email">Email</label>

                       </div>
                        <div className="plan">
                           <RadioBtn/>
                        </div>
                        <div className="message inputs">
                            <textarea className="form_message" id="message" placeholder=" "/>
                            <label className="form_label_m" htmlFor="message">Message</label>
                        </div>
                        <input type={"submit"} value="Submit" className="form_submit"/>
                    </div>
                </div>
               
            </form>
        </div>
    )
}

export default Footer;