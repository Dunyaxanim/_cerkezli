import React, { useState, useEffect } from 'react'
import { storedLanguage } from '../../../../http/api'
import axios from 'axios'
import config from '../../../../config'

const MainHero = ({ id }) => {
    const [collection, setCollection] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const fetchcollection = await axios.get(`${config.development.api}/collections/${id}?lang=${await storedLanguage()}`);
                const fetchcollectionData = fetchcollection.data;
                setCollection(fetchcollectionData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [id])
    return (
        <>
            <header className="PageHeader PageHeader--withBackground"
            // style={{ background: `url(${config.development.url}/${collection.img})` }}
            >
                <div className="PageHeader__ImageWrapper Image--fadeIn Image--contrast Image--lazyLoaded custom-PageHeader__ImageWrapper-height" data-optimumx="1.2"
                    style={{ backgroundImage: `url(${config.development.url}/${collection.img})` }}
                >

                    <img alt="" className="lazyautosizes Image--lazyLoaded" data-sizes="auto" data-optimumx="1.2" data-parent-fit="cover" data-srcset="" sizes="1802px" />
                </div>
                <noscript>
                    <div className="PageHeader__ImageWrapper Image--contrast"
                    //  style={{ backgroundImage: `url(${config.development.url}/${collection.img})` }}
                    ></div>
                </noscript>
                <div className="Container">
                    <div className="SectionHeader SectionHeader--center custom-SectionHeader-m">
                        <h1 className="SectionHeader__Heading Heading u-h1">{collection.name}</h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MainHero
