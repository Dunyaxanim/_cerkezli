import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../../../config';
import { storedLanguage } from '../../../../http/api';
import RandomBlogs from '../RandomBlogs/RandomBlogs';
const Detail = ({ slug, id }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [blog, setBlog] = useState([]);

    const [blogId, setId] = useState(id);
    
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${config.development.api}/blogs/${blogId}?lang=${await storedLanguage()}`);
                setBlog(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBlog();
    }, [blogId]);

    const handlePrev = async () => {
        const newId = blogId - 1;
        setId(newId);
        try {
            const response = await axios.get(`${config.development.api}/blogs/${newId}?lang=${await storedLanguage()}`);
            setBlog(response.data);
        } catch (error) {
            setId(newId + 1);
            console.error(error);
        }
    };

    const handleNext = async () => {
        const newId = blogId + 1;
        setId(newId);
        try {
            const response = await axios.get(`${config.development.api}/blogs/${newId}?lang=${await storedLanguage()}`);
            setBlog(response.data);
        } catch (error) {
            setId(newId - 1);
            console.error(error);
        }
    };

    return (
        <>
            <div className='shopify-section' id='shopify-section-article-template'>
                <article className='Article'>
                    <aside className={`ArticleToolbar hidden-phone custom-top-aside ${isScrolled ? 'is-visible' : ''}`}>
                        <div className="ArticleToolbar__Left">
                            <span className="Heading Text--subdued u-h8 hidden-tablet">Now reading:</span>
                            <span className="ArticleToolbar__ArticleTitle Heading u-h7"> {blog.name}</span>
                        </div>

                        <div className="ArticleToolbar__Right">
                            <div className="ArticleToolbar__ShareList">
                                <span className="ArticleToolbar__ShareLabel Heading Text--subdued u-h8">Share</span>

                                <div className="HorizontalList">
                                    <Link className="HorizontalList__Item Text--subdued Link" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                            <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="HorizontalList__Item Text--subdued Link" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--twitter" role="presentation" viewBox="0 0 32 26">
                                            <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="HorizontalList__Item Text--subdued Link" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--pinterest" role="presentation" viewBox="0 0 32 32">
                                            <path d="M16 0q3.25 0 6.208 1.271t5.104 3.417 3.417 5.104T32 16q0 4.333-2.146 8.021t-5.833 5.833T16 32q-2.375 0-4.542-.625 1.208-1.958 1.625-3.458l1.125-4.375q.417.792 1.542 1.396t2.375.604q2.5 0 4.479-1.438t3.063-3.937 1.083-5.625q0-3.708-2.854-6.437t-7.271-2.729q-2.708 0-4.958.917T8.042 8.689t-2.104 3.208-.729 3.479q0 2.167.812 3.792t2.438 2.292q.292.125.5.021t.292-.396q.292-1.042.333-1.292.167-.458-.208-.875-1.083-1.208-1.083-3.125 0-3.167 2.188-5.437t5.729-2.271q3.125 0 4.875 1.708t1.75 4.458q0 2.292-.625 4.229t-1.792 3.104-2.667 1.167q-1.25 0-2.042-.917t-.5-2.167q.167-.583.438-1.5t.458-1.563.354-1.396.167-1.25q0-1.042-.542-1.708t-1.583-.667q-1.292 0-2.167 1.188t-.875 2.979q0 .667.104 1.292t.229.917l.125.292q-1.708 7.417-2.083 8.708-.333 1.583-.25 3.708-4.292-1.917-6.938-5.875T0 16Q0 9.375 4.687 4.688T15.999.001z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="ArticleToolbar__Nav">
                                <Link onClick={handlePrev} className="ArticleToolbar__NavItem ArticleToolbar__NavItem--next Heading Text--subdued Link u-h8">
                                    <svg className="Icon Icon--select-arrow-left" role="presentation" viewBox="0 0 11 18">
                                        <path d="M9.5 1.5L1.5 9l8 7.5" strokeWidth="2" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                    </svg>
                                    Prev
                                </Link>
                                <span className="ArticleToolbar__NavItemSeparator"></span>
                                <Link onClick={handleNext} className="ArticleToolbar__NavItem ArticleToolbar__NavItem--prev Heading Text--subdued Link u-h8">
                                    Next
                                    <svg className="Icon Icon--select-arrow-right" role="presentation" viewBox="0 0 11 18">
                                        <path d="M1.5 1.5l8 7.5-8 7.5" strokeWidth="2" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </aside>
                    <div className="Article__ImageWrapper">
                        <div className="Article__Image Image--fadeIn Image--lazyLoaded"
                            style={{ transform: 'translate3d(0px, 0px, 0px)', backgroundImage: `url(${config.development.url}/${blog.img})` }}>
                            <picture style={{ display: 'none' }}>
                                <source srcSet="" />
                                <img alt={blog.name} className="lazyautosizes Image--lazyLoaded" />
                            </picture>
                        </div>

                    </div>
                    <div className="Article__Wrapper">
                        <div className="Article__Content">
                            <header className="Article__Header">
                                <div className="Article__Meta Heading Text--subdued u-h6">
                                    <span className="Article__MetaItem">
                                        {/* {blog.user.name} -  */}
                                        {blog.formatted_created_at}
                                    </span>
                                </div>
                                <h1 className="Article__Title Heading u-h1">{blog.name}</h1>
                            </header>
                            <div className="Article__Body Rte">
                                <p style={{ fontWeight: 400 }}>{blog.formatted_publish_date}</p>
                                <p style={{ fontWeight: 400 }}>
                                    {blog.text}
                                </p>

                            </div>
                            <footer className="Article__Footer">
                                <span className="Article__Author Heading Text--subdued u-h6">Written by AFNAN Perfumes</span>
                                <div className="Article__ShareButtons ShareButtons">
                                    <Link className="ShareButtons__Item ShareButtons__Item--facebook" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                            <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ShareButtons__Item ShareButtons__Item--twitter" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--twitter" role="presentation" viewBox="0 0 32 26">
                                            <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ShareButtons__Item ShareButtons__Item--pinterest" target="_blank" rel="noopener">
                                        <svg className="Icon Icon--pinterest" role="presentation" viewBox="0 0 32 32">
                                            <path d="M16 0q3.25 0 6.208 1.271t5.104 3.417 3.417 5.104T32 16q0 4.333-2.146 8.021t-5.833 5.833T16 32q-2.375 0-4.542-.625 1.208-1.958 1.625-3.458l1.125-4.375q.417.792 1.542 1.396t2.375.604q2.5 0 4.479-1.438t3.063-3.937 1.083-5.625q0-3.708-2.854-6.437t-7.271-2.729q-2.708 0-4.958.917T8.042 8.689t-2.104 3.208-.729 3.479q0 2.167.812 3.792t2.438 2.292q.292.125.5.021t.292-.396q.292-1.042.333-1.292.167-.458-.208-.875-1.083-1.208-1.083-3.125 0-3.167 2.188-5.437t5.729-2.271q3.125 0 4.875 1.708t1.75 4.458q0 2.292-.625 4.229t-1.792 3.104-2.667 1.167q-1.25 0-2.042-.917t-.5-2.167q.167-.583.438-1.5t.458-1.563.354-1.396.167-1.25q0-1.042-.542-1.708t-1.583-.667q-1.292 0-2.167 1.188t-.875 2.979q0 .667.104 1.292t.229.917l.125.292q-1.708 7.417-2.083 8.708-.333 1.583-.25 3.708-4.292-1.917-6.938-5.875T0 16Q0 9.375 4.687 4.688T15.999.001z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <aside className='ArticleNav'>
                        <div className='Container Container--narrow'>
                            <div className='Grid Grid--m Grid--center'>
                                <RandomBlogs />
                            </div>
                        </div>
                    </aside>
                </article>
            </div >
        </>
    )
}

export default Detail
