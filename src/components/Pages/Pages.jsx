import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const Pages = () => {
    let { niceUrl } = useParams();

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .post(`http://localhost:4000/notion-api-read/${niceUrl}`)
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => console.log(error));
    }, [niceUrl]);

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
