import styled from '../ShopSlider/ShopSlider.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import productSliderData from "../../../../slider";
import multiproductSliderData from "../../../../multiproductSliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { storedLanguage } from '../../../../http/api';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import config from '../../../../config';

const ShopSlider = () => {
    const [customActiveIndex, setcustomActiveIndex] = useState();
    const [isLoad, setisLoad] = useState(false);
    const [productId, setproductId] = useState();
    const [productSlug, setproductSlug] = useState();
    const [pItemIndex, setpItemIndex] = useState([]);
    const [showDetail, setshowDetail] = useState([]);
    const handleDotClick = (id, pItemIndex, slug) => {
        setcustomActiveIndex(id);
        setproductId(id)
        setproductSlug(slug)
        setpItemIndex(pItemIndex)
    };
    const [isdetailOpen, setİsdetailOpen] = useState(false);

    const handledetailfunc = () => {
        setİsdetailOpen(prev => !prev)
    }
    // get data
    const [sliderMain, setSliderMain] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchSliderMain = await axios.get(`${config.development.api}/looks?lang=${await storedLanguage()}`);
                const fetchSliderMainData = fetchSliderMain.data;
                setSliderMain(fetchSliderMainData)
                setisLoad(true)

            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])

    const productDataElements = document.querySelectorAll('.getProductData');

    productDataElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            const firstChildElement = this.nextElementSibling.firstElementChild;
            const id = firstChildElement.getAttribute('data-id');
            const slug = firstChildElement.getAttribute('data-slug');
            if (productId && productSlug) {
                window.location.href = `/detail/${productSlug}/${productId}`;
            } else if (id && slug) {
                window.location.href = `/detail/${slug}/${id}`;
            }
        });
    });
    const [activeIndex, setActiveIndex] = useState(0);

    const [filteredDetail, setFilteredDetail] = useState([]);
    const [showDetailData, setShowDetailData] = useState([]);

    useEffect(() => {
        if (isLoad && productId !== undefined) {
            const filterDetail = () => {
                const filteredDetails = sliderMain[activeIndex].detail.map(detail => (
                    detail.products.find(product => product.id === productId)
                )).filter(Boolean);
                return filteredDetails;
            };
            const details = filterDetail();
            setShowDetailData(details[0]);
        } else if (isLoad) {
            const filteredDetail = sliderMain[activeIndex].detail[0].products[0]
            setShowDetailData(filteredDetail);
        }
    }, [isLoad, productId, activeIndex, sliderMain]);
    return (
        <div id="shopify-section-shop-the-look" className='shopify-section shopify-section--bordered'>
            <section className='Section Section--spacingNormal' id='section-1617560160c00f5988' data-section-id="shop-the-look" data-section-type="shop-the-look">
                <header className='SectionHeader SectionHeader--center'>
                    <div className='Container'>
                        <h3 className='SectionHeader__SubHeading Heading u-h6'>Shop</h3>
                        <h2 className='SectionHeader__Heading Heading u-h1'>Our looks</h2>
                    </div>
                </header>
                <div className='ShopTheLook Carousel flickity-enabled is-draggable'>
                    <div className='flickity-viewport test' data-slide-index="0">
                        <div className='flickity-slider custom-flickity-slider'>
                            <div className='ShopTheLook__Item Carousel__Cell is-selected custom-ShopTheLook__Item ' id="block-1597264358962" data-slide-index="0">
                                <Swiper
                                    slidesPerView={1}
                                    centeredSlides={false}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                    breakpoints={{
                                        900: {
                                            slidesPerView: 1
                                        }
                                    }}
                                    onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
                                >
                                    {
                                        sliderMain.map((pItem) => (
                                            <SwiperSlide key={pItem.id}>
                                                <div className='Carousel__Cell custom-p'>
                                                    <div className='ShopTheLook__Inner'>
                                                        <div className={`ShopTheLook__ImageWrapper ${styled['custom-bg-url']}`}>
                                                            <div className={`AspectRatio AspectRatio--withFallback  ${styled['custom-shop-slider-w']}`} >
                                                                <img srcSet={`${config.development.url}/${pItem.img}`} className={`ShopTheLook__Image Image--fadeIn lazyautosizes Image--lazyLoaded`} alt="" data-widths="[200,400,600,700,800,1000]" data-sizes="auto" sizes="440px" />
                                                            </div>
                                                            {(pItem.detail.map((detail, pindex) => (
                                                                detail.products.map((product) => (
                                                                    <span
                                                                        key={product.id}
                                                                        className={`ShopTheLook__Dot ShopTheLook__Dot--light ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'is-active' : (pindex === 0 && pindex == pItemIndex) ? 'is-active' : ''}`}
                                                                        style={{ left: `${detail.x}%`, top: `${detail.y}%` }}
                                                                        onClick={() => handleDotClick(product.id, pindex, product.slug)}
                                                                    />
                                                                ))
                                                            )))}
                                                        </div>
                                                        <div className='ShopTheLook__ProductList Carousel Carousel--fadeIn hidden-pocket flickity-enabled '>
                                                            {pItem.detail.map((detail, pindex) => (
                                                                detail.products.map((product, p1) => (
                                                                    <div key={p1} className={`slide   ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'active' : (pindex === 0 && pindex == pItemIndex) ? 'active' : ''}`}>
                                                                        <div className={`flickity-viewport  ${styled['custom-flickity-viewport-h']}`} >
                                                                            <div className={`flickity-slider ${styled['custom-flickity-slider']}`}>
                                                                                <div className='ShopTheLook__ProductItem ShopTheLook__ProductItem--withHiddenInfo Carousel__Cell is-selected'>
                                                                                    <div className='ProductItem '>
                                                                                        <Link className='ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage'>
                                                                                            <div className={`AspectRatio AspectRatio--square ${styled['custom-AspectRatio-style']}`}>
                                                                                                <img src={`${config.development.url}/${product.img_hover}`} className='ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded'
                                                                                                    data-widths="[200,300,400,600,800,900,1000]"
                                                                                                    data-sizes="auto"
                                                                                                    alt={product.name}
                                                                                                />
                                                                                                <img src={`${config.development.url}/${product.img}`} className='ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded' data-widths="[200,400,600,700,800,900,1000]" data-sizes="auto" alt="RARE TIFFANY" data-media-id="10812749873314" sizes="250px" />
                                                                                            </div>
                                                                                        </Link>
                                                                                        <div className="ProductItem__Info ProductItem__Info--center">
                                                                                            <h2 className="ProductItem__Title Heading">
                                                                                                <a href="/products/apr2020-1">{product.name}</a>
                                                                                            </h2>
                                                                                            <div className="ProductItem__PriceList  Heading">
                                                                                                <span className="ProductItem__Price Price Text--subdued">
                                                                                                    <span className="money"> DSH.
                                                                                                        {
                                                                                                            product.sizes.map((size, index) => {

                                                                                                                if ((index === 0 || index === 1 || index === 2 || index === 3) && size.price != null) {
                                                                                                                    return size.price;
                                                                                                                }
                                                                                                                return null;
                                                                                                            }).find(price => price !== null)
                                                                                                        }
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            ))}

                                                            <Link className='ShopTheLook__ViewButton Button Button--primary Button--full getProductData'>View this product</Link>
                                                            <div className='custom-dots'>
                                                                {
                                                                    pItem.detail.map((d, pindex) => (
                                                                        d.products.map((product) => (
                                                                            <span key={product.id} data-slug={product.slug} data-id={product.id}
                                                                                className={`custom-dot  ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'active' : (pindex === 0 && pindex == pItemIndex) ? 'active' : ''}`}

                                                                                onClick={() => handleDotClick(product.id, pindex, product.slug)}
                                                                            />
                                                                        ))
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className={`Popover Popover--secondary hidden-lap-and-up custom-trasnform-detail ${isdetailOpen ? 'custom-visible' : ''}`}>
                        <header className='Popover__Header'>
                            <div className='Popover__Close Icon-Wrapper--clickable'>
                                <button onClick={handledetailfunc} className="Popover__Close Icon-Wrapper--clickable" data-action="close-popover">
                                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                                <h4 className='Popover__Title Heading u-h4'>Shop the look</h4>
                            </div>
                        </header>
                        <div className="Popover__Content">
                            <div className="ShopTheLook__ProductList Carousel flickity-enabled is-draggable"
                                data-flickity-config='{
                                    "prevNextButtons": false,
                                    "pageDots": false,
                                    "draggable": true,
                                    "wrapAround": true
                                }'
                                data-look-index="0"
                                tabIndex="0"
                            >
                                <div className="flickity-viewport" style={{ height: "283.6px", touchAction: "pan-y" }}>
                                    <div className="flickity-slider" style={{ left: "0px", transform: "translateX(0%)" }}>


                                        <div className="ShopTheLook__ProductItem ShopTheLook__ProductItem--withHiddenInfo Carousel__Cell" style={{ position: "absolute", left: "0%" }}>
                                            <div className="ProductItem">
                                                <div className="ProductItem__Wrapper">
                                                    <Link to={`/detail/${showDetailData.slug}/${showDetailData.id}`} className="ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage">
                                                        <div className="AspectRatio AspectRatio--square" style={{ maxWidth: "1080px", "--aspect-ratio": "1.0" }}>
                                                            <img
                                                                className="ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded"
                                                                data-widths="[200,300,400,600,800,900,1000]"
                                                                data-sizes="auto"
                                                                alt={showDetailData.name}
                                                                data-media-id="10812750069922"
                                                                data-srcset=""
                                                                sizes="150px"
                                                            />
                                                            <img
                                                                className="ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded"
                                                                data-widths="[200,400,600,700,800,900,1000]"
                                                                data-sizes="auto"
                                                                alt={showDetailData.name}
                                                                data-media-id="30015114870946"
                                                                sizes="150px"
                                                                srcSet={`${config.development.url}/${showDetailData.img}`}
                                                            />
                                                            <span className="Image__Loader"></span>

                                                        </div>
                                                    </Link>
                                                    <div className="ProductItem__Info ProductItem__Info--center">
                                                        <h2 className="ProductItem__Title Heading">
                                                            <Link to={`/detail/${showDetailData.slug}/${showDetailData.id}`} >{showDetailData.name}</Link>
                                                        </h2>
                                                        <div className="ProductItem__PriceList  Heading">
                                                            <span className="ProductItem__Price Price Text--subdued">
                                                                <span className="money">Dhs.
                                                                    {showDetailData.sizes && showDetailData.sizes.length > 0 && showDetailData.sizes[0].price !== null ? <span>{showDetailData.sizes[0].price}</span> : null}
                                                                </span>
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ShopTheLook__DiscoverButtonWrapper hidden-lap-and-up'>
                        <Link className='ShopTheLook__ViewButton Button Button--primary' aria-haspopup="true"
                            aria-expanded="false" aria-controls="block-1597264358962-popover" onClick={handledetailfunc}>
                            View products
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ShopSlider
