import React from "react";
import {BsArrowRightCircle} from "react-icons/bs"

import labtop_phone_image from "../../public/laptop_phone.jpg";
import "./section.css";


function Section(){
    return(
        <div className="secton_component">
            <div className="section_title"><span>Web & WordPress Development</span><span>I'm 
               a frelancer with a specialty of website and wordpress development/design.</span>
            </div>

            <div className="secton_image-background">
                    
                    <img src={labtop_phone_image} />

                    <div className="section_gallery">
                        <span className="contact_span">Fully Responsive Websites </span>
                        <div className="section_portfolio_button">
                            <span>View portfolio</span>
                            <span className="section_arr_btn"> <BsArrowRightCircle/></span>
                        </div>
                 </div>
            </div>
            
        </div>
    )
}
export default Section;