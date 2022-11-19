import Aside from "../../component/body/aside";
import Section from "../../component/body/section";
import Footer from "../../component/footer/footer";
import MainFooter from "../../component/footer/mainFooter";
import Header from "../../component/header/header";

import "./home.css";
function Home(){
    return(
        <div className="home_component">
            <Header/>
            <Section/>
            <Aside/>
            <Footer/>
            <MainFooter/>
        </div>
    )
}

export default Home;