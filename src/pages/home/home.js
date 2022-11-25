import React, {useEffect} from "react";
import $ from "jquery";
import Aside from "../../component/body/aside";
import Aside2 from "../../component/body/aside2";
import Section from "../../component/body/section";
import Footer from "../../component/footer/footer";
import MainFooter from "../../component/footer/mainFooter";
import Header from "../../component/header/header";
import "./home.css";

function Home(){
    
    useEffect(()=>{
        $(window).scrollTop(0);
    },[]);


    return(
        <div className="home_component">
            <Header/>
            <Section/>
            <Aside/>
            <Aside2/>
            <Footer className="footer_height"/>
            <MainFooter/>
        </div>
    )
}

export default Home;