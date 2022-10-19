import React, { useEffect, useState } from "react";
import "./home.css";
import milton from "../../assets/Milton.png";
import Translation from "./Data.json";

const Home = (props) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        if (props.language === "eng") {
            setContent(Translation.eng);
        } else if (props.language === "esp") {
            setContent(Translation.esp);
        }
    }, [props.language]);

    return (
        <div className="container__home">
            <div className="container__img">
                <img src={milton} alt="home" />
                <div className="container__p">
                    <p>
                        {content.title}Leaders in{" "}
                        <span>Engineering Consultation</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
