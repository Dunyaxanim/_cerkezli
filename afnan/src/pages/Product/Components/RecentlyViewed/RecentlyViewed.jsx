import React from 'react'
import Slider from '../../../home/components/Slider/Slider'

const RecentlyViewed = () => {
    return (
        <div className='shopify-section-recently-viewed-products'>
            <section className='Section Section--spacingNormal'>
                <header className='SectionHeader SectionHeader--center'>
                    <div className='Container'>
                        <h3 className='SectionHeader__Heading Heading u-h3'>
                            Recently viewed
                        </h3>
                    </div>
                </header>
                {/* <Slider/> */}
            </section>
        </div>
    )
}

export default RecentlyViewed
