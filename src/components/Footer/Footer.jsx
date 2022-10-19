import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

import milton from "../../assets/carb-footer.png";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <img className="footer__img" src={milton} alt="carbobasic" />

                <div className="box1">
                    <h1>
                        <span>carbo</span>basic
                    </h1>

                    <h3>engineering LTD.</h3>
                </div>
            </div>

            <div className="social__links">
                <p className="footer__social">
                    Follow us on our social networks
                </p>

                <Link
                    className="linkedin"
                    to="https://www.linkedin.com/in/milton-avila-5b729419"
                >
                    <FaLinkedinIn size="2.5rem" color="#092c3f" />
                </Link>

                <Link
                    className="facebook"
                    to="https://www.facebook.com/Carbobasic/"
                >
                    {" "}
                    <FaFacebook size="2.5rem" color="#092c3f" />{" "}
                </Link>
            </div>
            <span className="footer__copy">
                &#169; CarboBasic. All rights reserved
            </span>
        </footer>
    );
};

export default Footer;
