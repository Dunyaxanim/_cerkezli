import React from 'react'
import { Link } from 'react-router-dom';
const Feature = () => {
    return (
        <div id='shopify-section-1604994724aedcf627' className='shopify-section shopify-section--bordered'>
            <div className='Section '>
                <div className='FeatureText FeatureText--withImage FeatureText--imageLeft'>
                    <div className='FeatureText__ImageWrapper'>
                        <div className='AspectRatio custom-feature'>
                            <img src="/images/feature.webp" alt="" className='Image--slideLeft lazyautosizes Image--lazyLoaded'
                                data-expand="-200"
                                data-sizes="auto"
                                sizes="592px"
                                data-widths="[400,600,700,800,900,1000,1200]"
                            />
                        </div>
                    </div>
                    <div className='FeatureText__ContentWrapper'>
                        <div className='FeatureText__Content'>
                            <header className='SectionHeader'>
                                <h3 className='SectionHeader__SubHeading Heading u-h6'>
                                    TABBY - BUY NOW PAY LATER
                                </h3>
                                <h2 className='SectionHeader__Heading Heading u-h1'>
                                    Shop online today and pay later with Tabby
                                </h2>
                                <div className='SectionHeader__Description Rte'>
                                    <p>
                                        <strong>
                                            Get 14 days to pay for the things you buy today or pay in monthly installments.
                                        </strong>
                                    </p>
                                    <p>
                                        We  partnered with Tabby to provide flexible payment conditions to all our customers.
                                    </p>
                                </div>
                                <Link to='/' className='Link Link--underline'>
                                    LEARN MORE
                                </Link>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
