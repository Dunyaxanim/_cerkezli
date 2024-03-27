import React from 'react'
import '../../../stayled/global.css';
import ProductList from './ProductList/ProductList'
import SlideShow from '../../home/components/SlideShow/SlideShow'
import Hero from './Hero/Hero'
import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
import GlobalBanner from './GlobalBanner/GlobalBanner';

const index = ({ id }) => {

    return (
        <>
            <Hero id={id} />
            <RecentlyViewed />
            <GlobalBanner />
        </>
    )
}

export default index
