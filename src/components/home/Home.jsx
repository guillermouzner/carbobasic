import React from "react";
import "./home.css";
import milton from "../../assets/Milton.png";

const Home = () => {
    return (
        <div className="container__home">
            <div className="container__img">
                <img src={milton} alt="home" />
                <div className="container__p">
                    <p>
                        Leaders in <span>Engineering Consultation</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
