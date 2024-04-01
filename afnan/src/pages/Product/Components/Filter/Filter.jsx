import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../../../config'

const Filter = ({handleFilterValue}) => {
    const [dimensions, setDimension] = useState([])
    useEffect(() => {
        const fetchSliderMain = async () => {
            try {
                const dimension = await axios.get(`${config.development.api}/dimensions`);
                const dimensionData = dimension.data;
                setDimension(dimensionData)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchSliderMain()
    }, [])
    return (
        <>
            <div className="Collapsible Collapsible--padded Collapsible--autoExpand">
                <button type="button" className="Collapsible__Button Heading u-h6" data-action="toggle-collapsible" aria-expanded="false">Filters<span className="Collapsible__Plus"></span></button>
                <div className="Collapsible__Inner">
                    <div className="Collapsible__Content">
                        <ul className="Linklist">
                            {
                                dimensions.map((dimension) => (
                                    <li className="Linklist__Item" key={dimension.name}>
                                        <button type="button"onClick={() => handleFilterValue(dimension.name)}
                                            className="Link Link--primary Text--subdued"
                                            data-tag="100ml" data-action="toggle-tag">
                                            <p>
                                                {dimension.name}
                                            </p>
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
