import React from 'react'

const Popup = ({ isOpen, handlePopup }) => {

    return (
        <div id='PortalHost'>
            <div id="Portal0">
                <div>
                    <div className={`${isOpen !=0 ? '_1fragemoa _1fragemou _1fragemnq _1fragempe _1fragembo _1frageme6 _1fragem96 _1fragemgo _1g7pimeh _1fragempy _1fragemq0 _1fragemim _1fragemrd _1fragemk7 _1g7pimee _1g7pime3 _16s97g7aa' : 'popup-display-none'}`}>
                        <div className='_1g7pimek _1fragemoa _1fragemou _1fragemnq _1fragempe _1fragemim _1fragemrc _1fragemq2 _1fragemr1 _1fragemqs _1fragemr3 _1g7pimel _1g7pime3'></div>
                        <button aria-hidden="true" className="_1fragemim _1fragemqj _1fragemq2"></button>
                        <div id='Shipping policy-policy-modal' aria-modal="true" aria-labelledby="Shipping policy-policy-modalTitle" tabIndex="-1" className='_1g7pimes _1fragempz _1fragemq1 _1fragemk7 _1fragemkd _1fragemm9 _1fragemqx _1fragemqt _1fragemr3 _1fragemjp _1fragemjq _1fragemjt _1fragemre _1g7pimee _1g7pimeo _1g7pime3_1g7pimes _1fragempz _1fragemq1 _1fragemk7 _1fragemkd _1fragemm9 _1fragemqx _1fragemqt _1fragemr3 _1fragemjp _1fragemjq _1fragemjt _1fragemre _1g7pimee _1g7pimeo _1g7pime3'>
                            <header className="_1g7pime14 _1fragemb9 _1fragem8r _1fragemg9 _1fragemdr _1fragemk7 _1fragemme _1fragemj5">
                                <div id="Shipping policy-policy-modalTitle" className="_1fragemkg">
                                    <h3 className="n8k95w1 _1fragemir n8k95w2">{isOpen} Shipping policy</h3>
                                </div>
                                <button onClick={()=>handlePopup(0)} type="button" aria-label="Close" className="_1g7pime18 _1fragemap _1fragemd7 _1fragem87 _1fragemfp _1fragemih _1fragemp2 _1fragemoi _1fragemk5">
                                    <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wuj a8x1wum">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                            <path strokeLinecap="round" d="M2.8 2.8 7 7m4.2 4.2L7 7m0 0 4.2-4.2M7 7l-4.2 4.2"></path>
                                        </svg>
                                    </span>
                                </button>
                            </header>
                            <div>
                                <p className='custom-popup-text'>
                                    Estimated Delivery Time:

                                    AFNAN aims to process & deliver all orders within 5-6 working days. No deliveries will be made on Sundays or public holidays.

                                    Order Tracking:

                                    We will update your order with the tracking information.

                                    Delivery Rates:

                                    Free delivery is available on all orders above AED 100/-. On amount less than that, we charge a standard fee of AED 20.

                                    Delivery Destinations:

                                    We deliver to all regions in the United Arab Emirates only. We also accept orders from international customers who are shipping to addresses in the United Arab Emirates only.

                                    Out of Stock:

                                    All orders are subject to availability.

                                    Cash on Delivery:

                                    We offer this option in the UAE only.

                                    Damaged Goods:

                                    If you receive your order and it has been damaged during transit, please contact us immediately at email - onlineshop@afnanperfumes.com or WhatsApp on +971-567174979 so we can resolve the issue.

                                    Enjoy your Shopping!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
