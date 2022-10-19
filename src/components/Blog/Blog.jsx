import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./blog.css";
import axios from "axios";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .post("http://localhost:4000/notion-api")
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch((error) => console.log("error"));
    }, []);

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
            <article className="container__blog">
                {blog.map((singleBlog) => (
                    <div className="card">
                        <NavLink
                            to={`/blog/${singleBlog.niceUrl}`}
                            className="link__blog"
                        >
                            <h2 className="card__heading__blog">
                                {singleBlog.title}
                            </h2>
                        </NavLink>

                        <div
                            className="tags"
                            style={{ backgroundColor: singleBlog.tagColor }}
                        >
                            {singleBlog.tagName}
                        </div>

                        <div className="card__content__blog">
                            {singleBlog.content}
                        </div>
                    </div>
                ))}
            </article>
        </>
    );
};

export default Blog;
