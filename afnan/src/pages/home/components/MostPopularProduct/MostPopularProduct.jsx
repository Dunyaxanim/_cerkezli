import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const MostPopularProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div className='shopify-section shopify-section--bordered'>
            <div className='Section Section--spacingNormal'>
                <div className='Container'>
                    <header className='SectionHeader SectionHeader--center '>
                        <h2 className=' SectionHeader__Heading Heading u-h1'>
                            MOST POPULAR
                        </h2>
                    </header>
                    <div className='FeaturedProduct FeaturedProduct--center'>
                        <Link className="FeaturedProduct__Gallery">
                            <div className='AspectRatio custom-AspectRatio'>
                                <img src="/images/popular.webp" className='Image--fadeIn lazyautosizes Image--lazyLoaded' alt="" />
                                <span className='Image__Loader'></span>
                            </div>
                        </Link>
                        <div className='FeaturedProduct__Info'>
                            <div className="ProductMeta">
                                <h1 className="ProductMeta__Title Heading u-h2">
                                    <Link to="/">SUPREMACY SILVER</Link>
                                </h1>
                                <div className="ProductMeta__PriceList Heading">
                                    <span className="ProductMeta__Price Price Text--subdued u-h4">
                                        <span className="money">Dhs. 120</span>
                                    </span>
                                </div>
                                <div id="tabbyPromo"></div>
                            </div>
                            <div className='ProductForm'>
                                <form action="/" className='ProductForm' encType="multipart/form-data" acceptCharset='UTF-8'>
                                    <div className="ProductForm__Variants">
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Type:</span>
                                            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                                <li className="HorizontalList__Item">
                                                    <input
                                                        id="option-featured-product-0-0"
                                                        className="SizeSwatch__Radio"
                                                        type="radio"
                                                        name="option-0"
                                                        defaultValue="Eau De Perfum"
                                                        defaultChecked="checked"
                                                        data-option-position="1"
                                                    />
                                                    <label htmlFor="option-featured-product-0-0" className="SizeSwatch">
                                                        Eau De Perfum
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Volume:</span>
                                            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                                <li className="HorizontalList__Item">
                                                    <input
                                                        id="option-featured-product-1-0"
                                                        className="SizeSwatch__Radio"
                                                        type="radio"
                                                        name="option-1"
                                                        defaultValue="100 ML"
                                                        defaultChecked="checked"
                                                        data-option-position="2"
                                                    />
                                                    <label htmlFor="option-featured-product-1-0" className="SizeSwatch">
                                                        100 ML
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ProductForm__Option ProductForm__Option--labelled">
                                            <span className="ProductForm__Label">Orientation:</span>
                                            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                                <li className="HorizontalList__Item">
                                                    <input
                                                        id="option-featured-product-2-0"
                                                        className="SizeSwatch__Radio"
                                                        type="radio"
                                                        name="option-2"
                                                        defaultValue="Pour Homme"
                                                        defaultChecked="checked"
                                                        data-option-position="3"
                                                    />
                                                    <label htmlFor="option-featured-product-2-0" className="SizeSwatch">
                                                        Pour Homme
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="no-js ProductForm__Option">
                                            <div className="Select Select--primary">
                                                <select id="product-select-5569814003874" name="id" title="Variant">
                                                    <option defaultValue="35580178792610" data-sku="APS2020-77">
                                                        Eau De Perfum / 100 ML / Pour Homme - Dhs. 120
                                                    </option>
                                                    <option defaultValue="35580178792610" data-sku="APS2020-77">
                                                        Eau De Perfum / 200 ML / Pour Homme - Dhs. 120
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <span className="ProductForm__Label">Quantity:</span>
                                        <div className="ProductForm__QuantitySelector">
                                            <div className="QuantitySelector QuantitySelector--large">
                                                <span className="QuantitySelector__Button Link Link--secondary" onClick={handleDecreaseQuantity}>
                                                    -
                                                </span>
                                                <input
                                                    type="text"
                                                    className="QuantitySelector__CurrentQuantity"
                                                    pattern="[0-9]*"
                                                    name="quantity"
                                                    defaultValue={quantity}
                                                    readOnly
                                                />
                                                <span className="QuantitySelector__Button Link Link--secondary" onClick={handleIncreaseQuantity}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="ProductForm__AddToCart Button Button--secondary Button--full">
                                        <span>Add to cart</span>
                                    </button>
                                    <div className='shopify-payment-button'>
                                        <div>
                                            <div>
                                                <div>
                                                    <div className='shopify-cleanslate'>
                                                        <div className='R9tDu8JrE_i1ctOEo0v_'></div>
                                                    </div>
                                                    <button className='shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw custom-shopify-payment-button__button'>
                                                        Buy it now
                                                    </button>
                                                    <button className='shopify-payment-button__more-options BUz42FHpSPncCPJ4Pr_f shopify-payment-button__button--hidden'>

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className='FeaturedProduct__ViewWrapper'>
                                    <Link className='Link Link--underline'>View product details</Link>
                                </div>
                            </div>
                            <div className='FeaturedProduct__ViewWrapper'></div>
                        </div>
                    </div>
                </div>
                <div className='Product__OffScreen'>

                </div>
            </div>
        </div>
    )
}

export default MostPopularProduct
