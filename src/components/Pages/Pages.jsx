import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const Pages = () => {
    let { niceUrl } = useParams();

    const [blog, setBlog] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .post(
                `https://carbobasic-backend.herokuapp.com/notion-api-read/${niceUrl}`
            )
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [niceUrl]);

    if (loading)
        return (
            <div className="container__loading">
                <div className="spinner">
                    Loading...
                    <div className="spinner-sector spinner-sector-red"></div>
                    <div className="spinner-sector spinner-sector-blue"></div>
                    <div className="spinner-sector spinner-sector-green"></div>
                    <div className="spinner-sector spinner-sector-orange"></div>
                </div>
            </div>
        );

    return (
        <>
            <article className="container__pages">
                <Link to="/blog" className="back__list">
                    ← Back to list
                </Link>
                {blog.map((singleBlog) => (
                    <div className="card__list">
                        <h1 className="link__blog">{singleBlog.title}</h1>

                        <div className="card__content__blog">
                            {singleBlog.content.map((singleContent) => (
                                <>
                                    <div>{singleContent}</div>
                                    <div>
                                        <br />
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
        </>
    );
};

export default Pages;
