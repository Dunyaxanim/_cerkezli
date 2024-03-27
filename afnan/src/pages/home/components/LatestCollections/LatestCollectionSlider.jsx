import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider from '../Slider/Slider';

import { Pagination, Navigation } from 'swiper/modules';
import Button from '../../../components/Button/Button';
import axios from 'axios';
import config from '../../../../config';
import { storedLanguage } from '../../../../http/api';
const LatestCollectionSlider = () => {

    const [items, setCollections] = useState([])

    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchcollections = await axios.get(`${config.development.api}/latest-collections?lang=${await storedLanguage()}`);
                const fetchcollectionsData = fetchcollections.data;
                setCollections(fetchcollectionsData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])

    return (
        <>
            <div id='shopify-section-featured-collections' className="shopify-section shopify-section--bordered">
                <section className='Section Section--spacingNormal' data-section-id="featured-collections" data-section-type="featured-collections">
                    <header className='SectionHeader SectionHeader--center'>
                        <div className='Container'>
                            <h3 className='SectionHeader__SubHeading Heading u-h6'>MUST HAVE</h3>
                            <h2 className='SectionHeader__Heading Heading u-h1'> LATEST COLLECTIONS</h2>
                        </div>
                    </header>

                    <Slider items={items} />
                    <Button  text={"VIEW ALL PRDUCTS"} to={`/all-products`}/>
                </section>
            </div>
        </>
    )
}

export default LatestCollectionSlider
