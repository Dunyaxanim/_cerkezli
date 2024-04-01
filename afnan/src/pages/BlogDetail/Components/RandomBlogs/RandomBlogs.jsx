import React, { useState, useEffect } from 'react'
import { storedLanguage } from '../../../../http/api'
import axios from 'axios'
import config from '../../../../config'
import { Link } from 'react-router-dom'

const RandomBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${config.development.api}/blogs-rand?lang=${await storedLanguage()}`)
                setBlogs(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchBlogs();
    }, [])
    return (
        <>
            {
                blogs.map((blog) => (
                    <div key={blog.name} className='Grid__Cell 1/2--tablet-and-up'>
                        <article className='ArticleItem'>
                            <Link
                                className="ArticleItem__ImageWrapper AspectRatio AspectRatio--withFallback custom-background-container"
                                style={{ background: `url(${config.development.url}/${blog.img})`, "--aspect-ratio": "1.7" }}
                                to={`/blog/detail/${blog['slug']}/${blog['id']}`}
                            >
                                <img
                                    className="ArticleItem__Image Image--lazyLoad Image--fadeIn"
                                    data-widths="[200,400,600,700,800,900,1000,1200]"
                                    data-sizes="auto"
                                    alt={blog.name}
                                />
                            </Link>
                            <div className="ArticleItem__Content">
                                <h2 className="ArticleItem__Title Heading u-h2">
                                    <Link to={`/blog/detail/${blog['slug']}/${blog['id']}`}>
                                        {blog.name}
                                    </Link>
                                </h2>
                            </div>
                        </article>
                    </div>
                ))
            }
        </>
    )
}

export default RandomBlogs
