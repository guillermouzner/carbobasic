import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./blog.css";
import axios from "axios";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:4000/notion-api")
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
    // tagsBlog.properties.SelectTags.multi_select[0].name

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

            {/* <Routes>
                <Route path={`boca-puto`} element={<Pages />} />
            </Routes> */}
        </>
    );
};

export default Blog;
