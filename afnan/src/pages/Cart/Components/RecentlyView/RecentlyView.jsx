import React from 'react'
import Slider from '../../../home/components/Slider/Slider'
const RecentlyView = () => {
    return (
        <div id='shopify-section-recently-viewed-products' className='shopify-section shopify-section--bordered shopify-section--hidden custom-recently-view'>
            <section className='Section Section--spacingNormal'>
                <header className="SectionHeader SectionHeader--center">
                    <div className="Container">
                        <h3 className="SectionHeader__Heading Heading u-h3">Recently viewed</h3>
                    </div>
                </header>
                <div className='ProductListWrapper'>
                    {/* <Slider /> */}
                </div>
            </section>
        </div>
    )
}

export default RecentlyView
