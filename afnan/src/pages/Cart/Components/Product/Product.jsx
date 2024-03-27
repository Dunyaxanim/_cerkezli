import React from 'react'

const Product = ({ slug }) => {
    
    return (
        <div id='shopify-section-cart-template' className='shopify-section shopify-section--bordered'>
            <div className='Container'>
                <header className="PageHeader">
                    <div className="SectionHeader SectionHeader--center">
                        <h1 className="SectionHeader__Heading Heading u-h1">
                            Cart
                        </h1>
                        <p className="SectionHeader__Description Text--subdued">
                            You are eligible for free shipping!
                        </p>
                    </div>
                </header>
                <div className='PageContent'>
                    <form action="POST" className='Cart Cart--expanded'>
                        <div className='Cart__ItemList'>
                            <div className="Cart__Head hidden-phone">
                                <span className="Cart__HeadItem Heading Text--subdued u-h7">Product</span>
                                <span className="Cart__HeadItem"></span>
                                <span className="Cart__HeadItem Heading Text--subdued u-h7" style={{ textAlign: 'center' }}>Quantity</span>
                                <span className="Cart__HeadItem Heading Text--subdued u-h7" style={{ textAlign: 'right' }}>Total</span>
                            </div>
                            <div className="CartItem">
                                <div className="CartItem__ImageWrapper AspectRatio">
                                    <div className="AspectRatio" style={{ '--aspect-ratio': 1.0 }}>
                                        <img className="CartItem__Image" src="//www.afnan.com/cdn/shop/files/SupremacyIntense-Product-01-Ramadan_240x.jpg?v=1709897653" alt="" />
                                    </div>
                                </div>
                                <div className="CartItem__Info">
                                    <h2 className="CartItem__Title Heading">
                                        <Link to="/detail" >SUPREMACY NOT ONLY INTENSE - LUXURY COLLECTION</Link>
                                    </h2>

                                    <div className="CartItem__Meta Heading Text--subdued">
                                        <p className="CartItem__Variant">EXTRAIT DE PARFUM / 100 ML / Pour Homme</p>
                                        <div className="CartItem__PriceList">
                                            <span className="CartItem__Price Price">
                                                <span className="money">Dhs. 180</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="CartItem__Actions Heading Text--subdued" style={{ textAlign: 'center' }}>
                                        <div className="CartItem__QuantitySelector">
                                            <div className="QuantitySelector">
                                                <a className="QuantitySelector__Button Link Link--primary" title="Set quantity to 0" href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" data-quantity="0" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                        <path d="M1,1 L15,1" stroke="currentColor" fill="none" fill-rule="evenodd" strokeLinecap="square"></path>
                                                    </svg>
                                                </a>

                                                <input type="text" name="updates[]" id="updates_39607999660194:2f612da7ec961d55f56a6c04805f477c" className="QuantitySelector__CurrentQuantity" pattern="[0-9]*" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" value="1" />

                                                <a className="QuantitySelector__Button Link Link--primary" title="Set quantity to 2" href="/cart/change?quantity=2&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" data-quantity="2" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                        <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                            <path d="M8,1 L8,15"></path>
                                                            <path d="M1,8 L15,8"></path>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        <a href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" className="CartItem__Remove Link Link--underline Link--underlineShort" data-quantity="0" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="remove-item">Remove</a>
                                    </div>

                                    <div className="CartItem__Actions Heading Text--subdued" style={{ textAlign: 'center' }}>
                                        <div className="CartItem__QuantitySelector">
                                            <div className="QuantitySelector">
                                                <a className="QuantitySelector__Button Link Link--primary" title="Set quantity to 0" href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" data-quantity="0" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                        <path d="M1,1 L15,1" stroke="currentColor" fill="none" fill-rule="evenodd" strokeLinecap="square"></path>
                                                    </svg>
                                                </a>

                                                <input type="text" name="updates[]" id="updates_39607999660194:2f612da7ec961d55f56a6c04805f477c" className="QuantitySelector__CurrentQuantity" pattern="[0-9]*" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" value="1" />

                                                <a className="QuantitySelector__Button Link Link--primary" title="Set quantity to 2" href="/cart/change?quantity=2&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" data-quantity="2" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                        <g stroke="currentColor" fill="none" fill-rule="evenodd" strokeLinecap="square">
                                                            <path d="M8,1 L8,15"></path>
                                                            <path d="M1,8 L15,8"></path>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c" className="CartItem__Remove Link Link--underline Link--underlineShort" data-quantity="0" data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c" data-action="remove-item">Remove</a>
                                    </div>

                                    <div className="CartItem__LinePriceList Heading Text--subdued" style={{ textAlign: 'right' }}>
                                        <span className="CartItem__Price Price">
                                            <span className="money">Dhs. 180</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="CartItem__Actions Heading Text--subdued" style={{ textAlign: 'center' }}>
                                    <div className="CartItem__QuantitySelector">
                                        <div className="QuantitySelector">
                                            <a
                                                className="QuantitySelector__Button Link Link--primary"
                                                title="Set quantity to 0"
                                                href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                data-quantity="0"
                                                data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                data-action="update-item-quantity"
                                            >
                                                <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                    <path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                                </svg>
                                            </a>

                                            <input
                                                type="text"
                                                name="updates[]"
                                                id="updates_39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                className="QuantitySelector__CurrentQuantity"
                                                pattern="[0-9]*"
                                                data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                value="1"
                                            />
                                            <a
                                                className="QuantitySelector__Button Link Link--primary"
                                                title="Set quantity to 2"
                                                href="/cart/change?quantity=2&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                data-quantity="2"
                                                data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                                data-action="update-item-quantity"
                                            >
                                                <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                        <path d="M8,1 L8,15"></path>
                                                        <path d="M1,8 L15,8"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <a
                                        href="/cart/change?quantity=0&amp;id=39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                        className="CartItem__Remove Link Link--underline Link--underlineShort"
                                        data-quantity="0"
                                        data-line-id="39607999660194:2f612da7ec961d55f56a6c04805f477c"
                                        data-action="remove-item"
                                    >
                                        Remove
                                    </a>
                                </div>
                                <div className="CartItem__LinePriceList Heading Text--subdued" style={{ textAlign: 'right' }}>
                                    <span className="CartItem__Price Price">
                                        <span className="money">Dhs. 180</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <footer className="Cart__Footer">
                            <div className="Cart__NoteContainer">
                                <span className="Cart__NoteButton">Add Order Note</span>
                                <textarea
                                    className="Cart__Note Form__Textarea"
                                    name="note"
                                    id="cart-note"
                                    rows="4"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <div className="Cart__Recap">
                                <p className="Cart__Total Heading u-h6">
                                    Total: <span><span className="money">Dhs. 420</span></span>
                                </p>
                                <p className="Cart__Taxes Text--subdued">Shipping & taxes calculated at checkout</p>
                                <button type="submit" name="checkout" className="Cart__Checkout Button Button--primary Button--full">Checkout</button>
                            </div>
                        </footer>
                    </form>
                    <div className='Section Section--spacingExtraLarge'>
                        <div className='Panel'>
                            <h2 className='Panel__Title Heading u-h2'>
                                Estimate shipping
                            </h2>
                            <div className='Panel__Content'>
                                <div className='ShippingEstimator custom-ShippingEstimator'>
                                    <div className='ShippingEstimator__Form'>
                                        <div className="ShippingEstimator__Country Form__Select Select Select--primary">
                                            <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                                <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
                                            </svg>
                                            <select name="country" title="Country" data-default="United States">
                                                <option value="United Arab Emirates" data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]">United Arab Emirates</option>
                                                <option value="---" data-provinces="[]">---</option>
                                                <option value="Afghanistan" data-provinces="[]">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ShippingEstimator__Province Form__Select Select Select--primary" style={{ display: 'block' }}>
                                        <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                            <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
                                        </svg>
                                        <select name="province" title="Province">
                                            <option value="West Virginia">West Virginia</option>
                                            <option value="Wisconsin">Wisconsin</option>
                                            <option value="Wyoming">Wyoming</option>
                                        </select>
                                    </div>
                                    <input type="text"
                                        className="ShippingEstimator__Zip Form__Input"
                                        name="zip"
                                        placeholder="Zip code" />
                                    <button type="button" className="ShippingEstimator__Submit Button Button--primary">
                                        Estimate
                                    </button>
                                    <div className="ShippingEstimator__Error Alert Alert--error" style={{ display: 'none' }}></div>
                                    <div className="ShippingEstimator__Results">
                                        <div className="ShippingEstimator__ResultsInner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
