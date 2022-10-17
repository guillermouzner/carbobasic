import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Translation from "./Data.json";
import { DataContex } from "../../context/DataContext";

// import { Routes, Route } from "react-router-dom";
// import Home from "../home/Home";
// import About from "../about/About";
// import Services from "../Services/Service";
// import Projects from "../Portfolio/Portfolio";
// import Contact from "../Contact/Contact";
// import Blog from "../Blog/Blog";
//import Pages from "../Pages/Pages";

const Navbar = () => {
    const { idiom, setIdiom } = useContext(DataContex);

    const [Toggle, showMenu] = useState(false);

    // const [language, setLanguage] = useState(idiom);

    const [content, setContent] = useState({});

    useEffect(() => {
        if (idiom === "eng") {
            setContent(Translation.eng);
        } else if (idiom === "esp") {
            setContent(Translation.esp);
        }
    }, [idiom]);

    return (
        // className="header"
        <>
            <div className="header">
                <div>
                    <nav className="nav container">
                        <Link to="/" className="nav__logo">
                            {content.Title}
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
                    <select
                        value={idiom}
                        onChange={(e) => {
                            setIdiom(e.target.value);
                        }}
                    >
                        <option>eng</option>
                        <option>esp</option>
                    </select>
                </div>
            </div>
            {/* <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/*" element={<Blog />} />
            </Routes> */}
        </>
    );
};

export default Navbar;
