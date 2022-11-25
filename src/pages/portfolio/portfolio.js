import React, {useEffect} from "react";
import Header from "../../component/header/header";
import $ from "jquery";
import Image from "../../public/images.jpg";
import "./portfolio.css";
import MainFooter from "../../component/footer/mainFooter";

function Portfolio(){

    useEffect(()=>{
        $(window).scrollTop(0);
    },[]);

    return(
        <div className="home_component">
            <Header/>
            <div className="portfolio_website">
                <div className="portflio_gallery">
                    <img alt="image1" src={Image}/>
                    <input type={"button"} value="View site" className="portfolio_button"/>    
                </div> 
                <div className="portflio_gallery">
                    <img alt="image2" src={Image}/>
                    <input type={"button"} value="View site" className="portfolio_button"/>    
                </div>    
                <div className="portflio_gallery">
                    <img alt="image3" src={Image}/>
                    <input type={"button"} value="View site" className="portfolio_button"/>    
                </div>      
                               
            </div>
            <MainFooter/>
        </div>
    )
}

export default Portfolio;