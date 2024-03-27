import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { storedLanguage } from '../../../../http/api'
import axios from 'axios'
import config from '../../../../config'
const Collection = () => {

    const [collections, setCollections] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchcollections = await axios.get(`${config.development.api}/collections?lang=${await storedLanguage()}`);
                const fetchcollectionsData = fetchcollections.data;
                setCollections(fetchcollectionsData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])

    return (
        <div className='shopify-section'>
            <section>
                <div className='CollectionList CollectionList--grid CollectionList--spaced'>
                    {
                        collections.map((collection) => (
                            <div key={collection.name} className='CollectionItem CollectionItem--expand Carousel__Cell '>
                                <div className="CollectionItem__Wrapper CollectionItem__Wrapper--small"
                                // style={{ backgroundImage: `url(${config.development.url}/${blog.img})` }}
                                >
                                    <div className="CollectionItem__ImageWrapper">
                                        <div className="CollectionItem__Image Image--contrast Image--zoomOut hide-no-js Image--lazyLoaded"
                                            style={{ backgroundImage: `url(${config.development.url}/${collection.img})` }}></div>
                                    </div>
                                    <div className="CollectionItem__Content CollectionItem__Content--bottomLeft">
                                        <header className="SectionHeader">
                                            <h3 className="SectionHeader__SubHeading Heading u-h6 custom-header-color">{collection.name}</h3>
                                            <h2 className="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1 custom-header-color">{collection.desc}</h2>
                                            <div className="SectionHeader__ButtonWrapper">
                                                <Link to={`/pages/${collection.slug}/${collection.id}`} className="CollectionItem__Link Button custom-header-color">View products</Link>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Collection
