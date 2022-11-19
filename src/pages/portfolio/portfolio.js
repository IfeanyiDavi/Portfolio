import Header from "../../component/header/header";
import Button_ from "../../component/button/button";
import Image from "../../public/images.jpg";
import "./portfolio.css";
import MainFooter from "../../component/footer/mainFooter";
function Portfolio(){
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