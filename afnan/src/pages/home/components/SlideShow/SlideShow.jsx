import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storedLanguage } from '../../../../http/api';
import axios from 'axios';
import config from '../../../../config';

const SlideShow = () => {
    const [collections, setCollections] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0);
    const period = (collections.length - 1) * 10000;
    const [intervalId, setIntervalId] = useState(null);

    const clickSlider = (index) => {
        setCurrentSlide(index);
        clearInterval(intervalId);
    };

    useEffect(() => {
        const newIntervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % collections.length);
        }, 3000);

        setIntervalId(newIntervalId);

        const stopInterval = setTimeout(() => {
            clearInterval(newIntervalId);
        }, period);

        return () => {
            clearInterval(newIntervalId);
            clearTimeout(stopInterval);
        };
    }, [collections]);

    // get data

    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchcollections = await axios.get(`${config.development.api}/slideshows?lang=${await storedLanguage()}`);
                const fetchcollectionsData = fetchcollections.data;
                setCollections(fetchcollectionsData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])
    
    return (
        <div id="shopify-section-slideshow " className='shopify-section shopify-section--slideshow custom-shopify-section-slideshow'>
            <section id='section-slideshow' data-section-id="slideshow" data-section-type="slideshow">
                <div className='Slideshow Slideshow--fullscreen'>
                    <div className='Slideshow__Carousel Carousel Carousel--fadeIn Carousel--fixed Carousel--insideDots flickity-enabled is-draggable'>
                        <div className='flickity-viewport custom-flickity-viewport'>
                            <div className='flickity-slider custom-slickity-slider'>
                                {
                                    collections.map((item, index) => (
                                        <div key={index} className={`Slideshow__Slide Carousel__Cell ${currentSlide === index ? '' : 'hide-slide'}`}>
                                            <div className='Slideshow__ImageContainer Image--contrast hidden-tablet-and-up'>
                                                <img src={`${config.development.url}/${item.img}`} className={`Slideshow__Image Image--lazyLoad custom-slider-img ${currentSlide === index ? 'img-scale-small-custom' : 'img-scale-big-custom'}`} alt={item.name} />
                                            </div>
                                            <div className={`Slideshow__ImageContainer Image--contrast hidden-phone  ${currentSlide === index ? 'img-scale-small-custom' : 'img-scale-big-custom'}`} style={{ background: `url(${config.development.url}/${item.img})` }}>
                                                <img src={`${config.development.url}/${item.img}`} className='Slideshow__Image hide-no-js lazyautosizes Image--lazyLoaded' alt={item.name} />
                                            </div>
                                            <div className={`Slideshow__Content  Slideshow__Content--bottomLeft   ${currentSlide === index ? 'v-inherit' : 'v-hidden'}`}>
                                                <header className={`custom-SectionHeader-one SectionHeader ${currentSlide === index ? 'v-inherit' : 'v-hidden'}`}>
                                                    <h3 className='SectionHeader__SubHeading Heading u-h6'>CRAFTED BY AFNAN</h3>
                                                    <h2 className='SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1'>{item.name}</h2>
                                                    <div className={`SectionHeader__ButtonWrapper ${currentSlide === index ? 'v-inherit-button' : 'v-hidden-button'}`}>
                                                        <div className='ButtonGroup ButtonGroup--spacingSmall '>
                                                            <Link className="ButtonGroup__Item Button custom-hover-button">View Detail</Link>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                            <ol className="flickity-page-dots">
                                                {
                                                    collections.map((_, k) => (
                                                        <li key={k} className={`dot ${k === index ? 'is-selected' : ''}`} onClick={() => clickSlider(k)}></li>
                                                    ))
                                                }
                                            </ol>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <span id='section-slideshow-end' className="Anchor"></span>
            </section>
        </div>
    );
}

export default SlideShow;