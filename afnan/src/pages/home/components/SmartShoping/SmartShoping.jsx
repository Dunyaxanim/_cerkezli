import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../SmartShoping/SmartShoping.module.css';

const SmartShoping = () => {


    const [total, setTotal] = useState(1);

    const decrease = () => {
        total > 1 ? setTotal(prevTotal => prevTotal - 1) : prevTotal => prevTotal = 1

    };

    const increase = () => {
        setTotal(prevTotal => prevTotal + 1);
    };

    return (
        <div id='shopify-section-1605429474311c65be' className='shopify-section shopify-section--bordered'>
            <section className='Section Section--spacingNormal' data-section-id="1605429474311c65be" data-section-type="featured-product">
                <div className='Container'>

                    <header className='SectionHeader SectionHeader--center '>
                        <h3 className='SectionHeader__SubHeading Heading u-h6'>GIFTED BY AFNAN</h3>
                        <h2 className='SectionHeader__Heading Heading u-h1'>SMART SHOPPING</h2>
                    </header>
                    <div className='FeaturedProduct FeaturedProduct--center'>
                        <Link to='/' className="FeaturedProduct__Gallery">
                            <div className='AspectRatio custom-style'>
                                <img src='/images/gift-card1.webp' className="Image--fadeIn lazyautosizes Image--lazyLoaded" data-sizes="auto" data-widths="[200,300,400,600,700,800,900,1000]"
                                    alt="FALL IN LOVE - GIFT CARD" sizes="400px" />
                            </div>
                            <span className='Image__Loader'></span>
                        </Link>
                        <div className='FeaturedProduct__Info'>
                            <div className='ProductMeta'>
                                <h2 className='ProductMeta__Vendor Heading u-h6'>AFNAN PERFUMES</h2>
                                <h1 className='ProductMeta__Title Heading u-h2'><Link to='/'>FALL IN LOVE - GIFT CARD</Link></h1>
                                <div className='ProductMeta__PriceList Heading'>
                                    <span className="ProductMeta__Price Price Text--subdued u-h4">
                                        <span className="money">
                                            Dhs. 10
                                        </span>
                                    </span>
                                </div>
                                <div id="tabbyPromo"><div className="styles__tabby-snippet--750cf"><span></span></div></div>
                                {/* scripts */}
                                <div className='ProductMeta__UnitPriceMeasurement custom-dn' >
                                    <div className='UnitPriceMeasurement Heading u-h6 Text--subdued'>
                                        <span className='UnitPriceMeasurement__Price'></span>
                                        <span className='UnitPriceMeasurement__Separator'></span>
                                        <span className='UnitPriceMeasurement__ReferenceValue'></span>
                                        <span className='UnitPriceMeasurement__ReferenceUnit'></span>
                                    </div>
                                </div>
                                <div className='ProductMeta__Description'>
                                    <div className='Rte'></div>
                                </div>
                            </div>
                            <form method="post" action="/" id="product_form_6117158420642" acceptCharset='UTF-8' className="ProductForm" encType='multipart/form-data'>
                                <input type="hidden" name="form_type" defaultValue="product" />
                                <input type="hidden" name="utf8" defaultValue="" />
                                <div className='ProductForm__Variants'>
                                    <div className="ProductForm__Option">
                                        <button type="button" className="ProductForm__Item " aria-expanded="false" aria-controls="popover-6117158420642-1605429474311c65be-denominations">
                                            <span className="ProductForm__OptionName">
                                                Denominations:
                                                <span className="ProductForm__SelectedValue">AED 10.00</span>
                                            </span>
                                            <img src="" className="Icon Icon--select-arrow" alt="" role="presentation" viewBox="0 0 19 10" />
                                        </button>
                                    </div>
                                    <div className='no-js ProductForm__Option'>

                                        <div className="Select Select--primary">
                                            <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                                <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
                                            </svg>
                                            <select id="product-select-6117158420642" name="id" title="Variant">
                                                <option defaultValue="37730765439138" data-sku="">AED 10.00 - Dhs. 10</option>
                                                <option defaultValue="37730765471906" data-sku="">AED 25.00 - Dhs. 25</option>
                                                <option defaultValue="37730765504674" data-sku="">AED 50.00 - Dhs. 50</option>
                                                <option defaultValue="37730765537442" data-sku="">AED 100.00 - Dhs. 100</option>
                                            </select>
                                        </div>


                                    </div>
                                    <div className="ProductForm__QuantitySelector">
                                        <div className="QuantitySelector QuantitySelector--large">
                                            <span className="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity" onClick={decrease}>
                                                <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                    <path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                                </svg>
                                            </span>
                                            <input type="text" className="QuantitySelector__CurrentQuantity" pattern="[0-9]*" name="quantity" defaultValue={total} />
                                            <span className="QuantitySelector__Button Link Link--secondary" data-action="increase-quantity" onClick={increase}>
                                                <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                        <path d="M8,1 L8,15"></path>
                                                        <path d="M1,8 L15,8"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="ProductForm__AddToCart Button Button--secondary Button--full" data-action="add-to-cart">
                                    <span>Add to cart</span>
                                    <span className="Button__SeparatorDot"></span>
                                    <span>
                                        <span className="money">Dhs. 10</span>
                                    </span>
                                </button>
                                <div className='shopify-payment-button' data-shopify="payment-button">
                                    <div className="wallet-button-fade-in">
                                        <button type="button" className="shopify-payment-button__button shopify-payment-button__button--unbranded custom-btn-w custom-shopify-payment-button__button">
                                            Buy it now
                                        </button>
                                    </div>
                                </div>

                            </form>
                            <div className='FeaturedProduct__ViewWrapper'>
                                <Link className='Link Link--underline'>
                                    View product details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SmartShoping
