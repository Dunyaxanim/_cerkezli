import React from 'react'
import { Link } from 'react-router-dom';
const BlogOne = () => {
    return (
        <div id='shopify-section-16600377987744b3bb' className='shopify-section shopify-section--bordered'>
            <section className='Section'>
                {/* <div className='FeatureText FeatureText--withImage FeatureText--imageRight'>
                    <div className='FeatureText__ContentWrapper'>
                        <div className='FeatureText__Content'>
                            <header className='SectionHeader'>
                                <h3 className='SectionHeader__SubHeading Heading u-h6'>HISTORIC DIGITAL SPACE</h3>
                                <div className='SectionHeader__Description Rte'>
                                    <p>
                                        At Afnan Perfumes, we are always crafting experiences. As a trending and innovative brand, we have created a unique Meta Retail Exhibition to extend our #CraftedbyAfnan concept to the new generation parallel world and build unlimited experiences for our community.
                                    </p>
                                    <br />
                                    <br />
                                    This time, we have brought our latest launched collection Historic to the metaverse world. We can't wait for all our Afnan Lovers to enjoy a different retail and product touch point dimension.
                                </div>
                                <Link className="Link Link--underline">CLICK TO REGISTER AND ENTER TO AFNAN MUSEUM</Link>
                            </header>
                        </div>
                        <div className='FeatureText__ImageWrapper'>
                            <div className='AspectRatio custom-with-blog-one'>
                                <img src="/images/blog-one.webp" alt="" className='Image--slideRight lazyautosizes Image--lazyLoaded'
                                data-expand="-200"
                                data-widths="[400,600,700,800,900,1000,1200]"
                                data-sizes="auto"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="FeatureText FeatureText--withImage FeatureText--imageRight">
                    <div className="FeatureText__ContentWrapper">
                        <div className="FeatureText__Content">
                            <header className="SectionHeader">
                                <h3 className="SectionHeader__SubHeading Heading u-h6">HISTORIC DIGITAL SPACE</h3>
                                <h2 className="SectionHeader__Heading Heading u-h1">INNOVATIVE RETAil</h2>
                                <div className="SectionHeader__Description Rte">
                                    <p></p>
                                    </div>
                                        <a href="https://bit.ly/3OeWIWG" className="Link Link--underline">
                                        </a>
                                    </header>
                                </div>
                        </div>
                        <div className="FeatureText__ImageWrapper"><div className="AspectRatio" style="max-width: 1200px; --aspect-ratio: 1.3001083423618636"><img className="Image--slideRight lazyautosizes Image--lazyLoaded" data-expand="-200" data-widths="[400,600,700,800,900,1000,1200]" data-sizes="auto" alt="" data-srcset="//www.afnan.com/cdn/shop/files/Metaverse-WebBanner_400x.jpg?v=1660037054 400w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_600x.jpg?v=1660037054 600w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_700x.jpg?v=1660037054 700w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_800x.jpg?v=1660037054 800w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_900x.jpg?v=1660037054 900w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_1000x.jpg?v=1660037054 1000w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_1200x.jpg?v=1660037054 1200w" sizes="735px" srcset="//www.afnan.com/cdn/shop/files/Metaverse-WebBanner_400x.jpg?v=1660037054 400w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_600x.jpg?v=1660037054 600w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_700x.jpg?v=1660037054 700w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_800x.jpg?v=1660037054 800w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_900x.jpg?v=1660037054 900w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_1000x.jpg?v=1660037054 1000w, //www.afnan.com/cdn/shop/files/Metaverse-WebBanner_1200x.jpg?v=1660037054 1200w">

                            <noscript>
                                <img src="//www.afnan.com/cdn/shop/files/Metaverse-WebBanner_800x.jpg?v=1660037054" alt="">
                            </noscript>
                        </div>
                        </div>
                    </div> */}
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
