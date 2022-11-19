
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
import "./footer.css";

function MainFooter(){
    return(
        <div className="mainFooter">
            <ul>
                <li><FiFacebook/></li>
                <li><FiTwitter/></li>
                <li><FiInstagram/></li>
            </ul>
            <span>Copyright &copy; 2022 Davis : Nigeria based frelancer web designer and developer</span>
        </div>
    )
}

export default MainFooter;
