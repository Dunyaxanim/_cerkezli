import React, { useState, useEffect } from 'react'
import '../../../Blog/blog.css'
import { Link } from 'react-router-dom'
import config from '../../../../config'

const BlogHero = () => {
    
    return (
        <>
            <div className='Grid__Cell hidden-phone'>
                <div className='FlexboxIeFix'>
                    <div className='ImageHero ImageHero--small'>
                        <div className='ImageHero__ImageWrapper'>
                            <div className="ImageHero__Image Image--zoomOut Image--lazyLoaded" data-optimumx="1.4" style={{ backgroundImage: `url(${config.development.url}/${blogHero[0]['img']})` }}>
                                <picture style={{ display: 'none' }}>
                                    <source data-srcset={`${config.development.url}/${blogHero[0]['img']}`} />
                                    <img alt={blogHero[0]['name']} className="lazyautosizes Image--lazyLoaded" data-sizes="auto" data-optimumx="1.4" data-parent-fit="cover" sizes="1260px" />
                                </picture>
                            </div>
                        </div>
                        <div className="ImageHero__TextContent">
                            <header className="SectionHeader">
                                <h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading-global">
                                    <Link to={`${blogHero[0]['slug']}/${blogHero[0]['id']}`} >{blogHero[0]['name']}</Link>
                                </h2>
                                <div className="SectionHeader__ButtonWrapper">
                                    <Link to={`${blogHero[0]['slug']}/${blogHero[0]['id']}`} className="Button Button--primary button-custom-color">Read more</Link>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='Grid__Cell hidden-tablet-and-up'>
                <article className="ArticleItem" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                    <Link className="ArticleItem__ImageWrapper AspectRatio AspectRatio--withFallback" style={{ background: 'url(//www.afnan.com/cdn/shop/articles/IMG_7295_1x1.jpg?v=1699857930)', paddingBottom: '58%', '--aspect-ratio': '1.7' }} to="/blog/detail">
                        <img className="ArticleItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,400,600,700,800,900,1000,1200]" data-sizes="auto" alt="AFNAN PERFUMES CONTINUES ITS FRAGRANT JOURNEY IN OMAN WITH A STUNNING OPENING IN AVENUES MALL" data-srcset="//www.afnan.com/cdn/shop/articles/IMG_7295_200x.jpg?v=1699857930 200w, //www.afnan.com/cdn/shop/articles/IMG_7295_40x.jpg?v=1699857930 400w, //www.afnan.com/cdn/shop/articles/IMG_7295_600x.jpg?v=1699857930 600w, //www.afnan.com/cdn/shop/articles/IMG_7295_700x.jpg?v=1699857930 700w, //www.afnan.com/cdn/shop/articles/IMG_7295_800x.jpg?v=1699857930 800w, //www.afnan.com/cdn/shop/articles/IMG_7295_900x.jpg?v=1699857930 900w, //www.afnan.com/cdn/shop/articles/IMG_7295_1000x.jpg?v=1699857930 1000w, //www.afnan.com/cdn/shop/articles/IMG_7295_1200x.jpg?v=1699857930 1200w" sizes="574px" srcSet="//www.afnan.com/cdn/shop/articles/IMG_7295_200x.jpg?v=1699857930 200w, //www.afnan.com/cdn/shop/articles/IMG_7295_400x.jpg?v=1699857930 400w, //www.afnan.com/cdn/shop/articles/IMG_7295_600x.jpg?v=1699857930 600w, //www.afnan.com/cdn/shop/articles/IMG_7295_700x.jpg?v=1699857930 700w, //www.afnan.com/cdn/shop/articles/IMG_7295_800x.jpg?v=1699857930 800w, //www.afnan.com/cdn/shop/articles/IMG_7295_900x.jpg?v=1699857930 900w, //www.afnan.com/cdn/shop/articles/IMG_7295_1000x.jpg?v=1699857930 1000w, //www.afnan.com/cdn/shop/articles/IMG_7295_1200x.jpg?v=1699857930 1200w" />
                        <noscript>
                            <img className="ArticleItem__Image" src="//www.afnan.com/cdn/shop/articles/IMG_7295_600x.jpg?v=1699857930" alt="AFNAN PERFUMES CONTINUES ITS FRAGRANT JOURNEY IN OMAN WITH A STUNNING OPENING IN AVENUES MALL" />
                        </noscript>
                    </Link>
                    <div className="ArticleItem__Content">
                        <h2 className="ArticleItem__Title Heading u-h2">
                            <Link to={`${blogHero[0].slug}/${blogHero[0].id}`}>AFNAN PERFUMES CONTINUES ITS FRAGRANT JOURNEY IN OMAN WITH A STUNNING OPENING IN AVENUES MALL</Link>
                        </h2>
                        <p className="ArticleItem__Excerpt">Muscat, Oman - November 01, 2023
                        {blogHero[0]->}
                        </p>
                        <Link to={`${blogHero[0].slug}/${blogHero[0].id}`} className="ArticleItem__Link Link Link--underline">Read more</Link>
                    </div>
                </article>
            </div> */}
        </>
    )
}

export default BlogHero
