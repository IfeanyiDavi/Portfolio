import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import MainFooter from "../../component/footer/mainFooter";

import image from "../../public/images1.jpg";
import "./contact.css";
import RadioBtn from "../../util/radiobtt";
function Contact(){
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
                        <span>Enquiring OR Contact us for work Project?</span>
                    </div>
                    <div className="form_info">
                        <label>Email</label>
                        <input type={"email"}/>
                    </div>
                    <div className="form_info">
                        <label>Message</label>
                        <textarea />
                    </div>
                    <button>Enquire</button>
                
                
                    <div className="form_component1">
                        <label className="form_title">OR</label>
                            <div className="form_info">
                                    <label>Email</label>
                                    <input type={"email"}/>
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