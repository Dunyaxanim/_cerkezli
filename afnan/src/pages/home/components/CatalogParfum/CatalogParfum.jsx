import React, { useState, useEffect } from 'react'
import Slider from '../Slider/Slider'
import Button from '../../../components/Button/Button'
import { storedLanguage } from '../../../../http/api'
import axios from 'axios'
import config from '../../../../config'

const CatalogParfum = () => {
    const [catalogs, setCatalog] = useState([])
    const [items, setItems] = useState([])
    const [itemSlug, setSlug] = useState([])
    const [itemId, setItemId] = useState([])

    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchCatalog = await axios.get(`${config.development.api}/catalog?lang=${await storedLanguage()}`);
                const fetchCatalogData = fetchCatalog.data;
                setCatalog(fetchCatalogData)
                setItems(fetchCatalogData[0].products)
                setSlug(fetchCatalogData[0].slug)
                setItemId(fetchCatalogData[0].id)
                
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])
    const handleProducts = (products, slug, id) => {
        setItems(products)
        setSlug(slug)
        setItemId(id)
    }
    return (
        <div id='shopify-section-1607341495ca918512' className="shopify-section shopify-section--bordered">
            <section className='Section Section--spacingNormal' data-section-id="1607341495ca918512" data-section-type="featured-collections">
                <header className='SectionHeader SectionHeader--center'>
                    <div className='Container'>
                        <div className='SectionHeader__TabList TabList' role='tablist'>
                            {
                                catalogs.map((catalog) => (
                                    <button key={catalog.name} onClick={() => handleProducts(catalog.products, catalog.slug, catalog.id)}
                                        className={`Heading u-h1 TabList__Item ${itemId == catalog.id ? 'is-active' : ''}`}
                                        data-action="toggle-tab" aria-controls="block-1607341495ca918512-0"
                                        aria-selected="false" role="tab">
                                        {catalog.name}
                                    </button>
                                ))
                            }

                        </div>
                    </div>
                </header>
                <Slider items={items} />
                <Button text={'View All Products'} to={`/pages/${itemSlug}/${itemId}`} />
            </section>
        </div>
    )
}

export default CatalogParfum
