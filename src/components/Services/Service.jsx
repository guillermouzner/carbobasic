import React from "react";
import "./service.css";
import Cyrogenic from "../../assets/service-cyrogenic.png";
import Petrochemical from "../../assets/service-petrochemical.png";
import OilGas from "../../assets/service-oil&gas.png";

const Service = () => {
    return (
        <div className="container__service">
            <div className="service">
                <h1>Services</h1>
            </div>

            <div className="description__service">
                <p>
                    Carbobasic Engineering Ltd provides Engineering Design
                    services for different stages of a project. The range of
                    services are focused in Project and Process Engineering.
                </p>
                <p>
                    Conceptual Engineering, Feasibility Studies, FEED Studies,
                    Detail Engineering, Pre-commissioning, Commissioning,
                    Start-up, Test runs/Performance Tests. The expertise of
                    Carbobasic Engineering Ltd is mainly in Cryogenic,
                    Petrochemicals and Oil & Gas projects.
                </p>
            </div>

            <div className="service__card">
                <div className="card__service">
                    <img src={Cyrogenic} alt="Cyrogenic" />
                    <p>
                        <h1>Cyrogenic</h1>
                        Liquified gases are used in many applications. For bulk
                        transportation purposes, gases are liquified and stored
                        in tanks on ships, trucks or rail-trucks. Normally,
                        on-shore storage in tanks is at atmospheric pressure or
                        for bullets or spheres. The liquified gases are stored
                        under pressurised conditions. It is not well defined at
                        what point on the temperature scale refrigeration ends
                        and cryogenics begins, but scientists assume a gas to be
                        cryogenic if it can be liquefied at or below -150 °C,
                        which the case of the LNG. Many projects include a
                        regasification unit (onshore or FRU) that delivers gas
                        for distribution or to a product user.
                    </p>
                </div>
                <div className="card__service">
                    <img src={Petrochemical} alt="Petrochemical" />
                    <p>
                        <h1>Petrochemical</h1>
                        Petrochemicals are the chemical products obtained from
                        petroleum by refining. Some chemical compounds made from
                        petroleum are also obtained from other fossil fuels,
                        such as coal or natural gas, or renewable sources such
                        as maize, palm fruit or sugar cane.
                    </p>
                </div>
                <div className="card__service">
                    <img src={OilGas} alt="OilGas" />
                    <p>
                        <h1>Oil & Gas</h1>
                        Petroleum engineers help find oil and gas for the
                        country's energy needs. Engineers design and develop
                        methods for separation and treatment of the different
                        components of Petroleum and for processing the product
                        for delivery at conditions that meet the regulations and
                        international standards. Carbobasic expertise in mainly
                        based in gas treatment units and downstream units such
                        as Claus and tail gas treatment plants, Naphtha
                        Splitters, distillation units, hydrocarbon storage,
                        utilities design and general equipment design among
                        others.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;
