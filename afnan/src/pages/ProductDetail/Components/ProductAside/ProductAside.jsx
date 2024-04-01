import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
const ProductAside = ({ product, styled }) => {
    const detailRef = useRef(null);

    const [total, setTotal] = useState(1);
    const decrease = () => {
        total > 1 ? setTotal(prevTotal => prevTotal - 1) : prevTotal => prevTotal = 1;
    };

    const increase = () => {
        setTotal(prevTotal => prevTotal + 1);
    };

    useEffect(() => {
        const productElement = document.querySelector('.shopify-section.shopify-section--bordered');
        if (productElement) {
            productElement.style.minHeight = `${detailRef.current.offsetHeight}px`;
        }
    }, [product])

    // WishList

    const [isAded, setIsAded] = useState(false)
    const [allProductsLength, setAllProductslength] = useState([])

    useEffect(() => {
        const existingProductsCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('products='));

        if (existingProductsCookie) {
            const existingProducts = existingProductsCookie.split('=')[1];
            const parsedProducts = JSON.parse(decodeURIComponent(existingProducts));
            console.log(parsedProducts)
            setAllProductslength(Object.keys(parsedProducts).length);

        } else {
            console.log("Mevcut ürün bulunamadı.");
        }
    }, [isAded]);

    const handleProduct = () => {

        const existingProductsCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('products='));
        let products = {};

        if (existingProductsCookie) {
            const existingProducts = existingProductsCookie.split('=')[1];
            products = JSON.parse(existingProducts);
        }
        const allproducts = Object.values(products)

        const filteredProduct = allproducts.filter((obj) => obj.id === product.id);
        if (filteredProduct.length > 0) {
            delete products[product.id];
            setIsAded(false)
        } else {
            setIsAded(true)
            products[product.id] = product;
        }
        const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `products=${JSON.stringify(products)}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    return (
        <div className='Product__InfoWrapper'>
            <div className={`Product__Info ${styled['custom-Product__Info']}`}>
                <div ref={detailRef} className='Container'>
                    <div className='ProductMeta'>
                        <h2 className='ProductMeta__Vendor Heading u-h6'>AFNAN PERFUMES</h2>
                        <h1 className='ProductMeta__Title Heading u-h2'>{product.name}</h1>
                        <p className='ProductMeta__Sku Heading Text--subdued u-h6'>SKU:
                            <span className='ProductMeta__SkuNumber'>{product.stock_code}</span>
                        </p>
                        <div className='ProductMeta__PriceList Heading'>
                            <span className='ProductMeta__Price Price Text--subdued u-h4'>
                                <span className='money'>Dhs. {product.price}</span>
                            </span>
                        </div>
                        <div className='tabbyPromo'>
                            <div className='styles__tabby-snippet--750cf'>
                                <span>
                                    <div className='styles__tabby-promo-snippet--2ddd6 styles__tabby-promo-snippet_font_inherit--345bc styles__snippetWrapper--b97bf'>
                                        <div className={`${styled['styles__tabby-promo-snippet__content--51d69']}`}>
                                            <span className={`${styled['styles__tabby-promo-snippet__text--93920']}`}>
                                                <span>
                                                    {product.payment_options}
                                                </span>

                                                {/* <span className={`styles__snippetLink--e917e ${styled['styles__tabby-promo-snippet__link--60af3']}`}>
                                                <span className='widget-learn-more'>
                                                    Learn more
                                                </span>
                                            </span> */}
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="ProductMeta__UnitPriceMeasurement" style={{ display: 'none' }}>
                            <div className="UnitPriceMeasurement Heading u-h6 Text--subdued">
                                <span className="UnitPriceMeasurement__Price"></span>
                                <span className="UnitPriceMeasurement__Separator">/ </span>
                                <span className="UnitPriceMeasurement__ReferenceValue"></span>
                                <span className="UnitPriceMeasurement__ReferenceUnit"></span>
                            </div>
                        </div>
                        {/* <p className='ProductMeta__TaxNotice Rte'>
                        <Link className='link link--accented'>
                            Shipping calculated
                        </Link> at checkout.
                    </p> */}
                    </div>
                    <form method="post" action="/cart/add" id="product_form_6663061635234" acceptCharset="UTF-8" className="ProductForm" encType="multipart/form-data">

                        <div className="ProductForm__Variants">
                            <div className="ProductForm__Option ProductForm__Option--labelled">
                                <span className="ProductForm__Label">Type:</span>
                                <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                    <li className="HorizontalList__Item">
                                        <input id="option-product-template-0-0" className="SizeSwatch__Radio" type="radio" name="option-0" defaultValue="EXTRAIT DE PARFUM" defaultChecked />
                                        <label htmlFor="option-product-template-0-0" className="SizeSwatch">EXTRAIT DE PARFUM</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="ProductForm__Option ProductForm__Option--labelled">
                                <span className="ProductForm__Label">Volume:</span>
                                <ul>
                                    <li className="HorizontalList__Item">
                                        <input id="option-product-template-1-0" className="SizeSwatch__Radio" type="radio" name="option-1" defaultValue="100 ML" defaultChecked data-option-position="2" />
                                        <label htmlFor="option-product-template-1-0" className="SizeSwatch">100 ML</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="ProductForm__Option ProductForm__Option--labelled">
                                <span className="ProductForm__Label">Orientation:</span>
                                <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                                    <li className="HorizontalList__Item">
                                        <input id="option-product-template-2-0" className="SizeSwatch__Radio" type="radio" name="option-2" defaultValue="Pour Homme" defaultChecked data-option-position="3" />
                                        <label htmlFor="option-product-template-2-0" className="SizeSwatch">Pour Homme</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="no-js ProductForm__Option">
                                <div className="Select Select--primary">
                                    <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                        <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeLinecap="square"></polyline>
                                    </svg>
                                    <select id="product-select-6663061635234" name="id" title="Variant">
                                        <option data-sku="SUPONLYIN001">EXTRAIT DE PARFUM / 100 ML / Pour Homme - Dhs. 180</option>
                                    </select>
                                </div>
                            </div>
                            <span className="ProductForm__Label">Quantity:</span>
                            <div className="ProductForm__QuantitySelector">
                                <div className="QuantitySelector QuantitySelector--large">
                                    <span className="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity" onClick={() => decrease()}>
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
                        </button>
                        <div data-shopify="payment-button" className="shopify-payment-button">
                            <div className="wallet-button-fade-in">
                                <button type="button" className="shopify-payment-button__button shopify-payment-button__button--unbranded custom-shopify-payment-button__button">Buy it now</button>
                            </div>
                        </div>
                        <input type="hidden" name="product-id" defaultValue="6663061635234" />
                        <input type="hidden" name="section-id" defaultValue="product-template" />
                        {

                            isAded ? (
                                <div className="swym-button-bar swym-wishlist-button-bar swym-inject">
                                    <div onClick={handleProduct} className="swym-btn-container swym-inject" data-position="default">
                                        <button className="swym-button swym-add-to-wishlist swym-inject swym-has-fave-count swym-btnlink swym-heart Button swym-loaded custom-swym-loaded"
                                            onClick={(event) => event.preventDefault()}
                                            aria-label="Add to Wishlist">
                                            <span className="swym-wishlist-cta" >Added to Wishlist</span>
                                        </button>
                                        <span className="swym-fave-count">{allProductsLength}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="swym-button-bar swym-wishlist-button-bar swym-inject">
                                    <div onClick={handleProduct} className="swym-btn-container swym-inject" data-position="default">
                                        <button className="swym-button swym-add-to-wishlist swym-inject swym-has-fave-count swym-btnlink swym-heart Button swym-loaded custom-swym-loaded"
                                            onClick={(event) => event.preventDefault()}
                                            aria-label="Add to Wishlist">
                                            <span className="swym-wishlist-cta" >Add to Wishlist</span>
                                        </button>
                                        <span className="swym-fave-count">{allProductsLength}</span>
                                    </div>
                                </div>
                            )
                        }

                    </form>
                    <div className="ProductMeta__Description">
                        <div className="Rte">
                            <p><span>Homme EDP 100 ML</span></p>
                            <p><span>Escape to another world with our most loved and dangerously addictive scent of all times! #CraftedbyAfnan</span></p>
                            <p><span>NEW LUXURY COLLECTION</span></p>
                            <p><strong>PERFUME NOTES</strong><br /></p>
                            <p>
                                <span><strong>Top Notes:</strong> Bergamot, Apple and Black Currant</span><br />
                                <span><strong>Middle Notes:</strong> Lavender, Patchouli and Oak Moss</span><br />
                                <span><strong>Base Notes:</strong> Saffron, Musk and Ambergris</span><br />
                            </p>

                        </div>
                        <div className="ProductMeta__ShareButtons hidden-pocket">
                            <span className="ProductMeta__ShareTitle Heading Text--subdued u-h7">Share</span>
                            <div className="ProductMeta__ShareList Text--subdued">
                                <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Facebook">
                                    <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                                        <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                    </svg>
                                </Link>
                                <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Twitter">
                                    <svg className="Icon Icon--twitter" role="presentation" viewBox="0 0 32 26">
                                    </svg>
                                </Link>
                                <Link className="ProductMeta__ShareItem" to="/" target="_blank" rel="noopener" aria-label="Pinterest">
                                    <svg className="Icon Icon--pinterest" role="presentation" viewBox="0 0 32 32">
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAside
