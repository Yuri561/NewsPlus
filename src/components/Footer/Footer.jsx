import React from "react";
import "./Footer.css";
import Logo from '../../img/logo.png'
const Footer = () => {
    return (
        <section className="f-wrapper w-100">
            <div className="paddings innerWidth flexCenter f-container container-fluid ">
                {/* Left Side */}

                <div className="flexColStart f-left">
                    <img src={Logo} alt="Logo" width={20} />
                    <span className="secondaryText">
                        Our mission is to provide the best<br/> 
                        service to our customers and to make sure<br/>
                        that they are satisfied with our services.
                    </span>
                </div>
                    
                    {/* Right Side */}
                    <div className="flexColStart f-right">
                        <span className="orangeText primaryText">Quick Links</span>
                        <div className="flexCenter f-menu">
                        <span className="secondaryText">Home</span>
                        <span className="secondaryText">Get Latest</span>
                        <span className="secondaryText">Share Your Story</span>
                        <span className="secondaryText">Contact</span>

                        </div>
                    </div>
            </div>
        </section>
    );
}


export default Footer;