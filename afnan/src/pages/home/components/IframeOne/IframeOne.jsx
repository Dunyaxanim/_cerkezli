import React, { useState } from 'react';
import styled from '../IframeOne/IframeOne.module.css'
const IframeOne = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handlePlayButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div id='shopify-section-1638816553ded221ac' className='shopify-section'>
            <section className='Section' id='section-1638816553ded221ac'>
                <div className='FlexboxIeFix'>
                    <div className={`ImageHero ImageHero--large ${styled['bg-url-imageHero']}`} >
                        <div className='ImageHero__ImageWrapper'>
                            <div className={`ImageHero__Image Image--zoomOut Image--lazyLoaded`} data-optimumx="1.4" data-expand="-150">

                                <picture >
                                    <source
                                        data-srcset="./images/iframe_one_bg1.webp"
                                        sizes="1519px"
                                        srcSet="./images/iframe_one_bg1.webp"
                                    />
                                    <img
                                        alt=""
                                        className="lazyautosizes Image--lazyLoaded"
                                        data-sizes="auto"
                                        data-optimumx="1.4"
                                        data-parent-fit="cover"
                                        sizes="1519px"
                                        srcSet=""
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="ImageHero__ContentOverlay">
                            <header className="SectionHeader">
                                <h3 className="SectionHeader__SubHeading Heading u-h6">NEW</h3>
                                <h2 className="SectionHeader__Heading Heading u-h1">9pm 9am Femme</h2>
                                <div className="SectionHeader__IconHolder">
                                    <button type="button" className="Video__PlayButton" data-action="open-modal" aria-label="Play video" aria-controls="modal-1638816553ded221ac" onClick={handlePlayButtonClick}>
                                        <svg className="Icon Icon--play" role="presentation" viewBox="0 0 24 24">
                                            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-2 15.5V9l4.5 3.25L10 15.5z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div id='modal-1638816553ded221ac' className={` Modal--fullScreen Modal--videoContent none`}>
                <div className='Modal__Content'>
                    <div className='Container Container--narrow'>
                        <div className='VideoWrapper'>
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7tsNelFu3fQ?si=FgrixC5gRgiEYaRu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    </div>
                </div>
                <button className="Modal__Close Modal__Close--outside" data-animate-bottom="" data-action="close-modal"><svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                </svg></button>
            </div> */}

            <div id="modal-1638816553ded221ac" className={`Modal Modal--fullScreen Modal--videoContent ${modalOpen ? 'none' : ''}`} aria-hidden={modalOpen ? 'false' : 'true'} role="dialog" data-scrollable={modalOpen ? 'false' : 'true'} tabIndex={modalOpen ? '0' : '-1'}>
                <div className="Modal__Content">
                    <div className="Container Container--narrow">
                        <div className="VideoWrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7tsNelFu3fQ?si=FgrixC5gRgiEYaRu" title=" video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <button className="Modal__Close Modal__Close--outside" data-animate-bottom="" data-action="close-modal" onClick={handleCloseModal}>
                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default IframeOne
