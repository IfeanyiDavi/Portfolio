

import RadioBtn from "../../util/radiobtt";
import "./footer.css";
function Footer(){
    return(
        <div className="footer">
            <form>
                <div className="form_component">
                    <label className="form_title">Contact Us</label>
                    <div className="section_form">
                       <div className="plan">
                            <label>Email</label>
                            <input type={"email"}/>
                       </div>
                        <div className="plan">
                            <label>Plan</label>
                           <RadioBtn/>
                        </div>
                        <div className="message">
                            <label>Message</label>
                            <textarea />
                        </div>
                        <input type={"submit"} value="Submit"/>
                    </div>
                </div>
               
            </form>
        </div>
    )
}

export default Footer;