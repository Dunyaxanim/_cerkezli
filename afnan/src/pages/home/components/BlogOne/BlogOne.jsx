import React from 'react'
import { Link } from 'react-router-dom';
const BlogOne = () => {
    return (
        <div id='shopify-section-16600377987744b3bb' className='shopify-section shopify-section--bordered'>
            <section className='Section'>
                <div className='FeatureText FeatureText--withImage FeatureText--imageRight'>
                    <div className='FeatureText__ContentWrapper'>
                        <div className='FeatureText__Content'>
                            <header className='SectionHeader'>
                                <h3 className="SectionHeader__SubHeading Heading u-h6">HISTORIC DIGITAL SPACE</h3>
                                <h2 className="SectionHeader__Heading Heading u-h1">INNOVATIVE RETAil</h2>
                                <div className='SectionHeader__Description Rte'>
                                    <p>
                                        At Afnan Perfumes, we are always crafting experiences. As a trending and innovative brand, we have created a unique Meta Retail Exhibition to extend our #CraftedbyAfnan concept to the new generation parallel world and build unlimited experiences for our community.
                                    </p>
                                    <br />
                                    <br />
                                    <Link to='/' className='Link Link--underline custom-link'>CLICK TO REGISTER AND ENTER TO AFNAN MUSEUM
                                    </Link>
                                </div>
                            </header>

                        </div>
                    </div>
                    <div className='FeatureText__ImageWrapper'>
                        <div className='AspectRatio custom-with-blog-one'>
                            <img src="/images/blog-one.webp" alt="" className='Image--slideRight lazyautosizes Image--lazyLoaded' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogOne
