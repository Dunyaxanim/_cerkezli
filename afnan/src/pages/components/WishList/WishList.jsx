import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './wishlist.css'
const WishList = ({ wishListOpen, iswishListOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    return (
        <>
            <div className={`swym-ui-components swym-is-safari ${iswishListOpen ? 'wishList-open' : 'wishList-close'}`} id='swym-component-container'>
                <div className='swym-wishlist-notifications-container swym-ui-component swym-is-safari'></div>
                <div className='swym-wishlist-modal-container swym-ui-component swym-is-safari'>
                    <div className='swym-modals-container'>
                        <div className='swym-modal swym-simple-wishlist-modal' tabIndex="0" role="button">
                            <div className='swym-modal-bg' aria-hidden="true"> </div>
                            <div className='swym-modal-content'>
                                <button className={`swym-close-btn swym-bg-1 swym-is-button`} aria-label="Close Modal">
                                    <span className='swym-icon' onClick={wishListOpen}></span>
                                </button>
                                <div className='swym-simple-wishlist-container'>
                                    <div className='swym-wishlist-container-title-bar swym-bg-1 swym-bg-2 swym-color-4'>
                                        <div className='swym-wishlist-main-title swym-heading swym-heading-1' role="heading">
                                            My Wishlist
                                        </div>
                                        <button id="swym-user-login-status-btn" className="swym-user-login-status swym-icon swym-is-button swym-has-user swym-color-6" aria-label="dunyaxanim.ysfv@gmail.com">
                                            <span className="swym-user-text swym-value swym-value-1">dunyaxanim.ysfv@gmail.com</span>
                                        </button>
                                    </div>
                                    <div className='swym-simple-wishlist-container-content'>
                                        <div className='swym-wishlist-detail swym-simple-wishlist-detail'>
                                            <h1 className='screen-reader-txt'>Wishlist Page</h1>
                                            <div className='swym-wishlist-detail-header' aria-level="1" role="heading">
                                                <h2 className='swym-wishlist-main-title swym-heading swym-heading-1 swym-is-heading'>
                                                    My Wishlist
                                                </h2>
                                                <div className='swym-action-container'></div>
                                                <button onClick={handleOpenMenu} className='swym-wishlist-context-menu swym-icon swym-is-button swym-nav swym-nav-1' id="swym-wishlist-context-menu" aria-haspopup="true" aria-label="More Options">
                                                    {/* <div className='swym-wishlist-context-menu-bg' role="button" aria-hidden="true">

                                                    </div> */}
                                                    <div className={`swym-wishlist-context-menu-content ${isMenuOpen ? '' : 'wishList-none'}`} aria-modal="true" role="dialog">
                                                        <Link className="swym-wishlist-context-menu-item swym-share swym-nav swym-nav-1 swym-is-button" aria-label="Share">
                                                            <span className="swym-icon"></span>
                                                            <span>Share</span>
                                                        </Link>
                                                        <Link className="swym-wishlist-context-menu-item swym-delete swym-nav swym-nav-1 swym-is-button" aria-label="Clear List">
                                                            <span className="swym-icon"></span>
                                                            <span>Clear List</span>
                                                        </Link>
                                                    </div>
                                                </button>

                                            </div>
                                            <div className='swym-wishlist-detail-content'>
                                                <ul className='swym-wishlist-grid'>
                                                    <li>
                                                        <div className='swym-wishlist-item' tabIndex="0" role="button" aria-labelledby="EDICT AMBERYTHME">
                                                            <span id='EDICT AMBERYTHME' style={{ display: 'none' }}>EDICT AMBERYTHME</span>
                                                            <button className="swym-delete-btn swym-nav swym-nav-1 swym-is-button" aria-label="Delete EDICT AMBERYTHME"><span className="swym-icon"></span></button>
                                                            <div className="swym-wishlist-image-wrapper">
                                                                <img className="swym-wishlist-image" src="//cdn.shopify.com/s/files/1/0444/6194/9090/files/Edict-Amberythme-01-Ramadan.jpg?v=1709885767" alt="EDICT AMBERYTHME" />
                                                            </div>
                                                            <button className="swym-is-button"><h2 className="swym-title swym-title-1">EDICT AMBERYTHME</h2></button>
                                                            <div className="swym-product-price swym-text swym-text-1"><div className="swym-product-final-price swym-value">AED300.00</div></div>
                                                            <button className="swym-add-to-cart-btn swym-button swym-button-1 swym-is-button swym-bg-2 swym-color-4 swym-is-button" aria-label="Add To Cart">Add To Cart</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
