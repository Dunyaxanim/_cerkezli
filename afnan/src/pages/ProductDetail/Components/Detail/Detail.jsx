import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import styled from '../Detail/Detail.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import config from '../../../../config';
import { storedLanguage } from '../../../../http/api';
import '../../detail.css'
const Detail = ({ id }) => {
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [total, setTotal] = useState(1);
    const [key, setKey] = useState(1);
    const [isPopup, setIsPopup] = useState(false);
    const [imgIndex, setImgIndex] = useState(1);
    const [isPlay, setIsPlay] = useState(false);
    const detailRef = useRef(null);
    const decrease = () => {
        total > 1 ? setTotal(prevTotal => prevTotal - 1) : prevTotal => prevTotal = 1;
    };

    const increase = () => {
        setTotal(prevTotal => prevTotal + 1);
    };

    const [isShareOpen, setIsShareOpen] = useState(false);
    const toggleShare = () => {
        setIsShareOpen(!isShareOpen);
    };

    const handleSelectedphoto = (key) => {
        setKey(key);
        const element = document.getElementById(`Media${key}`);
        const viewportHeight = window.innerHeight;
        const offsetTop = element.offsetTop - (0.01 * viewportHeight);
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    const handlePopup = (index) => {
        setIsPopup(prev => !prev)
        setImgIndex(index);
    }
    const handlePopupNext = (index) => {
        if (images[index]) {
            setImgIndex(index);
        } else {
            setIsPopup(false)
        }
    }
    const handlePopupPrev = (index) => {
        if (images[index]) {
            setImgIndex(index);
        } else {
            setIsPopup(false)
        }
    }

    // get data

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${config.development.api}/product/${id}?lang=${await storedLanguage()}`);
                const product = response.data;
                setProduct(product);
                setImages([...images, product.img, product.img_hover]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProduct();
    }, []);

    useEffect(() => {
        const productElement = document.querySelector('.shopify-section.shopify-section--bordered');
        if (productElement) {
            productElement.style.minHeight = `${detailRef.current.offsetHeight}px`;
        }

        const ChildElements = document.getElementsByClassName('Product__SlideshowNavImage-first');
        const ImgChildElements = document.getElementsByClassName('Image--fadeIn-custom');
        let first = 0;
        if (ChildElements[0] != undefined) {
            first = ChildElements[0].getBoundingClientRect().top;
        }
        const handleScroll = () => {
            const element = Array.from(ImgChildElements).find(element => {
                const offsetTop = element.getBoundingClientRect().top;
                if (offsetTop > first) {
                    return element;
                }
            });
            if (element != undefined) {
                setKey(element.id);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, [product]);

    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        const video = videoRef.current;
        setIsPlay(prev => !prev)
        if (video.paused) {
            video.play();

        } else {
            video.pause();
        }
    };


    return (
        <div id='shopify-section-product-template' className='shopify-section shopify-section--bordered'>
            <section className='Product Product--small'>
                <div className='Product__Wrapper'>
                    <div className="Product__Gallery Product__Gallery--stack Product__Gallery--withThumbnails">
                        <span id='ProductGallery' className='Anchor'></span>
                        <div className='Product__ActionList hidden-lap-and-up '>
                            <div className="Product__ActionItem hidden-lap-and-up">
                                <button
                                    className="RoundButton RoundButton--small RoundButton--flat" onClick={() => handlePopup(key)}
                                >
                                    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                        <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                            <path d="M8,1 L8,15"></path>
                                            <path d="M1,8 L15,8"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div className={`Product__ActionItem hidden-lap-and-up `}>
                                <button
                                    className={`RoundButton RoundButton--small RoundButton--flat ${isShareOpen ? 'is-active RoundButton--secondaryState' : ''}`}
                                    data-action="toggle-social-share"
                                    data-animate-bottom=""
                                    aria-expanded={!isShareOpen}
                                    onClick={toggleShare}
                                >
                                    {isShareOpen ? (
                                        <span className="RoundButton__SecondaryState">
                                            <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                                <path
                                                    d="M15 0L1 14m14 0L1 0"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    ) : (
                                        <span className="RoundButton__PrimaryState">
                                            <svg className="Icon Icon--share" role="presentation" viewBox="0 0 24 24">
                                                <g stroke="currentColor" fill="none" fillRule="evenodd" strokeWidth="1.5">
                                                    <path d="M8.6,10.2 L15.4,6.8"></path>
                                                    <path d="M8.6,13.7 L15.4,17.1"></path>
                                                    <circle strokeLinecap="square" cx="5" cy="12" r="4"></circle>
                                                    <circle strokeLinecap="square" cx="19" cy="5" r="4"></circle>
                                                    <circle strokeLinecap="square" cx="19" cy="19" r="4"></circle>
                                                </g>
                                            </svg>
                                        </span>
                                    )}
                                </button>
                                {isShareOpen && (
                                    <div className="Product__ShareList" aria-hidden={!isShareOpen}>
                                        <Link
                                            className={`Product__ShareItem  ${isShareOpen ? 'custom-delay' : ''}`}
                                            to="/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                            </svg>
                                            Facebook
                                        </Link>
                                        <Link
                                            className="Product__ShareItem"
                                            to="/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                            </svg>
                                            Facebook 2
                                        </Link>
                                        <Link
                                            className="Product__ShareItem"
                                            to="/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                            </svg>
                                            Facebook 3
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Product__SlideshowNav Product__SlideshowNav--thumbnails custom-Product__SlideshowNav-top">
                            <div className="Product__SlideshowNavScroller Product__SlideshowNavScroller-height">
                                {

                                    images.map((img, index) => (
                                        <Link key={index} className={`Product__SlideshowNavImage AspectRatio ${(key == index) ? 'is-selected' : ''}`} style={{ '--aspect-ratio': '1.0' }} onClick={() => handleSelectedphoto(index)}>
                                            {/* {img.type === 'video' ? (
                                                <>
                                                    <img src={img.thumbnail} alt="EDICT OUDDICTION OIL" />
                                                    <span className="Product__SlideshowNavBadge">
                                                        <svg className="Icon Icon--media-video-badge" role="presentation" viewBox="0 0 26 26" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 25h24V1H1v24z" fill="#ffffff"></path>
                                                            <path d="M.5 25v.5h25V.5H.5V25z" fill="none" stroke="#1c1b1b" strokeOpacity=".15"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.718 6.72a1 1 0 00-1.518.855v10.736a1 1 0 001.562.827l8.35-5.677a1 1 0 00-.044-1.682l-8.35-5.06z" fill="#1c1b1b" fillOpacity=".6"></path>
                                                        </svg>
                                                    </span>
                                                </>
                                            ) : ( */}
                                            <img src={`${config.development.url}/${img}`} className='Product__SlideshowNavImage-first' alt={product.name} />
                                            {/* )} */}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="Product__SlideshowNav Product__SlideshowNav--dots">

                            <div className="Product__SlideshowNavScroller custom-Product__SlideshowNavScroller" >
                                {
                                    images.map((img, index) => (
                                        <Link key={index} className={`Product__SlideshowNavDot Product__SlideshowNavImage-first ${(key == index) ? 'is-selected' : ''}`} onClick={() => handleSelectedphoto(index)}></Link>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='Product__Slideshow Product__Slideshow--zoomable Carousel'>
                            {/* {
                                images.map((img, index) => (
                                    <div id={`Media${index}`} key={index} tabIndex="0" className={`Product__SlideItem Product__SlideItem--image Carousel__Cell ${(key == index) ? 'is-selected' : ''}`}>
                                        <div className="AspectRatio AspectRatio--withFallback" style={{ paddingBottom: '100.0%', '--aspect-ratio': '1.0' }}>
                                            <img src={`${config.development.url}/${img}`} id={index} className="Image--fadeIn lazyautosizes Image--lazyLoaded Image--fadeIn-custom"
                                                alt="EDICT OUDDICTION OIL" onClick={() => handlePopup(index)}
                                            />
                                        </div>
                                    </div>
                                ))
                            } */}
                            {
                                <>
                                    {
                                        images.map((img, index) => (
                                            <React.Fragment key={index}>
                                                {/* {img.type === 'video' ? (
                                                    <div id={`Media${img.id}`} key={`${img['id']}`} className={`Product__SlideItem Product__SlideItem--video Carousel__Cell ${(key == img['id']) ? 'is-selected' : ''}`} data-media-type="video" data-media-id="21071232499874" data-media-position="4">
                                                        <div className="Image--fadeIn Image--lazyLoaded" data-expand="-100">
                                                            <div className="VideoWrapper VideoWrapper--native" style={{ paddingBottom: '177.61989342806393%' }}>
                                                                <div tabIndex="0" className={`${isPlay ? 'plyr plyr--full-ui plyr--video plyr--html5 plyr--hide-controls plyr--pip-supported plyr--is-android plyr--is-touch plyr--fullscreen-enabled plyr__poster-enabled plyr--playing plyr__tab-focus' : 'plyr plyr--full-ui plyr--video plyr--html5 plyr--paused plyr--stopped plyr--hide-controls plyr--pip-supported plyr--is-android plyr--is-touch plyr--fullscreen-enabled plyr__poster-enabled'}`}>
                                                                    <video onClick={handlePlayVideo} ref={videoRef} controls={isPlay ? true : false}>
                                                                        <source src={img.img} type="video/mp4" />
                                                                        <img src={img.img} alt="Video Thumbnail" />
                                                                    </video>
                                                                    <div className="plyr__captions"></div>
                                                                    <button className={`plyr__control plyr__control--overlaid ${isPlay ? 'd-none' : ''}`} type="button" aria-label={isPlay ? 'Play' : 'Pause'} >
                                                                        <span className="Product__SlideshowNavBadge custom-Product__SlideshowNavBadge">
                                                                            <svg className="Icon Icon--media-video-badge" role="presentation" viewBox="0 0 26 26" fill="none" >
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M1 25h24V1H1v24z" fill="#ffffff"></path>
                                                                                <path d="M.5 25v.5h25V.5H.5V25z" fill="none" stroke="#1c1b1b" strokeOpacity=".15"></path>
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.718 6.72a1 1 0 00-1.518.855v10.736a1 1 0 001.562.827l8.35-5.677a1 1 0 00-.044-1.682l-8.35-5.06z" fill="#1c1b1b" fillOpacity=".6"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : ( */}
                                                <div id={`Media${index}`} tabIndex="0" className={`Product__SlideItem Product__SlideItem--image Carousel__Cell ${(key == index) ? 'is-selected' : ''}`}>
                                                    <div className="AspectRatio AspectRatio--withFallback" style={{ paddingBottom: '100.0%', '--aspect-ratio': '1.0' }}>
                                                        <img src={`${config.development.url}/${img}`} id={index} className="Image--fadeIn lazyautosizes Image--lazyLoaded Image--fadeIn-custom"
                                                            alt="EDICT OUDDICTION OIL" onClick={() => handlePopup(index)}
                                                        />
                                                    </div>
                                                </div>
                                                {/* )} */}
                                            </React.Fragment>
                                        ))
                                    }
                                </>
                            }
                        </div>
                        <div className="Product__SlideshowMobileNav hidden-desk">

                            <div className="flickity-page-dots custom-flickity-page-dots">
                                {
                                    images.map((img, index) => (
                                        <button key={index} type="button" className={`dot custom-dot-style ${key == index ? 'is-selected' : ''}`} data-index="0" onClick={() => handleSelectedphoto(index)}></button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='Product__InfoWrapper'>
                        <div className={`Product__Info ${styled['custom-Product__Info']}`}>
                            <div ref={detailRef} className='Container'>
                                <div className='ProductMeta'>
                                    <h2 className='ProductMeta__Vendor Heading u-h6'>AFNAN PERFUMES</h2>
                                    <h1 className='ProductMeta__Title Heading u-h2'>{product.name}</h1>
                                    <p className='ProductMeta__Sku Heading Text--subdued u-h6'>SKU:
                                        <span className='ProductMeta__SkuNumber'>{product.stock_code}</span>
                                    </p>
                                    <div className='ProductMeta__PriceList Heading'>
                                        <span className='ProductMeta__Price Price Text--subdued u-h4'>
                                            <span className='money'>Dhs. {product.price}</span>
                                        </span>
                                    </div>
                                    <div className='tabbyPromo'>
                                        <div className='styles__tabby-snippet--750cf'>
                                            <span>
                                                <div className='styles__tabby-promo-snippet--2ddd6 styles__tabby-promo-snippet_font_inherit--345bc styles__snippetWrapper--b97bf'>
                                                    <div className={`${styled['styles__tabby-promo-snippet__content--51d69']}`}>
                                                        <span className={`${styled['styles__tabby-promo-snippet__text--93920']}`}>
                                                            <span>
                                                                {product.payment_options}
                                                            </span>

                                                            {/* <span className={`styles__snippetLink--e917e ${styled['styles__tabby-promo-snippet__link--60af3']}`}>
                                                                <span className='widget-learn-more'>
                                                                    Learn more
                                                                </span>
                                                            </span> */}
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ProductMeta__UnitPriceMeasurement" style={{ display: 'none' }}>
                                        <div className="UnitPriceMeasurement Heading u-h6 Text--subdued">
                                            <span className="UnitPriceMeasurement__Price"></span>
                                            <span className="UnitPriceMeasurement__Separator">/ </span>
                                            <span className="UnitPriceMeasurement__ReferenceValue"></span>
                                            <span className="UnitPriceMeasurement__ReferenceUnit"></span>
                                        </div>
                                    </div>
                                    {/* <p className='ProductMeta__TaxNotice Rte'>
                                        <Link className='link link--accented'>
                                            Shipping calculated
                                        </Link> at checkout.
                                    </p> */}
                                </div>
                                <form method="post" action="/cart/add" id="product_form_6663061635234" acceptCharset="UTF-8" className="ProductForm" encType="multipart/form-data">

                                    <div className="ProductForm__Variants">
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Type:</span>
                                            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                                <li className="HorizontalList__Item">
                                                    <input id="option-product-template-0-0" className="SizeSwatch__Radio" type="radio" name="option-0" defaultValue="EXTRAIT DE PARFUM" defaultChecked />
                                                    <label htmlFor="option-product-template-0-0" className="SizeSwatch">EXTRAIT DE PARFUM</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Volume:</span>
                                            <ul>
                                                <li className="HorizontalList__Item">
                                                    <input id="option-product-template-1-0" className="SizeSwatch__Radio" type="radio" name="option-1" defaultValue="100 ML" defaultChecked data-option-position="2" />
                                                    <label htmlFor="option-product-template-1-0" className="SizeSwatch">100 ML</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Orientation:</span>
                                            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                                <li className="HorizontalList__Item">
                                                    <input id="option-product-template-2-0" className="SizeSwatch__Radio" type="radio" name="option-2" defaultValue="Pour Homme" defaultChecked data-option-position="3" />
                                                    <label htmlFor="option-product-template-2-0" className="SizeSwatch">Pour Homme</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="no-js ProductForm__Option">
                                            <div className="Select Select--primary">
                                                <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                                    <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeLinecap="square"></polyline>
                                                </svg>
                                                <select id="product-select-6663061635234" name="id" title="Variant">
                                                    <option data-sku="SUPONLYIN001">EXTRAIT DE PARFUM / 100 ML / Pour Homme - Dhs. 180</option>
                                                </select>
                                            </div>
                                        </div>
                                        <span className="ProductForm__Label">Quantity:</span>
                                        <div className="ProductForm__QuantitySelector">
                                            <div className="QuantitySelector QuantitySelector--large">
                                                <span className="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity" onClick={decrease}>
                                                    <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                        <path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                                    </svg>
                                                </span>
                                                <input type="text" className="QuantitySelector__CurrentQuantity" pattern="[0-9]*" name="quantity" defaultValue={total} />
                                                <span className="QuantitySelector__Button Link Link--secondary" data-action="increase-quantity" onClick={increase}>
                                                    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                        <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                            <path d="M8,1 L8,15"></path>
                                                            <path d="M1,8 L15,8"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="ProductForm__AddToCart Button Button--secondary Button--full" data-action="add-to-cart">
                                        <span>Add to cart</span>
                                    </button>
                                    <div data-shopify="payment-button" className="shopify-payment-button">
                                        <div className="wallet-button-fade-in">
                                            <button type="button" className="shopify-payment-button__button shopify-payment-button__button--unbranded custom-shopify-payment-button__button">Buy it now</button>
                                        </div>
                                    </div>
                                    <input type="hidden" name="product-id" defaultValue="6663061635234" />
                                    <input type="hidden" name="section-id" defaultValue="product-template" />
                                    <div className="swym-button-bar swym-wishlist-button-bar swym-inject">
                                        <div className="swym-btn-container swym-inject" data-position="default">
                                            <button className="swym-button swym-add-to-wishlist swym-inject swym-has-fave-count swym-btnlink swym-heart Button swym-loaded custom-swym-loaded" onClick={(event) => event.preventDefault()} aria-label="Add to Wishlist">
                                                <span className="swym-wishlist-cta">Add to Wishlist</span>
                                            </button>
                                            <span className="swym-fave-count" data-count="141">(141)</span>
                                        </div>
                                    </div>
                                </form>
                                <div className="ProductMeta__Description">
                                    <div className="Rte">
                                        <p><span>Homme EDP 100 ML</span></p>
                                        <p><span>Escape to another world with our most loved and dangerously addictive scent of all times! #CraftedbyAfnan</span></p>
                                        <p><span>NEW LUXURY COLLECTION</span></p>
                                        <p><strong>PERFUME NOTES</strong><br /></p>
                                        <p>
                                            <span><strong>Top Notes:</strong> Bergamot, Apple and Black Currant</span><br />
                                            <span><strong>Middle Notes:</strong> Lavender, Patchouli and Oak Moss</span><br />
                                            <span><strong>Base Notes:</strong> Saffron, Musk and Ambergris</span><br />
                                        </p>
                                    </div>
                                    <div className="ProductMeta__ShareButtons hidden-pocket">
                                        <span className="ProductMeta__ShareTitle Heading Text--subdued u-h7">Share</span>
                                        <div className="ProductMeta__ShareList Text--subdued">
                                            <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Facebook">
                                                <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                                </svg>
                                            </Link>
                                            <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Twitter">
                                                <svg className="Icon Icon--twitter" role="presentation" viewBox="0 0 32 26">
                                                </svg>
                                            </Link>
                                            <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Pinterest">
                                                <svg className="Icon Icon--pinterest" role="presentation" viewBox="0 0 32 32">
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Product__Aside'></div>
                </div>
            </section>
            <div className={`pswp ${isPopup ? 'pswp--open pswp--animate_opacity pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in pswp--has_mouse custom-popup-container' : ''}`} aria-hidden={!isPopup} role={isPopup ? 'dialog' : ''}>
                <div className={`pswp__bg ${isPopup ? 'custom-pswp__bg' : ''}`}></div>
                <div className='pswp__scroll-wrap'>
                    <div className="pswp__container">
                        <div className="pswp__item">
                            <div className={`pswp__zoom-wrap ${isPopup ? 'custom-pswp__zoom-wrap' : ''}`}>
                                {
                                    // images[imgIndex]['type'] != 'video' ? (
                                    <>
                                        <img className="pswp__img" src={`${config.development.url}/${images[imgIndex]}`} />
                                    </>
                                    // ) : (
                                    //     <>
                                    //         <video onClick={handlePlayVideo} muted ref={videoRef} controls={isPlay ? true : false} controlsList="nodownload">
                                    //             <source src={images[imgIndex]['img']} type="video/mp4" />
                                    //             <img src={images[imgIndex]['img']} alt="Video Thumbnail" />
                                    //         </video>
                                    //         <div className="plyr__captions"></div>
                                    //         <button className={`plyr__control plyr__control--overlaid ${isPlay ? 'd-none' : ''}`} type="button" aria-label={isPlay ? 'Play' : 'Pause'} >
                                    //             <span className="Product__SlideshowNavBadge custom-Product__SlideshowNavBadge">
                                    //                 <svg className="Icon Icon--media-video-badge" role="presentation" viewBox="0 0 26 26" fill="none" >
                                    //                     <path fillRule="evenodd" clipRule="evenodd" d="M1 25h24V1H1v24z" fill="#ffffff"></path>
                                    //                     <path d="M.5 25v.5h25V.5H.5V25z" fill="none" stroke="#1c1b1b" strokeOpacity=".15"></path>
                                    //                     <path fillRule="evenodd" clipRule="evenodd" d="M9.718 6.72a1 1 0 00-1.518.855v10.736a1 1 0 001.562.827l8.35-5.677a1 1 0 00-.044-1.682l-8.35-5.06z" fill="#1c1b1b" fillOpacity=".6"></path>
                                    //                 </svg>
                                    //             </span>
                                    //         </button>
                                    //     </>
                                    // )
                                }

                            </div>
                        </div>
                        <div className="pswp__item" style={{ display: 'block', transform: 'translate3d(1342px, 0px, 0px)' }}>
                            <div className="pswp__zoom-wrap">
                                <img className="pswp__img" src={`${config.development.url}/${images[imgIndex]}`} />
                            </div>
                        </div>
                    </div>
                    <div className={`pswp__ui ${isPopup ? '' : 'pswp__ui--hidden'}`}>
                        <button className={`pswp__button pswp__button--prev RoundButton ${images[imgIndex - 1] ? '' : 'button-none'}`} data-animate-left="" title="Previous (left arrow)"
                            onClick={() => (handlePopupPrev(imgIndex - 1))}><svg className="Icon Icon--arrow-left" role="presentation" viewBox="0 0 11 21">
                                <polyline fill="none" stroke="currentColor" points="10.5 0.5 0.5 10.5 10.5 20.5" strokeWidth="1.25"></polyline>
                            </svg>
                        </button>
                        <button className="pswp__button pswp__button--close RoundButton RoundButton--large" data-animate-bottom="" title="Close (Esc)" onClick={() => handlePopup(imgIndex)}>
                            <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14" >
                                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <button className={`pswp__button pswp__button--next RoundButton ${images[imgIndex + 1] ? '' : 'button-none'}`} title="Next (right arrow)"
                            onClick={() => (handlePopupNext(imgIndex + 1))}>
                            <svg className="Icon Icon--arrow-right" role="presentation" viewBox="0 0 11 21">
                                <polyline fill="none" stroke="currentColor" points="0.5 0.5 10.5 10.5 0.5 20.5" strokeWidth="1.25">
                                </polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
