import React, { useEffect, useState } from 'react'
import BlogHero from './BlogHero/BlogHero'
import BlogItem from './BlogItem/BlogItem'
import config from '../../../config'
import { storedLanguage } from '../../../http/api'
import axios from 'axios'
import { Link } from 'react-router-dom'
const index = () => {
    const [blogs, setBlogs] = useState([])
    const [blogHero, setBlogHero] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${config.development.api}/blogs?lang=${await storedLanguage()}`)
                const blogHero = response.data.filter(element => element.order == 1)
                setBlogs(response.data)
                setBlogHero(blogHero[0])
            } catch (error) {
                console.error(error)
            }
        }
        fetchBlogs();
    }, [])
    return (
        <div id='shopify-section-blog-template' className='shopify-section'>
            <div className='Section' id='section-blog-template'>
                <div className='Blog'>
                    <div className='Container'>
                        <header className="PageHeader">
                            <div className="SectionHeader SectionHeader--center">
                                <h1 className="SectionHeader__Heading Heading u-h1">
                                    News
                                </h1>
                            </div>
                        </header>
                        <div className='ArticleListWrapper'>
                            <div className='ArticleList ArticleList--withFeatured Grid Grid--m'>
                                <div className='Grid__Cell hidden-phone'>
                                    <div className='FlexboxIeFix'>
                                        <div className='ImageHero ImageHero--small'>
                                            <div className='ImageHero__ImageWrapper'>
                                                <div className="ImageHero__Image Image--zoomOut Image--lazyLoaded" data-optimumx="1.4" style={{ backgroundImage: `url(${config.development.url}/${blogHero['img']})` }}>
                                                    <picture style={{ display: 'none' }}>
                                                        <source data-srcset={`${config.development.url}/${blogHero['img']}`} />
                                                        <img alt={blogHero['name']} className="lazyautosizes Image--lazyLoaded" data-sizes="auto" data-optimumx="1.4" data-parent-fit="cover" sizes="1260px" />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="ImageHero__TextContent">
                                                <header className="SectionHeader">
                                                    <h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading-global">
                                                        <Link to={`${blogHero['slug']}/${blogHero['id']}`} >{blogHero['name']}</Link>
                                                    </h2>
                                                    <div className="SectionHeader__ButtonWrapper">
                                                        <Link to={`${blogHero['slug']}/${blogHero['id']}`} className="Button Button--primary button-custom-color">Read more</Link>
                                                    </div>
                                                </header>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <BlogItem blogs={blogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
