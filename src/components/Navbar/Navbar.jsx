import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [Toggle, showMenu] = useState(false);

    return (
        // className="header"
        <>
            <div className="header">
                <div>
                    <nav className="nav container">
                        <Link to="/" className="nav__logo">
                            CarboBasic
                        </Link>

                        <div
                            className={
                                Toggle ? "nav__menu show-menu" : "nav__menu"
                            }
                        >
                            <ul className="nav__list grid">
                                <li className="nav__item">
                                    <NavLink end to="/" className="nav__link">
                                        <i className="uil uil-user nav__icon"></i>{" "}
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/about" className="nav__link">
                                        <i className="uil uil-user nav__icon"></i>{" "}
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink
                                        to="/services"
                                        className="nav__link"
                                    >
                                        <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                                        Services
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink
                                        to="/projects"
                                        className="nav__link"
                                    >
                                        <i className="uil uil-scenery nav__icon"></i>{" "}
                                        Projects
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink
                                        to="/contact"
                                        className="nav__link"
                                    >
                                        <i className="uil uil-message nav__icon"></i>{" "}
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/blog" className="nav__link">
                                        <i className="uil uil-message nav__icon"></i>{" "}
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>

                            <i
                                class="uil uil-times nav__close"
                                onClick={() => showMenu(!Toggle)}
                            ></i>
                        </div>

                        <div
                            className="nav__toggle"
                            onClick={() => showMenu(!Toggle)}
                        >
                            <i class="uil uil-apps"></i>
                        </div>
                    </nav>
                </div>
                <div className="idioms">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
                        alt="/"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                        alt="/"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
