import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contatc = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jbpuget",
                "template_m77v2j9",
                form.current,
                "zWIe9raD79SJa5bTv"
            )
            .target.reset();
    };
    return (
        <div className="container__contact">
            <div className="contact">
                <h1>Contact</h1>
            </div>

            <div className="container__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.566971547256!2d-2.2190840845040505!3d53.368904280722866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d32bd300a3f%3A0x3f6552f4a0169ce7!2s20%20Mableden%20Cl%2C%20Heald%20Green%2C%20Cheadle%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1664828888881!5m2!1ses!2sar"
                    width="800"
                    height="250"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="myFrame"
                ></iframe>
            </div>

            <div className="contact__container  grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">
                                info@carbobasic.co.uk
                            </span>

                            <a
                                href="mailto:info@carbobasic.co.uk"
                                className="contact__button"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">
                                Phone number
                            </h3>
                            <span className="contact__card-data">
                                +447438389980
                            </span>

                            <a
                                href="https://walink.co/7ae88b"
                                className="contact__button"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact__form"
                    >
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write your project"
                            ></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="contact__cont">
                <div className="carb__contact">
                    <h1>inquiries</h1>
                    <p>
                        For any inquiries, questions or commendations, please
                        call:{" "}
                        <a
                            href="https://walink.co/7ae88b"
                            className="contact__button"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            +447438389980
                        </a>{" "}
                        or fill out the following form.
                    </p>
                </div>

                <div className="carb__contact">
                    <h1>head office</h1>
                    <p>
                        20 Mableden Close Heald Green Cheadle Cheshire SK8 3DB
                        United Kingdom
                    </p>
                </div>

                <div className="carb__contact">
                    <h1>job applications</h1>
                    <p>
                        To apply for a job with Carobasic, please send a cover
                        letter together with your C.V. to:{" "}
                        <a
                            href="mailto:info@carbobasic.co.uk"
                            className="contact__button"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            info@carbobasic.co.uk
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contatc;
