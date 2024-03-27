
import React, { useState } from 'react'
const Item = () => {
    
        const [isOpenPopup, setIsOpenPoup] = useState(false);
        const handlePopupOpen = () => {
            setIsOpenPoup(!isOpenPopup)
        }
    return (
        <>
            <header className="PageHeader">
                <div className="SectionHeader SectionHeader--center">
                    <h1 className="SectionHeader__Heading Heading u-h1">SOCIAL HUB</h1>
                </div>
            </header>
            <div className='PageContent Rte'>
                <div  id="curator-feed-default-layout">
                    <h2>Follow us on Instagram to check watches discounts, promotions and latest designs</h2>
                </div>
                <h2>Don't forget to follow us on <a href="https://www.instagram.com/afnanperfumes/">INSTAGRAM</a>
                </h2>
                <div id='curator-feed-default-feed-layout' className='crt-widget crt-no-touch crt-widget-theme-sydney crt-widget-waterfall crt-widget-branded'>
                    <div className='crt-feed-scroll'>
                        <div className='crt-feed'>
                            <div className='galcolumn' id='item0CvZcE' style={{ width: '25%', float: 'left', boxSizing: 'border-box' }}>
                                <div className='crt-post crt-post-has-image crt-post-has-text crt-post-instagram crt-post-has-video' style={{ zoom: '1', opacity: '1' }}>
                                    <div className='crt-post-c' >
                                        <div onClick={handlePopupOpen} className='crt-post-content'>
                                            <div className="crt-image crt-hitarea crt-post-content-image">
                                                <div className="crt-image-c crt-image-responsive" style={{ paddingBottom: '125%' }}>
                                                    <img
                                                        src="https://curator-assets.b-cdn.net/d2004e57-c6cf-42da-8ef2-a091a8cc1933/161283141.jpg?width=480&quality=75"
                                                        className="crt-post-image"
                                                        alt="Image posted by afnanperfumes to Instagram"
                                                        style={{ opacity: 1 }}
                                                    />
                                                </div>
                                                <span className="crt-play"><i className="crt-play-icon"></i></span>
                                                <div className="crt-image-carousel"><i className="crt-icon-image-carousel"></i></div>
                                                <video preload="none" playsInline loop muted>
                                                    <source src="https://curator-assets.b-cdn.net/d2004e57-c6cf-42da-8ef2-a091a8cc1933/161283141.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                            <div className="crt-post-header">
                                                <span className="crt-social-icon"><img src="/images/instagram.png" alt="" /></span>
                                                <div className="crt-post-fullname"><a href="https://www.instagram.com/afnanperfumes/" target="_blank">afnanperfumes</a></div>
                                            </div>
                                            <div className='crt-post-title'></div>
                                            <div className="crt-post-text">
                                                Tribute Blue & White – Fulfilling your quest for a scentful journey. <a href="https://www.instagram.com/explore/tags/CraftedByAfnan/" target="_blank">#CraftedByAfnan</a><br /><br /><span className='costumizet'>
                                                تريبيوت بلو ووايت – كل ما تحتاجونه لرحلة عطرة <br /><br />
                                                Product:</span> <a href="https://www.instagram.com/explore/tags/TributeBlue/" target="_blank">#TributeBlue</a> <a href="https://www.instagram.com/explore/tags/PourHomme/" target="_blank">#PourHomme</a> <a href="https://www.instagram.com/explore/tags/TributeWhite/" target="_blank">#TributeWhite</a> <a href="https://www.instagram.com/explore/tags/PourFemme/" target="_blank">#PourFemme</a> <br /><br />
                                                <a href="https://www.instagram.com/explore/tags/afnan/" target="_blank">#afnan</a> <a href="https://www.instagram.com/explore/tags/afnanperfumes/" target="_blank">#afnanperfumes</a> <a href="https://www.instagram.com/explore/tags/afnancollection/" target="_blank">#afnancollection</a> <a href="https://www.instagram.com/explore/tags/perfumecollection/" target="_blank">#perfumecollection</a> <a href="https://www.instagram.com/explore/tags/dubaiperfumes/" target="_blank">#dubaiperfumes</a> <a href="https://www.instagram.com/explore/tags/perfumes/" target="_blank">#perfumes</a> <a href="https://www.instagram.com/explore/tags/perfumeaddict/" target="_blank">#perfumeaddict</a> <a href="https://www.instagram.com/explore/tags/perfumelovers/" target="_blank">#perfumelovers</a> <a href="https://www.instagram.com/explore/tags/perfumery/" target="_blank">#perfumery</a> <a href="https://www.instagram.com/explore/tags/perfumeworld/" target="_blank">#perfumeworld</a> <a href="https://www.instagram.com/explore/tags/perfumeusa/" target="_blank">#perfumeusa</a> <a href="https://www.instagram.com/explore/tags/perfumeafrica/" target="_blank">#perfumeafrica</a> <a href="https://www.instagram.com/explore/tags/perfumerussia/" target="_blank">#perfumerussia</a> <a href="https://www.instagram.com/explore/tags/uae/" target="_blank">#uae</a> <a href="https://www.instagram.com/explore/tags/Dubai/" target="_blank">#Dubai</a>
                                            </div>
                                        </div>
                                        <div className="crt-comments-likes">
                                            <span className="crt-likes">32 <span>Likes</span></span>
                                            <span className="crt-sep"></span>
                                            <span className="crt-comments">2 <span>Comments</span></span>
                                        </div>
                                        <div className="crt-post-footer">
                                            <span className="crt-post-username" style={{ display: 'none' }}><a href="https://www.instagram.com/afnanperfumes/" target="_blank">@afnanperfumes</a></span>
                                            <span className="crt-post-date"><a href="https://www.instagram.com/p/CKk-uSMAUer/" target="_blank">28 Jan 2021</a></span>
                                            <div className="crt-post-share">
                                          
                                                <a className="crt-share-facebook icon-social" onClick={() => onShareFacebookClick()}> <img src="/images/facebook.png" alt="" /> </a>
                                                <a className="crt-share-twitter icon-social" onClick={() => onShareTwitterClick()}> <img src="/images/twitter.png" alt="" /> </a>
                                            </div>
                                        </div>
                                        <div className="crt-post-max-height-read-more">
                                            <a className="crt-post-read-more-button">Read more</a>
                                        </div>
                                    </div>
                                </div>                              
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
            {/* pop up content */}
            <div className="crt-popup-manager">
                <div className={`crt-popup-wrapper  ${isOpenPopup ? 'custom-animation-style crt-popup-wrapper-visible' : ''}`}>
                    <div tabIndex="0" className="crt-popup-wrapper-c">
                        <div className="crt-popup-underlay"></div>
                        <div className="crt-popup-container custom-crt-popup-container" style={{ animation: '0.5s ease 0s 1 normal none running crtFadeIn;' }}>
                            <div tabIndex="0" aria-label="Post details popup" className="crt-popup has-image has-video crt-has-read-more">
                                <a onClick={handlePopupOpen} aria-label="close popup" role="button" tabIndex="0" className="crt-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 920" width="15" height="15" className="crt-icon-cancel">
                                        <path transform="scale(1,-1) translate(0,-850)" d="M654 349l346-346-154-154-346 346-346-346-154 154 346 346-346 346 154 154 346-346 346 346 154-154z"></path>
                                    </svg>
                                </a>
                                <a aria-label="go to previous post" role="button" tabIndex="0" className="crt-previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 654 1000" fill="white" className="crt-icon-left-open">
                                        <path transform="scale(1,-1) translate(0,-850)" d="M308 349l346-346-154-154-500 500 500 500 154-154z"></path>
                                    </svg>
                                </a>
                                <a aria-label="go to next post" role="button" tabIndex="0" className="crt-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 654 1000" fill="white" className="crt-icon-right-open">
                                        <path transform="scale(1,-1) translate(0,-850)" d="M154 849l500-500-500-500-154 154 346 346-346 346z"></path>
                                    </svg>
                                </a>
                                <div className="crt-popup-left">
                                    <div className="crt-video has-video crt-has-video-youtube" style={{ display: 'block' }}>
                                        <div tabIndex="0" className="crt-video-container" style={{ position: 'relative' }}>
                                            <div className="crt-responsive-video fitvidsignore">
                                                <iframe id="ytplayer" src="https://www.youtube.com/embed/pfHIE7JPmC8?autoplay=0&rel=0&showinfo" frameBorder="0" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="crt-popup-right">
                                    <div className="crt-popup-header">
                                        <span role="link" tabIndex="0" aria-label="YouTube" className="crt-social-icon">
                                            <img src="/images/instagram.png" alt="" />
                                        </span>
                                        <img aria-label="Profile image for AFNAN Perfumes" tabIndex="0" src="https://yt3.ggpht.com/ytc/AOPolaTqRh6kOwdGqLqZc1uizby2T3dASGqV_AJq4lQK=s88-c-k-c0x00ffffff-no-rj" alt="Profile image for AFNAN Perfumes" className="crt-post-userimage" />
                                        <div className="crt-post-name">
                                            <span>AFNAN Perfumes</span><br />
                                            <a href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" target="_blank">@AFNAN Perfumes</a>
                                        </div>
                                    </div>
                                    <div className="crt-popup-text crt-post-has-text">
                                        <div className="crt-popup-text-container">
                                            <p className="crt-post-date undefined">
                                                <a href="https://www.youtube.com/watch?v=pfHIE7JPmC8" target="_blank" aria-hidden="false" tabIndex="0" className="crt-post-date-link">
                                                    3 Aug 2023
                                                </a>
                                            </p>
                                            <p className="crt-popup-text-title">Afnan Perfumes Marks a Momentous Morning at the UK Launch Event, Unveiling Highness Collection</p>
                                            <div className="crt-post-text">
                                                Afnan Perfumes, the esteemed international fragrance brand with a rich heritage in perfumery, hosted an enchanting morning at the highly anticipated UK Launch Event. The event, held on the 27th of July at the exclusive Pavilion Club, was met with resounding success as the brand introduced its exclusive portfolio and showcased the opulent Highness Collection to an esteemed audience.
                                           
                                            </div>
                                        </div>
                                    </div>
                                    <div className="crt-popup-read-more">
                                        <a href="https://www.youtube.com/watch?v=pfHIE7JPmC8" target="_blank" className="crt-button">Go to original post</a>
                                    </div>
                                    <div className="crt-popup-footer">
                                        <div tabIndex="0" className="crt-popup-stats">
                                            <span>0</span> Likes <i className="sep"></i> <span>0</span> Comments
                                        </div>
                                        <div className="crt-post-share">
                                            <span className="crt-share-hint"></span>
                                            <a role="link" className="crt-share-button">
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z" fill="currentColor"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <div className="crt-popup-share-icon-container">
                                                <p>Share</p>
                                                <div className="crt-popup-share-icon-container-icons">
                                                    <a role="link" tabIndex="0" aria-label="Share to facebook" className="crt-share-facebook">
                                                        <svg aria-label="Facebook icon" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="crt-icon-facebook">
                                                            <path d="M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                    <a role="link" tabIndex="0" aria-label="Share to twitter" className="crt-share-twitter">
                                                        <svg aria-label="Twitter icon" width="24" height="21" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="crt-icon-twitter">
                                                            <path d="M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
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

export default Item
