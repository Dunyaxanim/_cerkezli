import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = ({ isCheckout, handleIsCheckout }) => {
    return (
        <div id='sidebar-cart' className='Drawer Drawer--fromRight' aria-hidden={!isCheckout}>
            <div className="Drawer__Header Drawer__Header--bordered Drawer__Container">
                <span className="Drawer__Title Heading u-h4">Cart</span>
                <button onClick={handleIsCheckout} className="Drawer__Close Icon-Wrapper--clickable" data-action="close-drawer" data-drawer-id="sidebar-cart" aria-label="Close cart">
                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <form action="POST" className='Cart Drawer__Content'>
                <div className='Drawer__Main'>
                    <div className='Cart__ShippingNotice Text--subdued'>
                        <div className='Drawer__Container'>
                            <p>You are eligible for free shipping!</p>
                        </div>
                    </div>
                    <div className="Cart__ItemList">
                        <div className="CartItemWrapper">
                            <div className="CartItem">
                                <div className="CartItem__ImageWrapper AspectRatio">
                                    <div className="AspectRatio" style={{ '--aspect-ratio': '1.0' }}>
                                        <img className="CartItem__Image" src="//www.afnan.com/cdn/shop/files/9AM-01-Ramadan_240x.jpg?v=1709885369" alt="" />
                                    </div>
                                </div>
                                <div className="CartItem__Info">
                                    <h2 className="CartItem__Title Heading">
                                        <Link>9 AM - Pour Femme</Link>
                                    </h2>
                                    <div className="CartItem__Meta Heading Text--subdued">
                                        <p className="CartItem__Variant">Eau De Perfum / 100 ML / Pour Femme</p>
                                        <div className="CartItem__PriceList">
                                            <span className="CartItem__Price Price">
                                                <span className="money">Dhs. 120</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="CartItem__Actions Heading Text--subdued" style={{ textAlign: 'center' }}>
                                        <div className="CartItem__QuantitySelector">
                                            <div className="QuantitySelector">
                                                <Link className="QuantitySelector__Button Link Link--primary" title="Set quantity to 2" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
                                                        <path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                                    </svg>
                                                </Link>
                                                <input type="text" name="updates[]" id="updates_42725010768034:26bb532bbf1a5a6889c937e7814074a3" className="QuantitySelector__CurrentQuantity" pattern="[0-9]*" data-line-id="42725010768034:26bb532bbf1a5a6889c937e7814074a3" defaultValue="3" />
                                                <Link className="QuantitySelector__Button Link Link--primary" title="Set quantity to 4" data-quantity="4" data-line-id="42725010768034:26bb532bbf1a5a6889c937e7814074a3" data-action="update-item-quantity">
                                                    <svg className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
                                                        <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                            <path d="M8,1 L8,15"></path>
                                                            <path d="M1,8 L15,8"></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to="/" className="CartItem__Remove Link Link--underline Link--underlineShort" data-quantity="0" data-line-id="42725010768034:26bb532bbf1a5a6889c937e7814074a3" data-action="remove-item">Remove</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Drawer__Footer" data-drawer-animated-bottom="">
                    <Link to='/checkout'>
                        <button type="button" className="Cart__NoteButton" data-action="toggle-cart-note">Add Order Note</button>
                        <p className="Cart__Taxes Text--subdued">Shipping &amp; taxes calculated at checkout</p>
                        <button type="submit" name="checkout" className="Cart__Checkout Button Button--primary Button--full">

                            <span>Checkout</span>


                            <span className="Button__SeparatorDot"></span>
                            <span><span className="money">Dhs. 540</span></span>
                        </button>
                        <div className="Cart__OffscreenNoteContainer" aria-hidden="true">
                            <span className="Cart__NoteButton">Add Order Note</span>
                            <div className="Form__Item">
                                <textarea className="Cart__Note Form__Textarea" name="note" id="cart-note" rows="3" placeholder="How can we help you?" data-scrollable=""></textarea>
                            </div>
                            <button type="button" className="Button Button--primary Button--full" data-action="toggle-cart-note">Save</button>
                        </div>
                    </Link>
                </div>

            </form>
        </div >
    )
}

export default Sidebar
