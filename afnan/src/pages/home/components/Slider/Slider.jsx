import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import config from '../../../../config';
const Slider = ({ items }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <>
            <div className='TopPanel'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    centeredSlides={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        600: {
                            slidesPerView: 2
                        },
                        900: {
                            slidesPerView: 3
                        },
                        1140: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {
                        items.map((item) => (
                            <SwiperSlide key={item.name}>
                                <div className='Carousel__Cell custom-p'>
                                    <div className='ProductItem '>
                                        <div className='ProductItem__Wrapper'>
                                            <Link to={`/detail/${item.slug}/${item.id}`} className='ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage'>
                                                <div className='AspectRatio AspectRatio--square'>
                                                    <img src={`${config.development.url}/${item.img_hover}`} className="ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,300,400,600,800,900,1000]" data-sizes="auto" alt="9 AM - Pour Femme" />
                                                    <img src={`${config.development.url}/${item.img}`} className="ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,400,600,700,800,900,1000]" data-sizes="auto" alt="9 AM - Pour Femme" sizes="400px" />
                                                </div>
                                            </Link>
                                            <div className="ProductItem__Info ProductItem__Info--center ProductItem__Info--center-custom">
                                                <h2 className="ProductItem__Title Heading">
                                                    <Link to={`/detail/${item.slug}/${item.id}`}>{item.name}</Link>
                                                </h2>
                                                <div className="ProductItem__PriceList ProductItem__PriceList--showOnHover Heading">
                                                    <span className="ProductItem__Price Price Text--subdued">
                                                        <span className="money">
                                                            Dhs. {item.price}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </>
    )
}

export default Slider
