import React from 'react';
import '../../../stayled/global.css';
import SlideShow from './SlideShow/SlideShow';
import ImageHero from './ImageHero/ImageHero';
import LatestCollectionSlider from './LatestCollections/LatestCollectionSlider';
import IframeOne from './IframeOne/IframeOne';
import IframeTwo from './IframeTwo/IframeTwo';
import Feature from './Feature/Feature';
import IframeThree from './IframeThree/IframeThree';
import CatalogParfum from './CatalogParfum/CatalogParfum';
import BlogOne from './BlogOne/BlogOne';
import SmartShoping from './SmartShoping/SmartShoping';
import ShopSlider from './ShopSlider/ShopSlider';
import MostPopularProduct from './MostPopularProduct/MostPopularProduct';
import Directory from './Directory/Directory';
import Collection from './Collection/Collection';
import Blog from './Blog/Blog';
import TimeLine from './TimeLine.jsx/TimeLine';


const HomeComponents = () => {
   
    return (
        <>
            <SlideShow/>
            <ImageHero/>
            <LatestCollectionSlider/>
            {/* <IframeOne/> */}
            {/* <IframeTwo/> */}
            <Feature/>
            <IframeThree/>
            <CatalogParfum/>
            <BlogOne/>
            <ImageHero/>
            <SmartShoping/>
            {/* <IframeTwo/> */}
            <ShopSlider />
            <MostPopularProduct />
            {/* <IframeTwo /> */}
            <Directory />/
            {/* <IframeTwo /> */}
            <Collection />
            <Blog/>
            <TimeLine/>
        </>
    )
}

export default HomeComponents
