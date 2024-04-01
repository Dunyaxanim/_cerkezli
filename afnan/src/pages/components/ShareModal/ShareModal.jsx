import React from 'react'

const ShareModal = ({ isOpenShareModal, handleShareModa }) => {
    return (
        <div className={`swym-modal swym-share-wishlist-modal ${isOpenShareModal ? '' : 'd-none-modal'}`} tabIndex="0" role="button">
            <div className="swym-modal-bg" aria-hidden="true"></div>
            <div className="swym-modal-content">
                <div className="swym-share-wishlist-modal-dialog">
                    <button onClick={handleShareModa} className="swym-close-btn swym-icon swym-is-button swym-nav swym-nav-1" aria-label="Close Modal"></button>
                    <div className="swym-share-wishlist-input-container">
                        <div className="swym-clear-text">
                            <h2 className="swym-text-heading swym-heading swym-heading-1">Share List via Email</h2>
                            <div className="swym-input-container">
                                <label className="swym-input-label" htmlFor="swym-name">Sender Name</label>
                                <div className="swym-input-inner-container">
                                    <input type="text" placeholder="Your Full Name (optional)" id="swym-name" aria-invalid="true" className="swym-share-wishlist-name swym-input swym-no-zoom-fix swym-input-1" />
                                </div>
                            </div>
                            <div className="swym-input-container swym-has-required">
                                <label htmlFor="swym-email" className="swym-input-label">Recipients Email</label>
                                <div className="swym-input-inner-container">
                                    <input type="text" id="swym-email" aria-invalid="false" placeholder="shopper@example.com" className="swym-share-wishlist-email swym-input swym-no-zoom-fix swym-input-1" />
                                </div>
                            </div>
                            <div className="swym-input-container">
                                <label htmlFor="swym-note" className="swym-input-label">Message</label>
                                <div className="swym-input-inner-container">
                                    <textarea placeholder="Add a note here..." id="swym-note" aria-invalid="false" className="swym-share-wishlist-note swym-input swym-no-zoom-fix swym-input-2"></textarea>
                                </div>
                            </div>
                            <div className="swym-text-md swym-info-grey">
                                <span className="swym-alert-red">*</span> - Required Fields
                            </div>
                            <br /><br />
                            <div className="swym-share-email-button-container">
                                <button className="swym-share-wishlist-email-btn swym-button swym-button-1 swym-is-button swym-bg-2 swym-color-4 swym-disabled custom-share-button" disabled="" aria-label="Share List">Share List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareModal
