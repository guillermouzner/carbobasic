import React, { useState } from "react";
import "./portfolio.css";
import Industries from "../../assets/industries-color.png";
import Project from "../../assets/projects-color.png";
import Service from "../../assets/services-color.png";
import Expertise from "../../assets/expertise-color.png";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const [toggleStateA, setToggleStateA] = useState(5);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleTabA = (index) => {
        setToggleStateA(index);
    };
    return (
        <div className="container__project">
            <div className="project">
                <h1>Projects</h1>
            </div>

            <div className="card__general">
                <div className="card__projects">
                    <img src={Industries} alt="industries" />
                    <div className="box-content">
                        <div className="content">
                            <h3 className="title">Industries</h3>
                            <span
                                className="services__button"
                                onClick={() => toggleTab(1)}
                            >
                                View More{" "}
                                <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card__projects">
                    <img src={Project} alt="Project" />
                    <div className="box-content">
                        <div className="content">
                            <h3 className="title">Projects</h3>
                            <span
                                className="services__button"
                                onClick={() => toggleTab(2)}
                            >
                                View More{" "}
                                <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card__projects">
                    <img src={Service} alt="Service" />
                    <div className="box-content">
                        <div className="content">
                            <h3 className="title">Services</h3>
                            <span
                                className="services__button"
                                onClick={() => toggleTab(3)}
                            >
                                View More{" "}
                                <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card__projects">
                    <img src={Expertise} alt="Expertise" />
                    <div className="box-content">
                        <div className="content">
                            <h3 className="title">Expertise</h3>
                            <span
                                className="services__button"
                                onClick={() => toggleTab(4)}
                            >
                                View More{" "}
                                <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    toggleState === 1
                        ? "services__modal active-modal"
                        : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times services__modal-close"
                    ></i>

                    <h3 className="services__modal-title">
                        indu<span>stries</span>
                    </h3>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Oil & Gas</span> (upstream and downstream)
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Petrochemicals</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>LNG terminals</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Cryogenics</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>FLNG, FPSO, FSRU projects</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Gas Treatment Units</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Flare Systems and Utilities</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={
                    toggleState === 2
                        ? "services__modal active-modal"
                        : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times services__modal-close"
                    ></i>

                    <h3 className="services__modal-title">
                        pro<span>jects</span>
                    </h3>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Conceptual Studies</span>
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Feasibility Studies</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>FEED Studies</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Detail Engineering</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>
                                    Pre-Commissioning / Commissioning / Start-up
                                </span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Test Run / Performance Test</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Troubleshooting</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={
                    toggleState === 3
                        ? "services__modal active-modal"
                        : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times services__modal-close"
                    ></i>

                    <h3 className="services__modal-title">
                        serv<span>ices</span>
                    </h3>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Equipment Sizing & Design</span> (vessels,
                                S&T heat exchangers, Air Coolers)
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Dynamic Simulations</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Flare Systems design and rating</span>{" "}
                                (UniSim Flare)
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Engineering Consultancy</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Process Engineering development</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>FAT & SAT</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Site surveys</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={
                    toggleState === 4
                        ? "services__modal active-modal"
                        : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i
                        onClick={() => toggleTab(0)}
                        className="uil uil-times services__modal-close"
                    ></i>

                    <h3 className="services__modal-title">
                        exp<span>ertise</span>
                    </h3>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Cryogenic terminals</span> (LNG, LPG,
                                Ethane, Ethylene, Propane, Propylene, etc)
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Dehydration Units</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>LTS</span> (Low Temperature Separation)
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Claus Units and Tail Gas Treatment</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>MRU</span> (Mercury Removal Units)
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Gas terminals</span>
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                <span>Brownfield projects & revamps</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="project__record">
                <h1>Projects Record</h1>
            </div>

            <div className="project__record-content">
                <div>
                    <h1>
                        carbo<span>basic</span>
                    </h1>
                </div>

                <div className="portfolio__container">
                    <div className="carb__project">
                        <p>
                            <span>2020</span> UniSim Flare simulations, vent
                            systems verification for LNG and other cryogenic
                            carriers. Process Engineer of FSU-FRU Detail
                            Engineering project. Client TGE Marine GmbH (Bonn,
                            Germany).
                        </p>
                    </div>

                    <div className="carb__project">
                        <p>
                            <span>2019</span> px heat exchanger (Saint Fergus,
                            Scotland). FEED study Process Engineering for
                            Costain, final user px.
                        </p>
                    </div>
                </div>

                <div className="milton__proyects">
                    <h1>
                        milton <span>avila</span>
                    </h1>

                    <div className="portfolio__tabs">
                        <div
                            className={
                                toggleStateA === 5
                                    ? "portfolio__button active"
                                    : "portfolio__button"
                            }
                            onClick={() => toggleTabA(5)}
                        >
                            For TGE Gas Engineering
                        </div>

                        <div
                            className={
                                toggleStateA === 6
                                    ? "portfolio__button active"
                                    : "portfolio__button"
                            }
                            onClick={() => toggleTabA(6)}
                        >
                            For A-Evangelista S.A.
                        </div>

                        <div
                            className={
                                toggleStateA === 7
                                    ? "portfolio__button active"
                                    : "portfolio__button"
                            }
                            onClick={() => toggleTabA(7)}
                        >
                            For other companies
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio__sections">
                <div
                    className={
                        toggleStateA === 5
                            ? "portfolio__content portfolio__content-active"
                            : "portfolio__content"
                    }
                >
                    <div className="portfolio__container">
                        <div className="carb__project">
                            <p>
                                <span>2019</span> Propylene Sphere Tank Project
                                (Bataan, Philippines). Process Engineering for
                                Pre-Commissioning and Construction stages for
                                Whessoe (Makati, Philippines), final user
                                Petron.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2018</span> LPG Peak Shaving plant
                                Avonmouth (Avonmouth, UK). Process Engineering
                                for a FEED study, final user Flogas.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2018</span> FSU-FRU LNG (Ghana). Detail
                                Engineering for TGE Marine GmbH, final user
                                Gasfin S.A.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2017</span> Butane Storage Tank and
                                Terminal (Rotterdam, Holland). Process
                                Engineering for a FEED study, final user HES.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2017</span> LNG Bunkering (Tallin,
                                Estonia). Process Engineering for a Conceptual
                                Study, final user AS Vopak E.O.S.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2016</span> Ethane Storage Terminal
                                (Grangemouth, Scotland). Commissioning Engineer,
                                final user INEOS.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2015</span> Ethane Storage Terminal
                                (Grangemouth, Scotland). Operating Instructions
                                for operators, final user INEOS.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2015</span> 5100 cbm LNG Carrier (South
                                Korea). Process Engineering for a Conceptual
                                Study for TGE Marine GmbH, final user Hanjin
                                Industries and Construction.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2015</span> Beynes Dehydration Unit
                                (Paris, France). Performance Test, final user
                                Storengy.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2014</span> BOG Recondenser (Boryeong,
                                South Korea). Design and Detail Engineering of a
                                BOG Recondenser, final user GS Engineering.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2014</span> Zangzhou LNG Terminal
                                (Zangzhou, China). Process Engineering for a
                                FEED Study, final user CNOOC-Fujian.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2013</span> As Sarah VI Dehydration Unit
                                (Lybia). Process Engineering for a Detail
                                Engineering EP+CS project, final user
                                Wintershall.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        toggleStateA === 6
                            ? "portfolio__content portfolio__content-active"
                            : "portfolio__content"
                    }
                >
                    <div className="portfolio__container">
                        <div className="carb__project">
                            <p>
                                <span>2011-12</span> LNG Regasification Plant
                                (Puerto Cuatreros, Buenos Aires Province,
                                Argentina). Process Engineering for a Conceptual
                                and Feasibility Study, final user YPF S.A.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2011</span> Pipelines for Fire Fighting
                                System, Fire & Gas Detection Instruments System.
                                (Canning, Buenos Aires Province, Argentina).
                                Project Engineering for a Detail Engineering and
                                Construction, final user A-Evangelista S.A.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2009-12</span> Sulfur Recovery Unit
                                (Montevideo, Uruguay). EPC Project. Process
                                Engineering and Engineering Coordination for a
                                Detail Engineering, Construction,
                                Pre-commissioning & Commissioning project, final
                                user ANCAP.
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2008</span> Topping Plant (Trompeteros,
                                Peru). Process Engineering for Detail
                                Engineering, site supervision, Pre-commissioning
                                & Commissioning stages, final user Pluspetrol.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2007</span> LTS skids (with C2 & C3/C4
                                stabilizers). Process Engineering for Detail
                                Engineering and Pre-commissioning of an EP+CS
                                project for Tipiel Colombia.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2006</span> Splitter II (Luján de Cuyo,
                                Mendoza Province, Argentina). Process
                                Engineering for Detail Engineering and Head
                                Commissioning Engineer for Construction and
                                Performance Test, final user Repsol-YPF.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2005-06</span> CRU, Contaminants Removal
                                Unit (Yacuiba, Bolivia). Process Engineering for
                                Basic and Detail Engineering, Construction,
                                Pre-commissioning, Commissioning, Start Up and
                                Performance, final user Petrobras.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2005</span> LTS El Portón (El Portón,
                                Neuquén Province, Argentina. Process Engineering
                                for Basic and Detail Engineering and
                                Pre-commissioning, final user Repsol-YPF.
                            </p>
                        </div>
                        <div className="carb__project">
                            <p>
                                <span>2005</span> Carina & Aries LTS (Rio
                                Grande, Tierra del Fuego province, Argentina,
                                for Total E&P). Pre-commissioning Process
                                Engineer. Support from office to Commissioning
                                team on site.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        toggleStateA === 7
                            ? "portfolio__content portfolio__content-active"
                            : "portfolio__content"
                    }
                >
                    <div className="portfolio__container">
                        <div className="carb__project">
                            <p>
                                <span>2004</span> Agrochemicals production
                                (Zárate, Buenos Aires Province, Argentina).
                                Manufacturing Engineer at IPESA S.A. (now
                                Agrofina S.A.)
                            </p>
                        </div>

                        <div className="carb__project">
                            <p>
                                <span>2003</span> Process Engineer, Industrial
                                Safety and Risks Analyst (Buenos Aires city,
                                Argentina). Project Engineering for Hazardous
                                Areas studies, QRA, and main industrial risks
                                analysis studies for various projects at
                                E.I.S.S.A. (Estudio Ingeniero Solano S.A.).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
