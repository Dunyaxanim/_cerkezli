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
        </>
    )
}

export default BlogHero
