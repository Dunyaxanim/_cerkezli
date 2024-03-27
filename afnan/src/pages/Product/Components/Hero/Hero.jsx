import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config';
import MainHero from '../MainHero/MainHero';

import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
const
    Hero = ({ slug, id }) => {
        const [layoutMode, setLayoutMode] = useState(4);
        const [openSort, setOpenSort] = useState(false);
        const [openFilter, setOpenFilter] = useState(false);

        const changeLayoutMode = (count) => {
            setLayoutMode(count)
        }
        const handleOpenSort = () => {
            setOpenSort(prev => !prev)
        }
        const handleOpenFilter = () => {
            setOpenFilter(prev => !prev)
        }
        const [products, setProducts] = useState([]);
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    let apiUrl = `${config.development.api}/products`;
                    if (id !== undefined) {
                        apiUrl += `/${id}`;
                    }
                    apiUrl += `?lang=${await storedLanguage()}`;

                    const response = await axios.get(apiUrl);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Data gelmedi! ', error);
                }
            };
            fetchProducts();
        }, [id]);

        const handleSelectValue = (value) => {
            let sortedProducts;

            if (value === "asc") {
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
            } else if (value === "desc") {
                sortedProducts = [...products].sort((a, b) => b.price - a.price);
            } else if (value == "old-new") {
                sortedProducts = [...products].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            } else if (value == "new-old") {
                sortedProducts = [...products].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            } else if (value == "a-z") {
                sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
            } else if (value == "z-a") {
                sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
            } else {
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
            }
            setProducts(sortedProducts);
        };

        const itemsPerPage = 4;
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const currentproducts = products.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(products.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % products.length;

            setItemOffset(newOffset);
        };














        return (
            <div className={`shopify-section shopify-section--bordered ${id != undefined ? 'custom-shopify-section' : ''}`} id='shopify-section-collection-template'>
                <section className='' data-section-id="collection-template" data-section-type="collection">
                    <div className="FlexboxIeFix">
                        {id !== undefined && <MainHero id={id} />}
                    </div>
                    <div id="collection-filter-drawer" className="CollectionFilters Drawer Drawer--secondary Drawer--fromRight" aria-hidden={!openFilter} style={{ maxHeight: '738px' }}>
                        <header className="Drawer__Header Drawer__Header--bordered Drawer__Header--center Drawer__Container">
                            <span className="Drawer__Title Heading u-h4">Filters</span>
                            <button className="Drawer__Close Icon-Wrapper--clickable" data-action="close-drawer" data-drawer-id="collection-filter-drawer" aria-label="Close navigation" onClick={handleOpenFilter}>
                                <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                </svg>
                            </button>
                        </header>

                        <div className="Drawer__Content">
                            <div className="Drawer__Main" data-scrollable="">
                                <div className="Collapsible Collapsible--padded Collapsible--autoExpand">
                                    <button type="button" className="Collapsible__Button Heading u-h6" data-action="toggle-collapsible" aria-expanded="false">Filters<span className="Collapsible__Plus"></span></button>
                                    <div className="Collapsible__Inner">
                                        <div className="Collapsible__Content">
                                            <ul className="Linklist">
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="100ml" data-action="toggle-tag">100ML</button>
                                                </li>
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="9am9pm" data-action="toggle-tag">9AM9PM</button>
                                                </li>
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="edp" data-action="toggle-tag">EDP</button>
                                                </li>
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="gift" data-action="toggle-tag">GIFT</button>
                                                </li>
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="must-have" data-action="toggle-tag">MUST HAVE</button>
                                                </li>
                                                <li className="Linklist__Item">
                                                    <button type="button" className="Link Link--primary Text--subdued" data-tag="smart-shopping" data-action="toggle-tag">SMART SHOPPING</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Drawer__Footer Drawer__Footer--padded" data-drawer-animated-bottom="">
                                <div className="ButtonGroup">
                                    <button type="button" className="ButtonGroup__Item Button Button--secondary" data-action="reset-tags" style={{ display: 'none' }}>Reset</button>
                                    <button type="button" className="ButtonGroup__Item ButtonGroup__Item--expand Button Button--primary" data-action="apply-tags">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='CollectionMain'>

                        <div id="collection-sort-popover" className={`Popover Popover_custom ${openSort ? 'Popover--alignRight Popover--positionBottom open-before' : 'hide-before'}`} aria-hidden={!openSort}>
                            <header className="Popover__Header">
                                <button className="Popover__Close Icon-Wrapper--clickable" data-action="close-popover" onClick={handleOpenSort}>
                                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                                <span className="Popover__Title Heading u-h4">Sort</span>
                            </header>

                            <div className="Popover__Content custom-Popover__Content">
                                <div className="Popover__ValueList" data-scrollable>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="manual" data-action="select-value" onClick={() => handleSelectValue('manual')}>
                                        Featured
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="best-selling" data-action="select-value" onClick={() => handleSelectValue('best-selling')}>
                                        Best selling
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="title-ascending" data-action="select-value" onClick={() => handleSelectValue('a-z')}>
                                        Alphabetically, A-Z
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="title-descending" data-action="select-value" onClick={() => handleSelectValue('z-a')}>
                                        Alphabetically, Z-A
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="price-ascending" data-action="select-value" onClick={() => handleSelectValue('asc')}>
                                        Price, low to high
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="price-descending" data-action="select-value" onClick={() => handleSelectValue('desc')}>
                                        Price, high to low
                                    </button>
                                    <button className="Popover__Value Heading Link Link--primary u-h6" data-value="created-ascending" data-action="select-value" onClick={() => handleSelectValue('old-new')}>
                                        Date, old to new
                                    </button>
                                    <button className="Popover__Value is-selected Heading Link Link--primary u-h6" data-value="created-descending" data-action="select-value" onClick={() => handleSelectValue('new-old')}>
                                        Date, new to old
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='CollectionToolbar CollectionToolbar--top CollectionToolbar--reverse'>
                            <div className="CollectionToolbar__Group">
                                <button className="CollectionToolbar__Item CollectionToolbar__Item--filter Heading Text--subdued u-h6 hidden-lap-and-up" data-action="open-drawer" data-drawer-id="collection-filter-drawer" aria-label="Show filters" onClick={() => handleOpenFilter()}>
                                    Filter
                                </button>
                                <button className="CollectionToolbar__Item CollectionToolbar__Item--sort Heading Text--subdued u-h6" aria-label="Show sort by" aria-haspopup="true" aria-expanded="false" aria-controls="collection-sort-popover" onClick={handleOpenSort}>
                                    Sort
                                    <svg className="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                                        <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div className="CollectionToolbar__Item CollectionToolbar__Item--layout">
                                <div className="CollectionToolbar__LayoutSwitch hidden-tablet-and-up">
                                    <button aria-label="Show one product per row" className={`CollectionToolbar__LayoutType ${layoutMode == 1 ? 'is-active' : ''}`} data-action="change-layout-mode" data-grid-type="mobile" data-count="1" onClick={() => changeLayoutMode(1)} >
                                        <svg className="Icon Icon--wall-1" role="presentation" viewBox="0 0 36 36">
                                            <rect fill="currentColor" width="36" height="36"></rect>
                                        </svg>
                                    </button>
                                    <button aria-label="Show two products per row" className={`CollectionToolbar__LayoutType ${layoutMode == 2 ? 'is-active' : ''}`} data-action="change-layout-mode" data-grid-type="mobile" data-count="2" onClick={() => changeLayoutMode(2)}>
                                        <svg className="Icon Icon--wall-2" role="presentation" viewBox="0 0 36 36">
                                            <path fill="currentColor" d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="CollectionToolbar__LayoutSwitch hidden-phone">
                                    <button aria-label="Show two products per row" className={`CollectionToolbar__LayoutType ${layoutMode == 2 ? 'is-active' : ''}`} data-action="change-layout-mode" data-grid-type="desktop" data-count="2" onClick={() => changeLayoutMode(2)}>
                                        <svg className="Icon Icon--wall-2" role="presentation" viewBox="0 0 36 36">
                                            <path fill="currentColor" d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z"></path>
                                        </svg>
                                    </button>
                                    <button aria-label="Show four products per row" className={`CollectionToolbar__LayoutType ${layoutMode == 4 ? 'is-active' : ''}`} data-action="change-layout-mode" data-grid-type="desktop" data-count="4" onClick={() => changeLayoutMode(4)}>
                                        <svg className="Icon Icon--wall-4" role="presentation" viewBox="0 0 36 36">
                                            <path fill="currentColor" d="M28 36v-8h8v8h-8zm0-22h8v8h-8v-8zm0-14h8v8h-8V0zM14 28h8v8h-8v-8zm0-14h8v8h-8v-8zm0-14h8v8h-8V0zM0 28h8v8H0v-8zm0-14h8v8H0v-8zM0 0h8v8H0V0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='CollectionInner'>
                            <div className='CollectionInner__Sidebar CollectionInner__Sidebar--withTopToolbar hidden-pocket'>
                                <div className='CollectionFilters'>
                                    <div className='Collapsible Collapsible--padded Collapsible--autoExpand'>
                                        <button type="button" className='Collapsible__Button Heading u-h6' aria-expanded='false'>
                                            Filters
                                            <span className='Collapsible__Plus'></span>
                                        </button>
                                        <div className="Collapsible__Inner">
                                            <div className="Collapsible__Content">
                                                <ul className="Linklist">
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="100ml" data-action="toggle-tag">100ML</button>
                                                    </li>
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="9am9pm" data-action="toggle-tag">9AM9PM</button>
                                                    </li>
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="edp" data-action="toggle-tag">EDP</button>
                                                    </li>
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="gift" data-action="toggle-tag">GIFT</button>
                                                    </li>
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="must-have" data-action="toggle-tag">MUST HAVE</button>
                                                    </li>
                                                    <li className="Linklist__Item">
                                                        <button type="button" className="Link Link--primary Text--subdued" data-tag="smart-shopping" data-action="toggle-tag">SMART SHOPPING</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button type="button" className="Button Button--secondary custom-reset-button-none" data-action="reset-tags">Reset</button> */}
                            </div>
                            <div className='CollectionInner__Products'>
                                <div className='ProductListWrapper'>
                                    <div className='ProductList ProductList--grid  Grid'>
                                        {
                                            currentproducts.map((product, index) => (
                                                <div className={`${layoutMode === 4 ? 'Grid__Cell 1/2--phone 1/4--desk 1/3--tablet-and-up' : layoutMode === 1 ? 'Grid__Cell 1/1--phone 1/2--desk 1/2--tablet-and-up' : 'Grid__Cell 1/2--phone 1/2--desk 1/2--tablet-and-up'}`} key={index}>
                                                    <div className='ProductItem ProductItem-product-custom'>
                                                        <div className='ProductItem__Wrapper'>
                                                            <Link to={`/detail/${product.id}`} className="ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage">
                                                                <div className='AspectRatio AspectRatio--square AspectRatio--square-custom'>
                                                                    <img src={`${config.development.url}/${product.img}`} alt={product.title} className='ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded' />
                                                                    <img className='ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded' src={`${config.development.url}/${product.img_hover}`} alt={product.title} />
                                                                </div>
                                                            </Link>
                                                            <div className="ProductItem__Info ProductItem__Info--center  ProductItem__Info--center-custom">
                                                                <h2 className="ProductItem__Title Heading">
                                                                    <Link to={`/detail/${product.id}`}>{product.text}</Link>
                                                                </h2>
                                                                <div className="ProductItem__PriceList ProductItem__PriceList--showOnHover Heading">
                                                                    <span className="ProductItem__Price Price Text--subdued">
                                                                        <span className="money">DSH {product.price}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))

                                        }
                                    </div>
                                </div>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null}
                                    containerClassName="Pagination Text--subdued custom-container-classname"
                                    pageLinkClassName="Pagination__NavItem Link Link--primary"
                                    previousLinkClassName='Pagination__NavItem Link Link--primary'

                                    nextClassName="Pagination__NavItem Link Link--primary"
                                    activeClassName="is-active is-active-curent-page"
                                    disabledClassName="disabled"
                                />
                                {/* <div className="Pagination Text--subdued">
                                    <div className="Pagination__Nav">
                                        <span className="Pagination__NavItem is-active">1</span>
                                        <a href="/collections/must-have?page=2" className="Pagination__NavItem Link Link--primary" title="Navigate to page 2">2</a>
                                        <a href="/collections/must-have?page=3" className="Pagination__NavItem Link Link--primary" title="Navigate to page 3">3</a>
                                        <a href="/collections/must-have?page=2" className="Pagination__NavItem Link Link--primary" rel="next" title="Next page">
                                            <svg className="Icon Icon--select-arrow-right" role="presentation" viewBox="0 0 11 18">
                                                <path d="M1.5 1.5l8 7.5-8 7.5" strokeWidth="2" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Hero
