import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import axios from 'axios'
import config from '../../../../config'
import { storedLanguage } from '../../../../http/api'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchblogs = await axios.get(`${config.development.api}/blogs?lang=${await storedLanguage()}`);
                const fetchblogsData = fetchblogs.data;
                setBlogs(fetchblogsData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])
    return (
        <div id='shopify-section-blog-posts' className='shopify-section shopify-section--bordered'>
            <section className='Section Section--spacingNormal' id='section-blog-posts'>
                <div className='Container'>
                    <header className='SectionHeader SectionHeader--center'>
                        <h3 className='SectionHeader__SubHeading Heading u-h6 '>Know more about us</h3>
                        <h2 className='SectionHeader__Heading Heading u-h1'>AFNAN BLOG</h2>
                    </header>
                    <div className='ArticleListWrapper'>
                        <div className='ArticleList Grid Grid--m Grid--center'>
                            {
                                blogs.map((blog) => (
                                    <div key={blog.key} className='Grid__Cell 1/2--tablet 1/3--lap-and-up '>
                                        <article className='ArticleItem custom-ArticleItem'>
                                            <Link to={`/blog/detail/${blog.slug}/${blog.id}`} className='ArticleItem__ImageWrapper AspectRatio AspectRatio--withFallback custom-ArticleItem__ImageWrapper'>
                                                <img src={`${config.development.url}/${blog.img}`} className='ArticleItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded' alt={blog.name} />
                                            </Link>
                                            <div className="ArticleItem__Content">
                                                <h2 className="ArticleItem__Title Heading u-h2">
                                                    <Link to={`/blog/detail/${blog.slug}/${blog.id}`}>{blog.name}</Link>
                                                </h2>
                                                <p className="ArticleItem__Excerpt">
                                                {blog.user.name} - {blog.formatted_created_at}  {blog && blog.text && blog.text.length > 150 ? `${blog.text.substring(0, 100)}...` : (blog && blog.text)}
                                                </p>
                                                <Link to={`/blog/detail/${blog.slug}/${blog.id}`} className="ArticleItem__Link Link Link--underline">Read more</Link>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className='SectionFooter'>
                        <Button text={"View All Articles"} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
