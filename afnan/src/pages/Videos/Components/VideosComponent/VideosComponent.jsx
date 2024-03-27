import React, { useState } from 'react'
const VideosComponent = () => {
    const [isOpenPopup, setIsOpenPoup] = useState(false);
    const handlePopupOpen = () => {
        setIsOpenPoup(!isOpenPopup)
    }
    return (
        <>
            <header className="PageHeader">
                <div className="SectionHeader SectionHeader--center">
                    <h1 className="SectionHeader__Heading Heading u-h1">VIDEOS</h1>
                </div>
            </header>
            <div className='PageContent PageContent--narrow Rte'>
                <div id='curator-feed-default-feed-layout' className='crt-widget crt-touch crt-widget-theme-sydney crt-widget-waterfall crt-widget-branded' dir='ltr'>
                    <div className='crt-viewport-tracker'></div>
                    <div className='crt-feed-scroll'>
                        <div className='crt-feed' aria-label='There are 17 posts in the feed' tabIndex={0} role='feed'>
                            <div className='crt-col-0 custom-videos-postition'>
                                <article onClick={handlePopupOpen} className='crt-post crt-post-has-image crt-post-has-text crt-post-has-video crt-post-youtube custom-artice-style-videos'
                                    role='artice'
                                    aria-label='Post 1, YouTube post by AFNAN Perfumes Afnan Perfumes, the esteemed international fragrance brand with a rich heritage in perfumery, hosted an enchanting morning at the highly press enter to read more'>
                                    <div className='crt-post-c crt-post-border'>
                                        <div className='crt-post-content'>
                                            <div className='crt-image crt-hitarea crt-post-content-image'>
                                                <div className='crt-image-c'>
                                                    <span className='crt-play'>
                                                        <i className='crt-play-icon'></i>
                                                    </span>
                                                    <img className='crt-post-image custom-img-opasity' src="/images/video-img-1.jpg" alt="Image posted by AFNAN Perfumes to youtube" tabIndex={0} />
                                                </div>
                                                <div className='crt-video-container'>
                                                    <span tabIndex="0" aria-label="play video" role="button" className="crt-play"><i className="crt-play-icon"></i></span>
                                                    <video preload="none" playsInline="" aria-label="video" loop="" poster="https://i.ytimg.com/vi/pfHIE7JPmC8/mqdefault.jpg">
                                                        <source src="https://www.youtube.com/embed/pfHIE7JPmC8" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="crt-post-header">
                                            <span role="link" tabIndex="0" aria-label="YouTube" className="crt-social-icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 704" className="crt-icon-youtube custm-icon-size">
                                                    <path fill="#ff0000" transform="scale(1,-1) translate(0,-704)" d="M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"></path>
                                                </svg>
                                            </span>
                                            <div className="crt-post-fullname">
                                                <a className='custom-share-button' href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" target="_blank" rel="noopener noreferrer">
                                                    AFNAN Perfumes
                                                </a>
                                            </div>
                                            <div className="crt-post-title">
                                                Afnan Perfumes Marks a Momentous Morning at the UK Launch Event, Unveiling Highness Collection
                                            </div>
                                        </div>
                                        <div className="crt-post-text">
                                            <p>
                                                Afnan Perfumes, the esteemed international fragrance brand with a rich heritage in perfumery, hosted an enchanting morning at the highly anticipated UK Launch Event. The event, held on the 27th of July at the exclusive Pavilion Club, was met with resounding success as the brand introduced its exclusive portfolio and showcased the opulent Highness Collection to an esteemed audience.
                                            </p>
                                            <p>
                                                Since its inception in 2007, Afnan Perfumes has been dedicated to crafting premier perfumes in the UAE, exuding a commitment to excellence that has garnered the brand's international recognition and admiration. With remarkable growth over the years, the brand has fostered an organic global presence, expanding into markets that were once beyond imagination. The UK Launch Event served as the perfect platform for Afnan Perfumes to exhibit its exclusive fragrance portfolio to the local perfume connoisseurs.
                                            </p>
                                            <p>
                                                The UK market, in particular, holds a special place in the brand's heart, with an enthusiastic and celebrated following. Commencing the international roadshow in the UK was a testament to the unwavering support Afnan Perfumes has received from its global community.
                                            </p>
                                            <p>
                                                "We are thrilled and honoured by the overwhelming response to the Afnan Perfumes UK Launch Event," said Imran Fazlani, Founder, Managing Director and Nose of Afnan Perfumes.
                                            </p>
                                            <p>
                                                "The event marks a significant milestone in our journey, and we are deeply grateful for the tremendous support from our local and global community. The UK market has embraced us with open arms, and we are delighted to present our luxurious Highness Collection to our esteemed audience. We look forward to celebrating many more unforgettable moments with our UK community."
                                            </p>
                                            <p>
                                                The event's highlight was the grand introduction of the Highness Collection, Afnan Perfumes' most luxurious range of fragrances to date. Representing one of the brand's cherished niche creations, Highness promises to elevate Afnan Perfumes to new heights in the luxury fragrance scene. At the UK Launch Event, guests had the exclusive privilege of being the first to experience the Highness Collection's opulent range of scents. Each attendee was delighted to receive a special gift from this extraordinary collection as a gesture of appreciation for their presence and support.
                                            </p>
                                            <p>
                                                Afnan Perfumes is available in the UK at DXB Perfumes, in both online and in-store retails, making it easier than ever for fragrance enthusiasts to experience the brand's exquisite offerings.
                                            </p>
                                            <p>
                                                <strong>About Afnan Perfumes:</strong> Afnan Perfumes, founded in 2007, is an international fragrance brand known for its premier perfumes and exclusive bottle designs. With a focus on excellence and a passion for the art of perfumery, Afnan Perfumes has gained widespread recognition globally.
                                            </p>
                                            <p>
                                                Led by Imran Fazlani, the locally-made and internationally-sold brand built its product portfolio to share a connection to different life experiences and develop the curiosity and desire of consumers looking for an exotic feel of mixed ethnicities.
                                            </p>
                                            <p>
                                                <strong>About DXB Perfumes (Local current distributor for Afnan Perfumes):</strong> Experience the world of luxury and glamour with DXB Perfume, Europe's premier destination for exquisite Oriental fragrances. From the finest eau de parfum and parfum de extrait to concentrated perfume oils and deodorants, we offer a wide selection of the most sought-after Middle Eastern brands at an exceptional value.
                                            </p>
                                            <p>
                                                Since our founding in 2015, we have been dedicated to providing our discerning customers with unparalleled expertise and customer service. Our passion for perfume and commitment to excellence have made us the go-to destination for all your fragrance needs. Indulge in the finest scents and elevate your senses with DXB Perfume.
                                            </p>
                                            <p>
                                                <strong>Highness Collection:</strong> Highness Collection contains seven different perfumes for women and men — Highness V, White, IX, X, VI, III and IV. Each perfume is unique, with its own story and distinctive scent. From light floral notes to deep masculine musk scents, the scent is well-crafted with an attractive design packaging that provides an elegant and sensorial experience.
                                            </p>
                                            <p>
                                                For more information, please visit <a href="https://www.afnan.com" target="_blank" rel="noopener noreferrer">https://www.afnan.com</a>
                                            </p>
                                        </div>
                                        <div className="crt-post-footer">
                                            {/* <img
                                                aria-label="Profile image for AFNAN Perfumes"
                                                tabIndex="0"
                                                src="https://yt3.ggpht.com/ytc/AOPolaTqRh6kOwdGqLqZc1uizby2T3dASGqV_AJq4lQK=s88-c-k-c0x00ffffff-no-rj"
                                                alt="Profile image for AFNAN Perfumes"
                                                className="crt-post-userimage"
                                            /> */}
                                            <span className="crt-post-username" style={{ padding: '0px 5px' }}>
                                                <a
                                                    href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                >
                                                    @AFNAN Perfumes
                                                </a>
                                            </span>
                                            <span className="crt-post-date">
                                                <a
                                                    href="https://www.youtube.com/watch?v=pfHIE7JPmC8"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                    className="crt-post-date-link custom-share-button"
                                                >
                                                    3 Aug 2023
                                                </a>
                                            </span>
                                            <div className="crt-post-share">
                                                <span className="crt-share-hint"></span>
                                                <a role="link" className="crt-share-button">
                                                    <svg className='custom-share-button' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="crt-popup-share-icon-container">
                                                    <p>Share</p>
                                                    <div className="crt-popup-share-icon-container-icons">
                                                        <a role="link" tabIndex="0" aria-label="Share to facebook" className="crt-share-facebook">
                                                            <svg
                                                                aria-label="Facebook icon"
                                                                width="9"
                                                                height="17"
                                                                viewBox="0 0 9 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-facebook"
                                                            >
                                                                <path
                                                                    d="M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a role="link" tabIndex="0" aria-label="Share to twitter" className="crt-share-twitter">
                                                            <svg
                                                                aria-label="Twitter icon"
                                                                width="24"
                                                                height="21"
                                                                viewBox="0 0 26 23"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-twitter"
                                                            >
                                                                <path
                                                                    d="M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='crt-post-read-more'></div>
                                        <div className='crt-post-max-height-read-more'></div>
                                    </div>
                                    <span className='hidden-for-aria-label' role='status' tabIndex={0} aria-label='End of post.'></span>
                                </article>
                                <article aria-label='Post 6, YouTube post by AFNAN Perfumes ' role='article' className='crt-post crt-post-has-image crt-post-has-video crt-post-youtube custom-artice-style-videos'>
                                    <div className='crt-post-c crt-post-border'>
                                        <div className="crt-post-content">
                                            <div className="crt-image crt-hitarea crt-post-content-image">
                                                <div className="crt-image-c">
                                                    <span className="crt-play">
                                                        <i className="crt-play-icon"></i>
                                                    </span>
                                                    <img
                                                        src="https://i.ytimg.com/vi/f34AvvjrXko/mqdefault.jpg"
                                                        tabIndex="0"
                                                        alt="Image posted by AFNAN Perfumes to youtube"
                                                        className="crt-post-image"
                                                        style={{ opacity: 1 }}
                                                    />
                                                </div>
                                                <div className="crt-video-container">
                                                    <span tabIndex="0" aria-label="play video" role="button" className="crt-play">
                                                        <i className="crt-play-icon"></i>
                                                    </span>
                                                    <video
                                                        preload="none"
                                                        playsInline
                                                        aria-label="video"
                                                        loop
                                                        poster="https://i.ytimg.com/vi/f34AvvjrXko/mqdefault.jpg"
                                                    >
                                                        <source src="https://www.youtube.com/embed/f34AvvjrXko" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="crt-post-header">
                                            <span role="link" tabIndex="0" aria-label="YouTube" className="crt-social-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 704" className="crt-icon-youtube custm-icon-size">
                                                    <path fill="#ff0000" transform="scale(1,-1) translate(0,-704)" d="M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"></path>
                                                </svg>
                                            </span>
                                            <div className="crt-post-fullname">
                                                <a href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" target="_blank" rel="noopener noreferrer">
                                                    AFNAN Perfumes
                                                </a>
                                            </div>
                                            <div className="crt-post-title">Patchouli and Tobacco - Launch 2022</div>
                                        </div>
                                        <div className="crt-post-text">
                                        </div>
                                        <div className="crt-post-footer">
                                            {/* <img
                                                aria-label="Profile image for AFNAN Perfumes"
                                                tabIndex="0"
                                                src="https://yt3.ggpht.com/ytc/AOPolaTqRh6kOwdGqLqZc1uizby2T3dASGqV_AJq4lQK=s88-c-k-c0x00ffffff-no-rj"
                                                alt="Profile image for AFNAN Perfumes"
                                                className="crt-post-userimage"
                                            /> */}
                                            <span className="crt-post-username" style={{ padding: '0px 5px' }}>
                                                <a
                                                    href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                >
                                                    @AFNAN Perfumes
                                                </a>
                                            </span>
                                            <span className="crt-post-date">
                                                <a
                                                    href="https://www.youtube.com/watch?v=pfHIE7JPmC8"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                    className="crt-post-date-link custom-share-button"
                                                >
                                                    3 Aug 2023
                                                </a>
                                            </span>
                                            <div className="crt-post-share">
                                                <span className="crt-share-hint"></span>
                                                <a role="link" className="crt-share-button">
                                                    <svg className='custom-share-button' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="crt-popup-share-icon-container">
                                                    <p>Share</p>
                                                    <div className="crt-popup-share-icon-container-icons">
                                                        <a role="link" tabIndex="0" aria-label="Share to facebook" className="crt-share-facebook">
                                                            <svg
                                                                aria-label="Facebook icon"
                                                                width="9"
                                                                height="17"
                                                                viewBox="0 0 9 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-facebook"
                                                            >
                                                                <path
                                                                    d="M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a role="link" tabIndex="0" aria-label="Share to twitter" className="crt-share-twitter">
                                                            <svg
                                                                aria-label="Twitter icon"
                                                                width="24"
                                                                height="21"
                                                                viewBox="0 0 26 23"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-twitter"
                                                            >
                                                                <path
                                                                    d="M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='crt-post-read-more'></div>
                                        <div className='crt-post-max-height-read-more'></div>
                                    </div>
                                    <span tabIndex={0} aria-label='End of post.' className='hidden-for-aria-label'></span>
                                </article>
                            </div>
                            <div className='crt-col-1 custom-videos-postition'>
                                <article className='crt-post crt-post-has-image crt-post-has-text crt-post-has-video crt-post-youtube custom-artice-style-videos'
                                    role='artice'
                                    aria-label='Post 1, YouTube post by AFNAN Perfumes Afnan Perfumes, the esteemed international fragrance brand with a rich heritage in perfumery, hosted an enchanting morning at the highly press enter to read more'>
                                    <div className='crt-post-c crt-post-border'>
                                        <div className='crt-post-content'>
                                            <div className='crt-image crt-hitarea crt-post-content-image'>
                                                <div className='crt-image-c'>
                                                    <span className='crt-play'>
                                                        <i className='crt-play-icon'></i>
                                                    </span>
                                                    <img className='crt-post-image custom-img-opasity' src="/images/video-img-1.jpg" alt="Image posted by AFNAN Perfumes to youtube" tabIndex={0} />
                                                </div>
                                                <div className='crt-video-container'>
                                                    <span tabIndex="0" aria-label="play video" role="button" className="crt-play"><i className="crt-play-icon"></i></span>
                                                    <video preload="none" playsInline="" aria-label="video" loop="" poster="https://i.ytimg.com/vi/pfHIE7JPmC8/mqdefault.jpg">
                                                        <source src="https://www.youtube.com/embed/pfHIE7JPmC8" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="crt-post-header">
                                            <span role="link" tabIndex="0" aria-label="YouTube" className="crt-social-icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 704" className="crt-icon-youtube custm-icon-size">
                                                    <path fill="#ff0000" transform="scale(1,-1) translate(0,-704)" d="M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"></path>
                                                </svg>
                                            </span>
                                            <div className="crt-post-fullname">
                                                <a className='custom-share-button' href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" target="_blank" rel="noopener noreferrer">
                                                    AFNAN Perfumes
                                                </a>
                                            </div>
                                            <div className="crt-post-title">
                                                Afnan Perfumes Marks a Momentous Morning at the UK Launch Event, Unveiling Highness Collection
                                            </div>
                                        </div>
                                        <div className="crt-post-text">
                                            <p>
                                                Afnan Perfumes, the esteemed international fragrance brand with a rich heritage in perfumery, hosted an enchanting morning at the highly anticipated UK Launch Event. The event, held on the 27th of July at the exclusive Pavilion Club, was met with resounding success as the brand introduced its exclusive portfolio and showcased the opulent Highness Collection to an esteemed audience.
                                            </p>
                                            <p>
                                                Since its inception in 2007, Afnan Perfumes has been dedicated to crafting premier perfumes in the UAE, exuding a commitment to excellence that has garnered the brand's international recognition and admiration. With remarkable growth over the years, the brand has fostered an organic global presence, expanding into markets that were once beyond imagination. The UK Launch Event served as the perfect platform for Afnan Perfumes to exhibit its exclusive fragrance portfolio to the local perfume connoisseurs.
                                            </p>
                                            <p>
                                                The UK market, in particular, holds a special place in the brand's heart, with an enthusiastic and celebrated following. Commencing the international roadshow in the UK was a testament to the unwavering support Afnan Perfumes has received from its global community.
                                            </p>
                                            <p>
                                                "We are thrilled and honoured by the overwhelming response to the Afnan Perfumes UK Launch Event," said Imran Fazlani, Founder, Managing Director and Nose of Afnan Perfumes.
                                            </p>
                                            <p>
                                                "The event marks a significant milestone in our journey, and we are deeply grateful for the tremendous support from our local and global community. The UK market has embraced us with open arms, and we are delighted to present our luxurious Highness Collection to our esteemed audience. We look forward to celebrating many more unforgettable moments with our UK community."
                                            </p>
                                            <p>
                                                The event's highlight was the grand introduction of the Highness Collection, Afnan Perfumes' most luxurious range of fragrances to date. Representing one of the brand's cherished niche creations, Highness promises to elevate Afnan Perfumes to new heights in the luxury fragrance scene. At the UK Launch Event, guests had the exclusive privilege of being the first to experience the Highness Collection's opulent range of scents. Each attendee was delighted to receive a special gift from this extraordinary collection as a gesture of appreciation for their presence and support.
                                            </p>
                                        </div>
                                        <div className="crt-post-footer">
                                            {/* <img
                                                aria-label="Profile image for AFNAN Perfumes"
                                                tabIndex="0"
                                                src="https://yt3.ggpht.com/ytc/AOPolaTqRh6kOwdGqLqZc1uizby2T3dASGqV_AJq4lQK=s88-c-k-c0x00ffffff-no-rj"
                                                alt="Profile image for AFNAN Perfumes"
                                                className="crt-post-userimage"
                                            /> */}
                                            <span className="crt-post-username" style={{ padding: '0px 5px' }}>
                                                <a
                                                    href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                >
                                                    @AFNAN Perfumes
                                                </a>
                                            </span>
                                            <span className="crt-post-date">
                                                <a
                                                    href="https://www.youtube.com/watch?v=pfHIE7JPmC8"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                    className="crt-post-date-link custom-share-button"
                                                >
                                                    3 Aug 2023
                                                </a>
                                            </span>
                                            <div className="crt-post-share">
                                                <span className="crt-share-hint"></span>
                                                <a role="link" className="crt-share-button">
                                                    <svg className='custom-share-button' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="crt-popup-share-icon-container">
                                                    <p>Share</p>
                                                    <div className="crt-popup-share-icon-container-icons">
                                                        <a role="link" tabIndex="0" aria-label="Share to facebook" className="crt-share-facebook">
                                                            <svg
                                                                aria-label="Facebook icon"
                                                                width="9"
                                                                height="17"
                                                                viewBox="0 0 9 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-facebook"
                                                            >
                                                                <path
                                                                    d="M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a role="link" tabIndex="0" aria-label="Share to twitter" className="crt-share-twitter">
                                                            <svg
                                                                aria-label="Twitter icon"
                                                                width="24"
                                                                height="21"
                                                                viewBox="0 0 26 23"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-twitter"
                                                            >
                                                                <path
                                                                    d="M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='crt-post-read-more'></div>
                                        <div className='crt-post-max-height-read-more'></div>
                                    </div>
                                    <span className='hidden-for-aria-label' role='status' tabIndex={0} aria-label='End of post.'></span>
                                </article>
                                 <article aria-label='Post 6, YouTube post by AFNAN Perfumes ' role='article' className='crt-post crt-post-has-image crt-post-has-video crt-post-youtube custom-artice-style-videos'>
                                    <div className='crt-post-c crt-post-border'>
                                        <div className="crt-post-content">
                                            <div className="crt-image crt-hitarea crt-post-content-image">
                                                <div className="crt-image-c">
                                                    <span className="crt-play">
                                                        <i className="crt-play-icon"></i>
                                                    </span>
                                                    <img
                                                        src="https://i.ytimg.com/vi/f34AvvjrXko/mqdefault.jpg"
                                                        tabIndex="0"
                                                        alt="Image posted by AFNAN Perfumes to youtube"
                                                        className="crt-post-image"
                                                        style={{ opacity: 1 }}
                                                    />
                                                </div>
                                                <div className="crt-video-container">
                                                    <span tabIndex="0" aria-label="play video" role="button" className="crt-play">
                                                        <i className="crt-play-icon"></i>
                                                    </span>
                                                    <video
                                                        preload="none"
                                                        playsInline
                                                        aria-label="video"
                                                        loop
                                                        poster="https://i.ytimg.com/vi/f34AvvjrXko/mqdefault.jpg"
                                                    >
                                                        <source src="https://www.youtube.com/embed/f34AvvjrXko" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="crt-post-header">
                                            <span role="link" tabIndex="0" aria-label="YouTube" className="crt-social-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 704" className="crt-icon-youtube custm-icon-size">
                                                    <path fill="#ff0000" transform="scale(1,-1) translate(0,-704)" d="M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"></path>
                                                </svg>
                                            </span>
                                            <div className="crt-post-fullname">
                                                <a href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" target="_blank" rel="noopener noreferrer">
                                                    AFNAN Perfumes
                                                </a>
                                            </div>
                                            <div className="crt-post-title">Patchouli and Tobacco - Launch 2022</div>
                                        </div>
                                        <div className="crt-post-text">
                                        </div>
                                        <div className="crt-post-footer">
                                            {/* <img
                                                aria-label="Profile image for AFNAN Perfumes"
                                                tabIndex="0"
                                                src="https://yt3.ggpht.com/ytc/AOPolaTqRh6kOwdGqLqZc1uizby2T3dASGqV_AJq4lQK=s88-c-k-c0x00ffffff-no-rj"
                                                alt="Profile image for AFNAN Perfumes"
                                                className="crt-post-userimage"
                                            /> */}
                                            <span className="crt-post-username" style={{ padding: '0px 5px' }}>
                                                <a
                                                    href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                >
                                                    @AFNAN Perfumes
                                                </a>
                                            </span>
                                            <span className="crt-post-date">
                                                <a
                                                    href="https://www.youtube.com/watch?v=pfHIE7JPmC8"
                                                    target="_blank"
                                                    aria-hidden="false"
                                                    tabIndex="0"
                                                    className="crt-post-date-link custom-share-button"
                                                >
                                                    3 Aug 2023
                                                </a>
                                            </span>
                                            <div className="crt-post-share">
                                                <span className="crt-share-hint"></span>
                                                <a role="link" className="crt-share-button">
                                                    <svg className='custom-share-button' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="crt-popup-share-icon-container">
                                                    <p>Share</p>
                                                    <div className="crt-popup-share-icon-container-icons">
                                                        <a role="link" tabIndex="0" aria-label="Share to facebook" className="crt-share-facebook">
                                                            <svg
                                                                aria-label="Facebook icon"
                                                                width="9"
                                                                height="17"
                                                                viewBox="0 0 9 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-facebook"
                                                            >
                                                                <path
                                                                    d="M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                        <a role="link" tabIndex="0" aria-label="Share to twitter" className="crt-share-twitter">
                                                            <svg
                                                                aria-label="Twitter icon"
                                                                width="24"
                                                                height="21"
                                                                viewBox="0 0 26 23"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="crt-icon-twitter"
                                                            >
                                                                <path
                                                                    d="M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='crt-post-read-more'></div>
                                        <div className='crt-post-max-height-read-more'></div>
                                    </div>
                                    <span tabIndex={0} aria-label='End of post.' className='hidden-for-aria-label'></span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 704" className="crt-icon-youtube">
                                                <path fill="#ff0000" transform="scale(1,-1) translate(0,-704)" d="M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"></path>
                                            </svg>
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
                                                <br /><br />
                                                Since its inception in 2007, Afnan Perfumes has been dedicated to crafting premier perfumes in the UAE, exuding a commitment to excellence that has garnered the brand's international recognition and admiration. With a remarkable growth over the years, the brand has fostered an organic global presence, expanding into markets that were once beyond imagination. The UK Launch Event served as the perfect platform for Afnan Perfumes to exhibit its exclusive fragrance portfolio to the local perfume connoisseurs.
                                                <br /><br />
                                                The UK market, in particular, holds a special place in the brand's heart, with an enthusiastic and celebrated following. Commencing the international roadshow in the UK was a testament to the unwavering support Afnan Perfumes has received from its global community.
                                                <br /><br />
                                                "We are thrilled and honoured by the overwhelming response to the Afnan Perfumes UK Launch Event," said Imran Fazlani, Founder, Managing Director and Nose of Afnan Perfumes.
                                                <br />
                                                "The event marks a significant milestone in our journey, and we are deeply grateful for the tremendous support from our local and global community. The UK market has embraced us with open arms, and we are delighted to present our luxurious Highness Collection to our esteemed audience. We look forward to celebrating many more unforgettable moments with our UK community."
                                                <br /><br />
                                                The event's highlight was the grand introduction of the Highness Collection, Afnan Perfumes' most luxurious range of fragrances to date. Representing one of the brand's cherished niche creations, Highness promises to elevate Afnan Perfumes to new heights in the luxury fragrance scene. At the UK Launch Event, guests had the exclusive privilege of being the first to experience the Highness Collection's opulent range of scents. Each attendee was delighted to receive a special gift from this extraordinary collection as a gesture of appreciation for their presence and support.
                                                <br /><br />
                                                Afnan Perfumes is available in the UK at DXB Perfumes, in both, online and in-store retails, making it easier than ever for fragrance enthusiasts to experience the brand's exquisite offerings.
                                                <br /><br /><br />
                                                About Afnan Perfumes: Afnan Perfumes, founded in 2007, is an international fragrance brand known for its premier perfumes and exclusive bottle designs. With a focus on excellence and a passion for the art of perfumery, Afnan Perfumes has gained widespread recognition globally.
                                                <br /><br />
                                                Led by Imran Fazlani, the locally-made and internationally-sold brand built its product portfolio to share a connection to different life experiences and develop the curiosity and desire of consumers looking for an exotic feel of mixed ethnicities.
                                                <br /><br />
                                                For more information, please visit <a href="https://www.afnan.com" target="_blank" rel="noopener">afnan.com</a>
                                                <br /><br />
                                                About DXB Perfumes (Local current distributor for Afnan Perfumes): Experience the world of luxury and glamour with dxb perfume, Europe's premier destination for exquisite Oriental fragrances. From the finest eau de parfum and parfum de extrait to concentrated perfume oils and deodorants, we offer a wide selection of the most sought-after Middle Eastern brands at an exceptional value.
                                                <br /><br />
                                                Since our founding in 2015, we have been dedicated to providing our discerning customers with unparalleled expertise and customer service. Our passion for perfume and commitment to excellence have made us the go-to destination for all your fragrance needs. Indulge in the finest scents and elevate your senses with dxb perfume.
                                                <br /><br />
                                                For more information, please visit <a href="https://www.dxbperfume.co.uk/collections/afnan" target="_blank" rel="noopener">dxbperfume.co.uk/collections/afnan</a>
                                                <br /><br />
                                                Highness Collection: Highness Collection contains seven different perfumes for women and men — Highness V, White, IX, X, VI, III and IV. Each perfume is unique, with its own story and distinctive scent. From light floral notes to deep masculine musk scents, the scent is well-crafted with an attractive design packaging that provides an elegant and sensorial experience.
                                                <br /><br />
                                                For more information, please visit <a href="https://www.afnan.com" target="_blank" rel="noopener">afnan.com</a>
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

export default VideosComponent
