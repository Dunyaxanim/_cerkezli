import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='shopify-section shopify-section--footer'>
            <footer id='section-footer' data-section-id='footer' className='Footer' role='contentinfo'>
                <div className='Container'>
                    <div className='Footer__Inner'>
                        <div className='Footer__Block Footer__Block--newsletter'>
                            <h2 className='Footer__Title Heading u-h6'>Newsletter</h2>
                            <div className='Footer__Content Rte'>
                                <p>
                                    Subscribe to receive updates, access to exclusive deals, and more.
                                </p>
                            </div>
                            <form method="post" action='/' id='footer-newsletter' acceptCharset='UTF-8' className='Footer__Newsletter Form'>
                                <input type="email" name="email" id="" className='Form__Input' aria-label='Enter your email address' placeholder='Enter your email address' required />
                                <button className='Form__Submit Button Button--primary'>Subscribe</button>
                            </form>
                        </div>
                        <div className="Footer__Block Footer__Block--links">
                            <h2 className="Footer__Title Heading u-h6">FIND OUT MORE</h2>
                            <ul className="Linklist">
                                <li className="Linklist__Item">
                                    <Link to="about" className="Link Link--primary">About Us</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/contact" className="Link Link--primary">Contact Us</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/stores" className="Link Link--primary">Our Stores</Link>
                                </li>
                                {/* <li className="Linklist__Item">
                                    <Link to="/pages/tabby-buy-now-pay-later" className="Link Link--primary">TABBY - BUY NOW PAY LATER</Link>
                                </li> */}
                                <li className="Linklist__Item">
                                    <Link to="/search" className="Link Link--primary">Search</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__Block Footer__Block--text">
                            <h2 className="Footer__Title Heading u-h6">FOLLOW US</h2>
                            <ul className="Footer__Social HorizontalList HorizontalList--spacingLoose">
                                <li className="HorizontalList__Item">
                                    <Link to="/" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Facebook">
                                        <span className="Icon-Wrapper--clickable">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li className="HorizontalList__Item">
                                    <Link to="/" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Instagram">
                                        <span className="Icon-Wrapper--clickable">
                                            <i className="fa-brands fa-instagram"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li className="HorizontalList__Item">
                                    <Link to="/" className="Link Link--primary" target="_blank" rel="noopener" aria-label="YouTube">
                                        <span className="Icon-Wrapper--clickable">
                                            <i className="fa-brands fa-youtube"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__Block Footer__Block--links">
                            <h2 className="Footer__Title Heading u-h6">Main menu</h2>
                            <ul className="Linklist">
                                <li className="Linklist__Item">
                                    <Link to="/collection" className="Link Link--primary">CATALOG</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/collection" className="Link Link--primary">COLLECTIONS</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/collection" className="Link Link--primary">SMART SHOPPING</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/videos" className="Link Link--primary">VIDEOS</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/social" className="Link Link--primary">SOCIAL HUB</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/blog" className="Link Link--primary">BLOG</Link>
                                </li>
                                <li className="Linklist__Item">
                                    <Link to="/distributors" className="Link Link--primary">DISTRIBUTORS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Footer__Aside'>
                        <div className='Footer__Copyright'>
                            <div className='Footer__StoreName Heading u-h7 Link Link--secondary'>
                                © Afnan Perfumes
                            </div>
                            <p className='Footer__ThemeAuthor'></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
