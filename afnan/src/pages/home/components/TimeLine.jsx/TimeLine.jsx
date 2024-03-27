import React, { useState,useEffect } from 'react'

const TimeLine = () => {

    const [isSelected, setIsSelected] = useState('eveluation');

    const handleTimeLine = (timeline) => {
        setIsSelected(timeline);
    };

    // useEffect(() => {
    //     setIsSelected('eveluation');
    // }, [isSelected]);

    return (
        <div className='shopify-section shopify-section--bordered shopify-section--timeline'>
            <section id='section-timeline' className='Section Section--spacingNormal'>
                <div className='Container'>
                    <div className='Timeline'>
                        <div className='Timeline__ListItem'>
                            <div className={`Timeline__Item ${isSelected == 'today' ? 'is-selected' : ''}`}>
                                <div className='Timeline__ImageWrapper Image--contrast custom-Timeline__ImageWrapper'>
                                    <div className="Timeline__Image hide-no-js Image--lazyLoaded" style={{
                                        backgroundImage: `url("https://www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834")`
                                    }}>
                                        <picture style={{ display: 'none' }}>
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                                media="(max-width: 640px)"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                            />
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                            />
                                            <img alt="" className="Image--lazyLoaded" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="Timeline__Inner">
                                    <header className="Timeline__Header SectionHeader SectionHeader--center">
                                        <h3 className="SectionHeader__SubHeading Heading u-h6">BUILDING A TODAY</h3>
                                        <h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading">TAILORING THE TODAY</h2>
                                        <div className="SectionHeader__Description Rte">
                                            <p>
                                                AFNAN PERFUMES is building a ;a global desire for a Middle Eastern product in a international market continue crafting scenes that ;inspire consumers to unlimited experience through quality and experience.
                                            </p>
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className={`Timeline__Item ${isSelected == 'eveluation' ? 'is-selected' : ''}`}>
                                <div className='Timeline__ImageWrapper Image--contrast custom-Timeline__ImageWrapper'>
                                    <div className="Timeline__Image hide-no-js Image--lazyLoaded" style={{
                                        backgroundImage: `url("https://www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834")`
                                    }}>
                                        <picture style={{ display: 'none' }}>
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                                media="(max-width: 640px)"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                            />
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                            />
                                            <img alt="" className="Image--lazyLoaded" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="Timeline__Inner">
                                    <header className="Timeline__Header SectionHeader SectionHeader--center">
                                        <h3 className="SectionHeader__SubHeading Heading u-h6">Eveluation</h3>
                                        <h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading">TAILORING THE Eveluation</h2>
                                        <div className="SectionHeader__Description Rte">
                                            <p>
                                                AFNAN PERFUMES is building a ;a global desire for a Middle Eastern product in a international market continue crafting scenes that ;inspire consumers to unlimited experience through quality and experience.
                                            </p>
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className={`Timeline__Item ${isSelected == 'since' ? 'is-selected' : ''}`}>
                                {/* <div className={`Timeline__Item ${{ time } == 'since' ? ' is-selected' : ''}`}> */}
                                <div className='Timeline__ImageWrapper Image--contrast custom-Timeline__ImageWrapper'>
                                    <div className="Timeline__Image hide-no-js Image--lazyLoaded" style={{
                                        backgroundImage: `url("https://www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834")`
                                    }}>
                                        <picture style={{ display: 'none' }}>
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                                media="(max-width: 640px)"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_x650.jpg?v=1613776834"
                                            />
                                            <source
                                                data-srcset="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                                srcSet="//www.afnan.com/cdn/shop/files/0celeb-colognes-main-1509107745_1000x.jpg?v=1613776834"
                                            />
                                            <img alt="" className="Image--lazyLoaded" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="Timeline__Inner">
                                    <header className="Timeline__Header SectionHeader SectionHeader--center">
                                        <h3 className="SectionHeader__SubHeading Heading u-h6">BUILDING A Since</h3>
                                        <h2 className="SectionHeader__Heading Heading u-h1 custom-SectionHeader__Heading">TAILORING THE Since</h2>
                                        <div className="SectionHeader__Description Rte">
                                            <p>
                                                AFNAN PERFUMES is building a ;a global desire for a Middle Eastern product in a international market continue crafting scenes that ;inspire consumers to unlimited experience through quality and experience.
                                            </p>
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                        <div className="Timeline__Nav">
                            <div className="Timeline__NavWrapper Timeline__NavWrapper--center">
                                <button type="button" className={`Timeline__NavItem Link Link--primary ${isSelected == 'today' ? 'is-selected' : ''}`} onClick={() => handleTimeLine("today")}>
                                    <span className="Timeline__NavLabel">Today</span>
                                </button>
                                <button type="button" className={`Timeline__NavItem Link Link--primary ${isSelected == 'eveluation' ? 'is-selected' : ''}`} onClick={() => handleTimeLine("eveluation")}>
                                    <span className="Timeline__NavLabel">EVOLUTION</span>
                                </button>
                                <button type="button" className={`Timeline__NavItem Link Link--primary ${isSelected == 'since' ? 'is-selected' : ''}`} onClick={() => handleTimeLine("since")}>
                                    <span className="Timeline__NavLabel">Since 2007</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TimeLine
