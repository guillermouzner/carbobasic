import React from "react";
import "./about.css";
import OurMision from "../../assets/ourMission.png";
import OurVision from "../../assets/ourVision.png";
import OurValues from "../../assets/ourValues.png";
import Milton from "../../assets/milton-me.webp";

const About = () => {
    return (
        <div className="container__about">
            <div className="about">
                <h1>About</h1>
                <span className="about__subtitle">Carbobasic</span>
            </div>

            <div className="description__about">
                <p>
                    Carbobasic is here to provide engineers who have many years
                    of combined experience in the design, implementation and
                    maintenance of industrial units and plants in the Cryogenic,
                    Petrochemical and Oil And Gas area of business.
                </p>

                <p>
                    Our professionals include Chartered Engineers, Designers,
                    Planners right through to Consultants.
                </p>

                <p>
                    For each project you have, Carbobasic is your one stop
                    consultation for the whole project.
                </p>

                <p>
                    Get in touch today to let us know about your needs and how
                    Carbobasic can make everything just that little bit easier.
                </p>
            </div>

            <div className="about__card">
                <div className="card__mission">
                    <img src={OurMision} alt="mision" width="150px" />
                    <p>
                        <h1>Our Mission</h1>
                        Carbobasic provide engineering solutions of excellence
                        to companies around the world in the business of the Oil
                        & Gas, Petrochemicals and Cryogenics.
                    </p>
                </div>

                <div className="card__mission">
                    <p>
                        <h1>Our Vision</h1>
                        To be leaders in providing engineering solutions of
                        excellence around the world and to be respected and
                        recognised as a transparent, honest and responsible
                        company.
                    </p>
                    <img src={OurVision} alt="mision" width="150px" />
                </div>

                <div className="card__mission">
                    <img src={OurValues} alt="mision" width="150px" />
                    <p>
                        <h1>Our Values</h1>
                        Carbobasic is inspired by the respect to all the
                        stakeholders in a project we undertake, the commitment
                        to every task we are trusted, the quality of the
                        engineering we provide and the safety in our designs.
                        Our achievements build up the reputation of Carbobasic
                        and the trust of our clients in our work.
                    </p>
                </div>
            </div>

            <div className="about__me">
                <h1>Meet Me</h1>
                <span className="about__subtitle">Milton Avila</span>
            </div>

            <div className="about__card">
                <div className="card__aboutMe">
                    <img src={Milton} alt="me" width="150px" />
                    <p>
                        <h1>Who I am?</h1>
                        Hi my name is Milton and I'm a graduated{" "}
                        <span>Chemical Engineer</span> from the University of
                        Buenos Aires, with a{" "}
                        <span>
                            postgraduate degree in Career of Specialisation in
                            Oil
                        </span>{" "}
                        from the Institute of the Oil & Gas of the University of
                        Buenos Aires.
                    </p>
                </div>

                <div className="description__about-me">
                    <h1>My Work</h1>

                    <p>
                        I have <span>15+ years of experience</span> as a{" "}
                        <span>
                            Process Engineer in EPC projects in the Oil & Gas
                            area
                        </span>{" "}
                        of business and I have been working since 2013 in
                        petrochemicals, cryogenic terminals and gas treatment
                        EPC projects.
                    </p>

                    <p>
                        I am a chartered Engineer in the UK and a{" "}
                        <span>member of IChemE</span> with a continuous
                        collaboration with the institution as an active member
                        of <span>IChemE North West Members Group Commitee</span>{" "}
                        since 2016.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
