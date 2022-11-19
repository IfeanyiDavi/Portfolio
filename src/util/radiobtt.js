
import { Link } from "react-router-dom";
import "../component/footer/footer.css";

function RadioBtn(){
    return(
        <>
             <select className="select">
                <option> </option>
                <option>Basic</option>
                 <option>Standard</option>
                 <option>Premium</option>
            </select>
        </>
    )
}

export default RadioBtn;