import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './wishlist.css'
import config from '../../../config'
import ShareModal from '../ShareModal/ShareModal'
const WishList = ({ wishListOpen, iswishListOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleClearList = () => {
        setproductId(0)
        const existingProductsCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('products='));
        let products = {};

        if (existingProductsCookie) {
            const existingProducts = existingProductsCookie.split('=')[1];
            products = JSON.parse(existingProducts);
        }

        products = {};
        const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `products=${JSON.stringify(products)}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    const [products, setProducts] = useState({});
    const [productId, setproductId] = useState()

    useEffect(() => {
        const existingProductsCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('products='));

        if (existingProductsCookie) {
            const existingProducts = existingProductsCookie.split('=')[1];
            const parsedProducts = JSON.parse(decodeURIComponent(existingProducts));
            setProducts(parsedProducts);
        } else {
            console.log("Mevcut ürün bulunamadı.");
        }
    }, [iswishListOpen, productId]);

    const handleProductDelete = (productId) => {
        setproductId(productId)
        const existingProductsCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('products='));

        let products = {};

        if (existingProductsCookie) {
            const existingProducts = existingProductsCookie.split('=')[1];
            products = JSON.parse(existingProducts);
        }
        delete products[productId];

        const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `products=${JSON.stringify(products)}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    const [isOpenShareModal, setIsOpenShareModal] = useState(false)
    const handleShareModa = () => {
        setIsOpenShareModal(!isOpenShareModal)
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

                                                    <div className={`swym-wishlist-context-menu-content ${isMenuOpen ? '' : 'wishList-none'}`} aria-modal="true" role="dialog">
                                                        <Link className="swym-wishlist-context-menu-item swym-share swym-nav swym-nav-1 swym-is-button" aria-label="Share">
                                                            <span className="swym-icon"></span>
                                                            <span onClick={handleShareModa}>Share</span>
                                                        </Link>
                                                        <Link className="swym-wishlist-context-menu-item swym-delete swym-nav swym-nav-1 swym-is-button" aria-label="Clear List">
                                                            <span className="swym-icon"></span>
                                                            <span onClick={handleClearList}>Clear List</span>
                                                        </Link>
                                                    </div>
                                                </button>

                                            </div>
                                            <div className='swym-wishlist-detail-content'>
                                                {
                                                    Object.values(products).length > 0 ? (
                                                        <ul className='swym-wishlist-grid' >
                                                            {
                                                                Object.values(products).map((product) => (
                                                                    <li key={product.id}>
                                                                        <div className='swym-wishlist-item' tabIndex="0" role="button" aria-labelledby="EDICT AMBERYTHME">
                                                                            <span id='EDICT AMBERYTHME' style={{ display: 'none' }}>{product.name}</span>
                                                                            <button className="swym-delete-btn swym-nav swym-nav-1 swym-is-button" aria-label="Delete EDICT AMBERYTHME"><span onClick={() => handleProductDelete(product.id)} className="swym-icon"></span></button>
                                                                            <div className="swym-wishlist-image-wrapper">
                                                                                <img className="swym-wishlist-image" src={`${config.development.url}/${product.img}`} alt="EDICT AMBERYTHME" />
                                                                            </div>
                                                                            <button className="swym-is-button"><h2 className="swym-title swym-title-1">EDICT AMBERYTHME</h2></button>
                                                                            <div className="swym-variant-title swym-text swym-title-2">Eau De Perfum / 100 ML / Pour Femme</div>
                                                                            <div className="swym-product-price swym-text swym-text-1"><div className="swym-product-final-price swym-value">AED{product.price}</div></div>
                                                                            <button className="swym-add-to-cart-btn swym-button swym-button-1 swym-is-button swym-bg-2 swym-color-4 swym-is-button" aria-label="Add To Cart">Add To Cart</button>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    ) : (
                                                        <div className="swym-empty-wishlist-container">
                                                            <h3 className="swym-empty-wishlist-title swym-heading swym-heading-1" aria-level="2">
                                                                Love It? Add to My Wishlist
                                                            </h3>
                                                            <p className="swym-empty-wishlist-text swym-text swym-text-1">
                                                                My Wishlist allows you to keep track of all of your favorites and shopping activity whether you're on your computer, phone, or tablet.
                                                                You won't have to waste time searching all over again for that item you loved on your phone the other day - it's all here in one place!
                                                            </p>
                                                            <Link onClick={wishListOpen} className="swym-empty-wishlist-continue-btn swym-button swym-button-1 swym-is-button swym-bg-2 swym-color-4" role="link" aria-label="Continue shopping">
                                                                Continue shopping
                                                            </Link>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ShareModal isOpenShareModal={isOpenShareModal} handleShareModa={handleShareModa} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
