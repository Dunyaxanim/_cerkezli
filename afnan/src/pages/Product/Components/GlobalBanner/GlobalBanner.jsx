import React from 'react'

const GlobalBanner = () => {
    return (
        <div className='shopify-section-collection-footer' id='shopify-section'>
            <div id='section-collection-footer'>
                <div className='FlexboxIeFix'>
                    <div className='ImageHero ImageHero--small Image--lazyLoaded'>
                        <div className='ImageHero__ImageWrapper Image--zoomOut Image--contrast Image--lazyLoaded custom-ImageHero__ImageWrapper'>
                            {/* <img className="lazyautosizes Image--lazyLoaded" src="/images/global-banner-2.webp" alt="" /> */}
                        </div>
                        <div className='ImageHero__ContentOverlay'>
                            <header className="SectionHeader"><h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading-global">HIGHNESS COLLECTION</h2><div className="SectionHeader__Description"><p className='custom-SectionHeader__Heading-global'><strong>Exclusivity crafted by Afnan Perfumes</strong></p></div></header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalBanner
