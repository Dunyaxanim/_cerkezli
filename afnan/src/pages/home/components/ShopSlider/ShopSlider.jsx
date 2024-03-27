import styled from '../ShopSlider/ShopSlider.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
    const [productIds, setproductIds] = useState([]);
    const [pItemIndex, setpItemIndex] = useState([]);
    const handleDotClick = (id, pItemIndex) => {
        setcustomActiveIndex(id);
        setpItemIndex(pItemIndex)
    };
    const [detail, setdetail] = useState(false);

    const detailfunc = () => {
        setdetail(prev => !prev)
    }
    // get data
    let ilkProductId = null;
    const [sliderMain, setSliderMain] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchSliderMain = await axios.get(`${config.development.api}/looks?lang=${await storedLanguage()}`);
                const fetchSliderMainData = fetchSliderMain.data;
                setSliderMain(fetchSliderMainData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])

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
                                >
                                    {
                                        sliderMain.map((pItem) => (
                                            <SwiperSlide key={pItem.id}>
                                                <div className='Carousel__Cell custom-p'>
                                                    <div className='ShopTheLook__Inner'>
                                                        <div className={`ShopTheLook__ImageWrapper ${styled['custom-bg-url']}`}>
                                                            <div className={`AspectRatio AspectRatio--withFallback  ${styled['custom-shop-slider-w']}`} >
                                                                <img src={`${config.development.url}/${pItem.img}`} className={`ShopTheLook__Image Image--fadeIn lazyautosizes Image--lazyLoaded`} alt="" data-widths="[200,400,600,700,800,1000]" data-sizes="auto" sizes="440px" />
                                                            </div>
                                                            {(pItem.detail.map((detail, pindex) => (
                                                                detail.products.map((product) => (
                                                                    <span
                                                                        key={product.id}
                                                                        className={`ShopTheLook__Dot ShopTheLook__Dot--light ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'is-active' : (pindex === 0) ? 'is-active' : ''}`}

                                                                        style={{ left: `${detail.x}%`, top: `${detail.y}%` }}
                                                                        onClick={() => handleDotClick(product.id, pindex)}
                                                                    />
                                                                ))
                                                            )))}
                                                        </div>
                                                        <div className='ShopTheLook__ProductList Carousel Carousel--fadeIn hidden-pocket flickity-enabled '>
                                                            {pItem.detail.map((detail, pindex) => (
                                                                detail.products.map((product, p1) => (
                                                                    <div key={p1} className={`slide  ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'active' : (pindex === 0) ? 'active' : ''}`}>
                                                                        <div className={`flickity-viewport  ${styled['custom-flickity-viewport-h']}`} >
                                                                            <div className={`flickity-slider ${styled['custom-flickity-slider']}`}>
                                                                                <div className='ShopTheLook__ProductItem ShopTheLook__ProductItem--withHiddenInfo Carousel__Cell is-selected'>
                                                                                    <div className='ProductItem '>
                                                                                        <Link className='ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage'>
                                                                                            <div className={`AspectRatio AspectRatio--square ${styled['custom-AspectRatio-style']}`}>
                                                                                                <img src={`${config.development.url}/${product.img_hover}`} className='ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded'
                                                                                                    data-widths="[200,300,400,600,800,900,1000]"
                                                                                                    data-sizes="auto"
                                                                                                    alt="RARE TIFFANY"
                                                                                                />
                                                                                                <img src={`${config.development.url}/${product.img}`} className='ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded' data-widths="[200,400,600,700,800,900,1000]" data-sizes="auto" alt="RARE TIFFANY" data-media-id="10812749873314" sizes="250px" />
                                                                                            </div>
                                                                                        </Link>
                                                                                        <div className="ProductItem__Info ProductItem__Info--center">
                                                                                            <h2 className="ProductItem__Title Heading">
                                                                                                <a href="/products/apr2020-1">RARE CARBON</a>
                                                                                            </h2>
                                                                                            <div className="ProductItem__PriceList  Heading">
                                                                                                <span className="ProductItem__Price Price Text--subdued">
                                                                                                    <span className="money">{product.price} </span>
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
                                                            <Link className='ShopTheLook__ViewButton Button Button--primary Button--full'>View this product</Link>
                                                            <div className='custom-dots'>
                                                                {
                                                                    pItem.detail.map((d, pindex) => (
                                                                        d.products.map((product) => (
                                                                            <span
                                                                                key={product.id}
                                                                                // className={`custom-dot ${(customActiveIndex === product.id) && (pItem.id == pItemId) ? 'active' : ''}`}
                                                                                className={`custom-dot ${(customActiveIndex === product.id) && (pindex == pItemIndex) ? 'active' : (pindex === 0) ? 'active' : ''}`}

                                                                                onClick={() => handleDotClick(product.id, pindex)}
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
                    <div className={`Popover Popover--secondary hidden-lap-and-up custom-trasnform-detail ${detail ? 'custom-visible' : ''}`}>
                        <header className='Popover__Header'>
                            <div className='Popover__Close Icon-Wrapper--clickable'>
                                <button className="Popover__Close Icon-Wrapper--clickable" data-action="close-popover">
                                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                                <h4 className='Popover__Title Heading u-h4'>Shop the look</h4>
                            </div>
                        </header>
                        <div className='Popover__Content custom-Popover__Content'>
                            <div className='ShopTheLook__ProductList Carousel flickity-enabled is-draggable custom-ShopTheLook__ProductList'>
                                <div className='flickity-viewport custom-flickity-viewport-two'>
                                    <div className='flickity-slider custom-flickity-slider-two'>
                                        <div className='ShopTheLook__ProductItem ShopTheLook__ProductItem--withHiddenInfo Carousel__Cell'>
                                            <div className='ProductItem '>
                                                <div className='ProductItem__Wrapper'>
                                                    {/* <Link className='ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage'>
                                                        <div className='AspectRatio AspectRatio--square cosztumize-class'>
                                                            <img src="/images/rare-2.avif" alt="" className='ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded' />
                                                            <span className='Image__Loader'></span>
                                                        </div>
                                                    </Link> */}
                                                    <div className='ProductItem__Info ProductItem__Info--center'>
                                                        <h2 className='ProductItem__Title Heading'>
                                                            <Link className=''>RARE TIFFANY</Link>
                                                        </h2>
                                                        <div className='ProductItem__PriceList  Heading'>
                                                            <span className='ProductItem__Price Price Text--subdued'>Dhs. 120</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='ShopTheLook__ProductItem ShopTheLook__ProductItem--withHiddenInfo Carousel__Cell'>
                                            <div className='ProductItem '>
                                                <div className='ProductItem__Wrapper custom-ProductItem__Wrapper'>
                                                    <Link className='ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage'>
                                                        <div className='AspectRatio AspectRatio--square custom-AspectRatio--square costumize-slider-product'>
                                                            <img src="/images/rare-2.avif" className='ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded' alt="" />
                                                            <img src="/images/rare-2.avif" className='ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded costumize-img' alt="" />
                                                            <span className='Image__Loader'></span>
                                                        </div>
                                                    </Link>
                                                    <div className="ProductItem__Info ProductItem__Info--center">
                                                        <h2 className="ProductItem__Title Heading">
                                                            <a href="/products/apr2020-1">RARE CARBON</a>
                                                        </h2>
                                                        <div className="ProductItem__PriceList  Heading">
                                                            <span className="ProductItem__Price Price Text--subdued">
                                                                <span className="money">product.price </span>
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
                        <Link to='/' className='ShopTheLook__ViewButton Button Button--primary' aria-haspopup="true"
                            aria-expanded="false" aria-controls="block-1597264358962-popover" onClick={detailfunc}>
                            View products
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ShopSlider
