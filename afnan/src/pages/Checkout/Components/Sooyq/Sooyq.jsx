import React, { useState } from 'react'

const Sooyq = ({ handlePopup }) => {

    const [isApartmentOpen, setIsApartmentOpen] = useState(false)
    const [isPaymentMethod, setIsPaymentMethod] = useState(false)
    const handleApartmentOpen = () => {
        setIsApartmentOpen(true)
    }
    const handlePaymentMethod = (method) => {
        setIsPaymentMethod(method)
    }

    return (
        <div className='sooyq'>
            <div className='cLGHj qVVgQ jeN3o _1fragemjt _1fragemjs'>
                <div className='ETRXz'>
                    <main id='checkout-main' className='jvQbN'>
                        <div id='OnePageFrame' className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                            <form action="POST" id='Form0' className='_1fragemk6'>
                                <div className='_1fragemir'>
                                    <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc _1fragemci _1fragemf0 _1fragema0 _1fragemhi'>
                                        <div className='hhdYQ'>
                                            <section className='_1fragemjt _1fragemjq _1fragemk5 _1fragemb9 _1fragemcj _1fragemdr _1fragemf1 _1fragem8r _1fragema1 _1fragemg9 _1fragemhj _1fragemre _1fragemir'>
                                                <div className='_1ip0g651 _1fragemkb _1fragemir _1frageml5 _1fragemln'>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <div className="Rne9s">
                                                                    <h2 className="n8k95w1 _1fragemir n8k95w2">Contact</h2>
                                                                    <a href="https://www.afnan.com/account/login?checkout_url=%2Fcheckouts%2Fcn%2Fc1-cbb02e695329565854281f83144cb86b%3Flocale%3Den-AE" className="s2kwpi1 _1fragemir _1fragemqx _1fragemr6 s2kwpi2 _1fragemqp _1fragemqs">Log in</a>
                                                                </div>
                                                            </div>
                                                            <div className='_16s97g75k'></div>
                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                    <div className="_1fragemir">
                                                                        <label id="email-label" htmlFor="email" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6 cektnc6 _1fragemqe">
                                                                            <span className="cektnc9">
                                                                                <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Email or mobile phone number</span>
                                                                            </span>
                                                                        </label>
                                                                        <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                            <input
                                                                                id="email"
                                                                                name="email"
                                                                                type="text"
                                                                                inputMode="text"
                                                                                aria-labelledby="email-label"
                                                                                autoComplete="shipping email"
                                                                                autoCapitalize="off"
                                                                                data-protected-input="true"
                                                                                className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2uv _1fragemqx _1fragemqs _1fragemr6 _7ozb2u11 _7ozb2u1j"
                                                                                autoFocus={true}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="_1ip0g651 _1fragemkb _1fragemir _1frageml3 _1fragemll">
                                                                    <div>
                                                                        <div className="_1fragemir _1fragemk7">
                                                                            <div className="_1mmswk95 _1fragemir">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id="marketing_opt_in"
                                                                                    name="marketing_opt_in"
                                                                                    className="_1mmswk97 _1fragemmn _1fragemml _1fragemmp _1fragemmj _1fragemnj _1fragemnf _1fragemnn _1fragemnb _1fragem69 _1fragem5k _1fragem6y _1fragem4v _1fragemk3 _1fragemk5 _1fragemm9 _1fragem2i _1fragemqx _1fragemqr _1fragemr3 _1mmswk99 _1fragemju _1fragemre"
                                                                                />
                                                                                <div className="_1mmswk9l _1fragemju _1fragemqj _1fragemq2 _1fragemih _1fragemqr _1fragemr6 _1fragemqx">
                                                                                    <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wua _1fragemk5 a8x1wug a8x1wum">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.1 2.8-5.877 8.843a.35.35 0 0 1-.54.054L1.4 7.4"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <label htmlFor="marketing_opt_in" className="_1mmswk9h _1fragemk5 _1fragemhs _1fragemk3 _1fragemfu">Email me with news and offers</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div>
                                                <div>
                                                    <section className='_1fragemjt _1fragemjq _1fragemk5 _1fragemb9 _1fragemcj _1fragemdr _1fragemf1 _1fragem8r _1fragema1 _1fragemg9 _1fragemhj _1fragemre _1fragemir'>
                                                        <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkq _1frageml8'>
                                                                <h2 className='n8k95w1 _1fragemir n8k95w2'>Delivery</h2>
                                                            </div>
                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkx _1fragemlf'>
                                                                <section aria-label="Shipping address" className='_1fragemjt _1fragemk5 _1fragemir'>
                                                                    <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                        <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkx _1fragemlf'>
                                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                                <div>
                                                                                    <div id='shippingAddressForm'>
                                                                                        <div aria-hidden="false" className='pxSEU'>
                                                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="vTXBW _1fragemju _10vrn9p1 _10vrn9p0 _10vrn9p4">
                                                                                                        <div>
                                                                                                            <div className="j2JE7 _1fragemju">
                                                                                                                <label htmlFor="Select0" className="QOQ2V NKh24">
                                                                                                                    <span className="KBYKh">
                                                                                                                        <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Country/Region</span>
                                                                                                                    </span>
                                                                                                                </label>
                                                                                                                <select name="countryCode" id="Select0" required="" autoComplete="shipping country" className="_b6uH _1fragemre yA4Q8 vYo81 RGaKd">
                                                                                                                    <option value="AE">United Arab Emirates</option>
                                                                                                                </select>
                                                                                                                <div className="TUEJq">
                                                                                                                    <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wug a8x1wum">
                                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                        <div className="_1fragemir">
                                                                                                            <label id="TextField0-label" htmlFor="TextField0" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6 cektnc6 _1fragemqe">
                                                                                                                <span className="cektnc9">
                                                                                                                    <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">First name</span>
                                                                                                                </span>
                                                                                                            </label>
                                                                                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                <input id="TextField0" name="firstName" required="" type="text" aria-required="true" aria-labelledby="TextField0-label" autoComplete="shipping given-name" data-protected-input="true" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2uv _1fragemqx _1fragemqs _1fragemr6 _7ozb2u11 _7ozb2u1j" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                        <div className="_1fragemir">
                                                                                                            <label id="TextField1-label" htmlFor="TextField1" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6 cektnc6 _1fragemqe">
                                                                                                                <span className="cektnc9">
                                                                                                                    <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Last name</span>
                                                                                                                </span>
                                                                                                            </label>
                                                                                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                <input id="TextField1" name="lastName" required="" type="text" aria-required="true" aria-labelledby="TextField1-label" autoComplete="shipping family-name" data-protected-input="true" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2uv _1fragemqx _1fragemqs _1fragemr6 _7ozb2u11 _7ozb2u1j" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                        <div className="_1fragemir">
                                                                                                            <label id="TextField2-label" htmlFor="TextField2" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                                                                <span className="cektnc9">
                                                                                                                    <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Company (optional)</span>
                                                                                                                </span>
                                                                                                            </label>
                                                                                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                <input id="TextField2" name="company" placeholder="Company (optional)" type="text" aria-required="false" aria-labelledby="TextField2-label" autoComplete="shipping organization" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="Vob8N">
                                                                                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemks _1fragemla">
                                                                                                            <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                                <div className="_1fragemir">
                                                                                                                    <label id="TextField3-label" htmlFor="TextField3" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                                                                        <span className="cektnc9">
                                                                                                                            <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Address</span>
                                                                                                                        </span>
                                                                                                                    </label>
                                                                                                                    <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                        <input id="TextField3" name="address1" placeholder="Address" required="" type="text" aria-required="true" aria-labelledby="TextField3-label" autoComplete="shipping address-line1" data-protected-input="true" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className={`_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t ${isApartmentOpen ? '' : 'apartment-d-none'}`} style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="Vob8N">
                                                                                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemks _1fragemla">
                                                                                                            <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                                <div className="_1fragemir">
                                                                                                                    <label id="TextField3-label" htmlFor="TextField3" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                                                                        <span className="cektnc9">
                                                                                                                            <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Apartment</span>
                                                                                                                        </span>
                                                                                                                    </label>
                                                                                                                    <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                        <input id="TextField3" name="address1" placeholder="Apartment" required="" type="text" aria-required="true" aria-labelledby="TextField3-label" autoComplete="shipping address-line1" data-protected-input="true" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>



                                                                                                <div className={`_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t ${isApartmentOpen ? 'add-apartment-button-none' : ''}`} style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="_1fragemjt _1fragemk5 _1fragemci _1fragemf0 _1fragema0 _1fragemfu _1fragemir">
                                                                                                        <span>
                                                                                                            <button type="button" className="QT4by eVFmT janiy adBMs EP07D" onClick={handleApartmentOpen}>
                                                                                                                <span className="AjwsM">
                                                                                                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                                                                                                        <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemkq _1frageml8 _1fragemj1 _1fragemj5 _1fragemmd">
                                                                                                                            <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wua _1fragemk5 a8x1wug a8x1wum">
                                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                                                                    <path strokeLinecap="round" d="M2.1 7H7m4.9 0H7m0 0V2.1M7 7v4.9"></path>
                                                                                                                                </svg>
                                                                                                                            </span>
                                                                                                                            Add apartment, suite, etc.
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                        <div className="_1fragemir">
                                                                                                            <label id="TextField8-label" htmlFor="TextField8" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                                                                <span className="cektnc9">
                                                                                                                    <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">City</span>
                                                                                                                </span>
                                                                                                            </label>
                                                                                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                <input
                                                                                                                    id="TextField8"
                                                                                                                    name="city"
                                                                                                                    placeholder="City"
                                                                                                                    required=""
                                                                                                                    type="text"
                                                                                                                    aria-required="true"
                                                                                                                    aria-labelledby="TextField8-label"
                                                                                                                    autoComplete="shipping address-level2"
                                                                                                                    className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="vTXBW _1fragemju _10vrn9p1 _10vrn9p0 _10vrn9p4">
                                                                                                        <div>
                                                                                                            <div className="j2JE7 _1fragemju">
                                                                                                                <label htmlFor="Select1" className="QOQ2V NKh24">
                                                                                                                    <span className="KBYKh">
                                                                                                                        <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Emirate</span>
                                                                                                                    </span>
                                                                                                                </label>
                                                                                                                <select
                                                                                                                    name="zone"
                                                                                                                    id="Select1"
                                                                                                                    required=""
                                                                                                                    autoComplete="shipping address-level1"
                                                                                                                    className="_b6uH _1fragemre yA4Q8 vYo81 RGaKd"
                                                                                                                >
                                                                                                                    <option data-alternate-values='["Abu Dhabi"]' value="AZ">Abu Dhabi</option>
                                                                                                                    <option data-alternate-values='["Ajman"]' value="AJ">Ajman</option>
                                                                                                                    <option data-alternate-values='["Dubai"]' value="DU">Dubai</option>
                                                                                                                    <option data-alternate-values='["Fujairah"]' value="FU">Fujairah</option>
                                                                                                                    <option data-alternate-values='["Ras al-Khaimah"]' value="RK">Ras al-Khaimah</option>
                                                                                                                    <option data-alternate-values='["Sharjah"]' value="SH">Sharjah</option>
                                                                                                                    <option data-alternate-values='["Umm al-Quwain"]' value="UQ">Umm al-Quwain</option>
                                                                                                                </select>
                                                                                                                <div className="TUEJq">
                                                                                                                    <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wug a8x1wum">
                                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="_1fragemir _1fragemkb _1fragemku _1fragemlc _1fragemlo _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': 'minmax(0, 1fr)', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)' }}>
                                                                                                    <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                                                                                        <div className="_1fragemir">
                                                                                                            <label id="TextField6-label" htmlFor="TextField6" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                                                                <span className="cektnc9">
                                                                                                                    <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Phone</span>
                                                                                                                </span>
                                                                                                            </label>
                                                                                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                                                                <input
                                                                                                                    id="TextField6"
                                                                                                                    name="phone"
                                                                                                                    placeholder="Phone"
                                                                                                                    required=""
                                                                                                                    type="tel"
                                                                                                                    aria-required="true"
                                                                                                                    aria-labelledby="TextField6-label"
                                                                                                                    autoComplete="shipping tel"
                                                                                                                    data-protected-input="true"
                                                                                                                    className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _1fragemmv _1fragemn5 _7ozb2u10 _7ozb2u1j"
                                                                                                                />
                                                                                                                <div className="_1fragemir _1fragemr8 _1fragemja _1fragemk1 _7ozb2u1g">
                                                                                                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                                                                                                        <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemku _1fragemlc _1fragemj1 _1fragemj5 _1fragemmd">
                                                                                                                            <button type="button" className="_1xqelvi1 _1fragemk3 _1fragemk5 _1fragemir _1fragemqn _1fragemqx _1fragemqs _1fragemr6 _1fragemk7 _1fragemj8">
                                                                                                                                <span className="_1xqelvi2">
                                                                                                                                    <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wui a8x1wum">
                                                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-label="More information" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                                                                            <circle cx="7" cy="7" r="5.6"></circle>
                                                                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path>
                                                                                                                                            <circle cx="7" cy="9.7" r="0.1"></circle>
                                                                                                                                        </svg>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </button>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className="_1fragemir _1fragemk7">
                                                                                                        <div className="_1mmswk95 _1fragemir">
                                                                                                            <input
                                                                                                                type="checkbox"
                                                                                                                id="save_shipping_information"
                                                                                                                name="save_shipping_information"
                                                                                                                className="_1mmswk97 _1fragemmn _1fragemml _1fragemmp _1fragemmj _1fragemnj _1fragemnf _1fragemnn _1fragemnb _1fragem69 _1fragem5k _1fragem6y _1fragem4v _1fragemk3 _1fragemk5 _1fragemm9 _1fragem2i _1fragemqx _1fragemqr _1fragemr3 _1mmswk99 _1fragemju _1fragemre"
                                                                                                            />
                                                                                                            <div className="_1mmswk9l _1fragemju _1fragemqj _1fragemq2 _1fragemih _1fragemqr _1fragemr6 _1fragemqx">
                                                                                                                <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wua _1fragemk5 a8x1wug a8x1wum">
                                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.1 2.8-5.877 8.843a.35.35 0 0 1-.54.054L1.4 7.4"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <label htmlFor="save_shipping_information" className="_1mmswk9h _1fragemk5 _1fragemhs _1fragemk3 _1fragemfu">Save this information for next time</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_firstName" name="firstName" autoComplete="shipping given-name" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_lastName" name="lastName" autoComplete="shipping family-name" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_company" name="company" autoComplete="shipping organization" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_address1" name="address1" autoComplete="shipping address-line1" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_address2" name="address2" autoComplete="shipping address-line2" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_city" name="city" autoComplete="shipping address-level2" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_country" name="country" autoComplete="shipping country" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_zone" name="zone" autoComplete="shipping address-level1" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_address_level1" name="address-level1" autoComplete="shipping address-level1" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_province" name="province" autoComplete="shipping address-level1" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_postalCode" name="postalCode" autoComplete="shipping postal-code" />
                                                                                            <input tabIndex="-1" aria-hidden="true" aria-label="no-label" type="text" id="autofill_phone" name="phone" autoComplete="shipping tel" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {/* bura */}

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                            <section aria-label="Payment" className='_1fragemjt _1fragemjq _1fragemk5 _1fragemb9 _1fragemcj _1fragemdr _1fragemf1 _1fragem8r _1fragema1 _1fragemg9 _1fragemhj _1fragemre _1fragemir'>
                                                <div>
                                                    <div>
                                                        <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkq _1frageml8'>
                                                                <h2 className='n8k95w1 _1fragemir n8k95w2'>Payment</h2>
                                                                <p className='_1x52f9s1 _1fragemir _1x52f9so _1fragemkj _1x52f9si'>All transactions are secure and encrypted.</p>
                                                            </div>
                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemky _1fragemlg'>
                                                                <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkz _1fragemlh'>
                                                                    <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                        <div>
                                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                                                <fieldset id="basic">
                                                                                    <legend className='_1fragemqk'>Choose a payment method</legend>
                                                                                    <div className='Wo4qW ezrb1p3 _1fragemju _1fragemre NDMe9 NdTJE PuVf0'>
                                                                                        <div className={` B4zH6 ${isPaymentMethod == 1 ? 'Zb82w HKtYc OpmPd' : ''}`} >
                                                                                            <label htmlFor="basic-Hyperpay" className={` yL8c2 ${isPaymentMethod == 2 ? 'ezrb1p5 _1fragemjv D1RJr' : 'D1RJr'}`}>
                                                                                                <div className='hEGyz'>
                                                                                                    <div className="_1fragemir" onClick={()=>handlePaymentMethod(1)}>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            id="basic-Hyperpay"
                                                                                                            name="basic"
                                                                                                            className="_6hzjvo5 _1fragemk3 _1fragemk5 _1fragemqx _1fragemqr _1fragemr3 _6hzjvof _1fragemju _1fragemre _6hzjvoe _6hzjvob"
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className='f5aCe'>
                                                                                                        <div className='_19gi7yt0 _19gi7ytl _1fragemkj'>Hyperpay</div>
                                                                                                        <div>
                                                                                                            <div className='wAAjh'>
                                                                                                                <div className='_1fragemk7 _1fragemir _1fragemmd'>
                                                                                                                    <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemkq _1frageml8 _1fragemj1 _1fragemj5 _1fragemmd">
                                                                                                                        <img alt="mada" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/d66c33d3ece18efa9a76.svg" role="img" width="38" height="24" className="_1tgdqw61 _1fragemqx _1fragemqs _1fragemr6 _1fragemm8" />
                                                                                                                        <img alt="visa" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" role="img" width="38" height="24" className="_1tgdqw61 _1fragemqx _1fragemqs _1fragemr6 _1fragemm8" />
                                                                                                                        <img alt="master" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/5e3b05b68f3d31b87e84.svg" role="img" width="38" height="24" className="_1tgdqw61 _1fragemqx _1fragemqs _1fragemr6 _1fragemm8" />
                                                                                                                        <img alt="american express" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/bfaa13c64b6ea06f289f.svg" role="img" width="38" height="24" className="_1tgdqw61 _1fragemqx _1fragemqs _1fragemr6 _1fragemm8" />
                                                                                                                        <button type="button" aria-pressed="false" className="_1xqelvi1 _1fragemk3 _1fragemk5 _1fragemir _1fragemqn _1fragemqx _1fragemqs _1fragemr6 _1fragemk7 _1fragemkd _1fragemj5 _1fragemmb cb5z9">
                                                                                                                            <span className="_19gi7yt0 _19gi7ytj _1fragemki _19gi7yt1 _19gi7yt4">+4</span>
                                                                                                                        </button>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                            <div id='basic-Pay in 4 with Tabby. No interest. No fees-collapsible' className={` _94sxtb1 _1fragempz _1fragemq1 _1fragemir _1fragemqz _1fragemr3 _1fragemqt ${isPaymentMethod == 1 ? 'custom-method-height-show' : 'custom-method-height-show-hidden'}`}>
                                                                                                <div>
                                                                                                    <div className='b7U_P'>
                                                                                                        <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkv _1fragemld _1fragemmf'>
                                                                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle _1fragemmf'>
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="eHdoK">
                                                                                                                    <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                                                                                    <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                                                                                </svg>
                                                                                                                <div className="_1fragemjt _1fragemk5 _1fragemir _16s97g73r custom-payment-text">
                                                                                                                    <p className="_1x52f9s1 _1fragemir _1x52f9so _1fragemkj _1fragemql">
                                                                                                                        After clicking “Pay now”, you will be redirected to Pay in 4 with Tabby. No interest. No fees to complete your purchase securely.
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={` B4zH6 ${isPaymentMethod == 2 ? 'Zb82w HKtYc OpmPd' : ''}`}>
                                                                                            <label htmlFor="basic-Pay in 4 with Tabby. No interest. No fees" className={` yL8c2 ${isPaymentMethod == 2 ? 'ezrb1p5 _1fragemjv D1RJr' : 'D1RJr'}`}>
                                                                                                <div className="hEGyz">
                                                                                                    <div onClick={()=>handlePaymentMethod(2)} className="_1fragemir">
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            id="basic-Pay in 4 with Tabby. No interest. No fees"
                                                                                                            name="basic"
                                                                                                            className="_6hzjvo5 _1fragemk3 _1fragemk5 _1fragemqx _1fragemqr _1fragemr3 _6hzjvof _1fragemju _1fragemre _6hzjvoe _6hzjvob"
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="f5aCe">
                                                                                                        <div>
                                                                                                            <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Pay in 4 with Tabby. No interest. No fees</span>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <div className="wAAjh">
                                                                                                                <div className="_1fragemk7 _1fragemir _1fragemmd">
                                                                                                                    <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemkq _1frageml8 _1fragemj1 _1fragemj5 _1fragemmd">
                                                                                                                        <img
                                                                                                                            alt="tabby"
                                                                                                                            src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/10d3ab8976607fada913.svg"
                                                                                                                            role="img"
                                                                                                                            width="38"
                                                                                                                            height="24"
                                                                                                                            className="_1tgdqw61 _1fragemqx _1fragemqs _1fragemr6 _1fragemm8"
                                                                                                                        />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                            <div id='basic-Pay in 4 with Tabby. No interest. No fees-collapsible' className={` _94sxtb1 _1fragempz _1fragemq1 _1fragemir _1fragemqz _1fragemr3 _1fragemqt ${isPaymentMethod == 2 ? 'custom-method-height-show' : 'custom-method-height-show-hidden'}`}>
                                                                                                <div>
                                                                                                    <div className='b7U_P'>
                                                                                                        <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkv _1fragemld _1fragemmf'>
                                                                                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle _1fragemmf'>
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="eHdoK">
                                                                                                                    <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                                                                                    <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                                                                                    <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                                                                                </svg>
                                                                                                                <div className="_1fragemjt _1fragemk5 _1fragemir _16s97g73r custom-payment-text">
                                                                                                                    <p className="_1x52f9s1 _1fragemir _1x52f9so _1fragemkj _1fragemql">
                                                                                                                        After clicking “Pay now”, you will be redirected to Pay in 4 with Tabby. No interest. No fees to complete your purchase securely.
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={` B4zH6 ${isPaymentMethod == 3 ? 'Zb82w HKtYc OpmPd' : ''}`}>
                                                                                            <label htmlFor="basic-paymentOnDelivery" className={` yL8c2 ${isPaymentMethod == 3 ? 'ezrb1p5 _1fragemjv D1RJr' : 'D1RJr'}`}>
                                                                                                <div className="hEGyz">
                                                                                                    <div onClick={()=>handlePaymentMethod(3)} className="_1fragemir">
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            id="basic-paymentOnDelivery"
                                                                                                            name="basic"
                                                                                                            className="_6hzjvo5 _1fragemk3 _1fragemk5 _1fragemqx _1fragemqr _1fragemr3 _6hzjvof _1fragemju _1fragemre _6hzjvoe _6hzjvob"
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="f5aCe">
                                                                                                        <div>
                                                                                                            <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Cash on Delivery (COD)</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                            <div id="basic-paymentOnDelivery-collapsible" className={` _94sxtb1 _1fragempz _1fragemq1 _1fragemir _1fragemqz _1fragemr3 _1fragemqt ${isPaymentMethod == 3 ? 'custom-method-height-show' : 'custom-method-height-show-hidden'}`}>
                                                                                                <div>
                                                                                                    <div className="b7U_P">
                                                                                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkv _1fragemld _1fragemmf">
                                                                                                            <p className="_1x52f9s1 _1fragemir _1x52f9so _1frag mkj">Please be informed that we only accept cash payments on delivery.</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='custom-button-m-top'>
                                                    <div>
                                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemky _1fragemlg">
                                                            <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle">
                                                                <div>
                                                                    <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc">
                                                                        <div id="pay-button-container" className="_1fragemjt _1fragemk5 _1fragemir">
                                                                            <div>
                                                                                <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle">
                                                                                    <button type="submit" className="QT4by _1fragemjx rqC98 EbLsk _7QHNJ VDIfJ j6D1f janiy">
                                                                                        <span className="AjwsM">
                                                                                            <span className="_19gi7yt0 _19gi7ytp _1fragemkl">Pay now</span>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                    <footer role="contentinfo" className="mZR1U c0YIW PSiog _1fragemrm _1fragemjt _1fragemjs">
                        <div className="TfwLd">
                            <div>
                                <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkv _1fragemld">
                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                        <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemj3 _1fragemj7 _1fragemkq _1fragemlc _1fragemmd">
                                            <button onClick={() => handlePopup(1)} type="button" aria-haspopup="dialog" className="QT4by eVFmT janiy mRJ8x EP07D"><span className="AjwsM">Refund policy</span></button>
                                            <button onClick={() => handlePopup(2)} type="button" aria-haspopup="dialog" className="QT4by eVFmT janiy mRJ8x EP07D"><span className="AjwsM">Shipping policy</span></button>
                                            <button onClick={() => handlePopup(3)} type="button" aria-haspopup="dialog" className="QT4by eVFmT janiy mRJ8x EP07D"><span className="AjwsM">Privacy policy</span></button>
                                            <button onClick={() => handlePopup(4)} type="button" aria-haspopup="dialog" className="QT4by eVFmT janiy mRJ8x EP07D"><span className="AjwsM">Terms of service</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className='jCic4 _1fragemjt _1fragemjr'>
                <div className='blA7b'>
                    <div className='_1fragemqk'>
                        <h3 className='n8k95w1 _1fragemir n8k95w3'>Order summary</h3>
                    </div>
                    <aside>
                        <div>
                            <section className='_1fragemjt _1fragemk5 _1fragemir'>
                                <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                                    <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                                        <section className='_1fragemjt _1fragemk5 _1fragemir'>
                                            <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                                <h4 id="ResourceList0" className="n8k95w1 _1fragemir n8k95w5">Shopping cart</h4>
                                            </div>
                                            <div role='table' aria-labelledby="ResourceList0" className='_6zbcq55 _1fragemk7 _1fragemkd _6zbcq56'>
                                                <div role='row' className='_6zbcq524 _1fragemk7 _1fragem2i _6zbcq52b'>
                                                    <div role='cell' className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd'>
                                                        <div className="_1m6j2n32 _1fragemir _1fragemri _1m6j2n33" style={{ '--_1m6j2n30': 1 }}>
                                                            <div className="_1h3po421 _1h3po423 _1fragemir " style={{ '--_1h3po420': 1 }}>
                                                                <picture>
                                                                    <source
                                                                        media="(min-width: 0px)"
                                                                        srcSet="https://cdn.shopify.com/s/files/1/0444/6194/9090/files/9AM-01-Ramadan_64x64.jpg?v=1709885369 1x, https://cdn.shopify.com/s/files/1/0444/6194/9090/files/9AM-01-Ramadan_128x128.jpg?v=1709885369 2x, https://cdn.shopify.com/s/files/1/0444/6194/9090/files/9AM-01-Ramadan_256x256.jpg?v=1709885369 4x"
                                                                    />
                                                                    <img
                                                                        src="https://cdn.shopify.com/s/files/1/0444/6194/9090/files/9AM-01-Ramadan_64x64.jpg?v=1709885369"
                                                                        alt="9 AM - Pour Femme"
                                                                        className="_1h3po424 _1fragemk5 _1fragemhs _1fragemms _1fragemmx _1fragemn7 _1fragemn2 _1fragem3w _1fragem3c _1fragem4g _1fragem2s _1fragem69 _1fragem5k _1fragem6y _1fragem4v _1fragemi7"
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <div className="_1m6j2n3e _1fragemih _1fragemoa _1fragemou">
                                                                <div className="_99ss3s1 _1fragemka _1fragemj5 _1fragemmb _99ss3s4 _99ss3s2 _99ss3s8">2</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div role='cell' className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _1fragemkg '>
                                                        <div className="_1fragemjt _1fragemk5 _1fragemir iZ894 custom-checkout-product">
                                                            <p className="_1x52f9s1 _1fragemir _1x52f9so _1fragemkj">9 AM - Pour Femme</p>
                                                            <div className="_1ip0g651 _1fragemkb _1fragemir _1frageml5 _1fragemln">
                                                                <p className="_1x52f9s1 _1fragemir _1x52f9sm _1fragemki _1x52f9si">Eau De Perfum / 100 ML / Pour Femme</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div role='cell' className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _6zbcq53q'>
                                                        <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                                            <span className="_19gi7yt0 _19gi7ytl _1fragemkj">
                                                                2
                                                                <div aria-hidden="true" className="_1fragemjt _1fragemk5 _1fragemir"> x</div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div role='cell' className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd'>
                                                        <div className="_1fragemjt _1fragemk7 _1fragemkd _1fragemj6 _1fragemmb _1fragemir _16s97g741 bua0H" style={{ '--_16s97g73w': '6.4rem' }}>
                                                            <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj notranslate">AED240.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </section>
                                    </div>
                                    <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                                        <section className='_1fragemjt _1fragemk5 _1fragemir'>
                                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc'>
                                                <form action="POST" className='_1fragemk6' id='Form1'>
                                                    <div className='_1fragemir'>
                                                        <div className='_1fragemir _1fragemkb _1fragemkq _1fragemlc _1fragemlp _16s97g7f _16s97g7p _16s97g71j _16s97g71t custom-checkout-form'>
                                                            <div className='_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju'>
                                                                <div className='_1fragemir'>
                                                                    <label id="TextField7-label" htmlFor="TextField7" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                                                        <span className="cektnc9">
                                                                            <span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Discount code or gift card</span>
                                                                        </span>
                                                                    </label>
                                                                    <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _7ozb2uc _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                                                        <input
                                                                            id="TextField7"
                                                                            name="reductions"
                                                                            placeholder="Discount code or gift card"
                                                                            type="text"
                                                                            aria-labelledby="TextField7-label"
                                                                            className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="submit" disabled aria-label="Apply Discount Code" className="QT4by rqC98 EbLsk _7QHNJ VDIfJ janiy Fox6W hlBcn">
                                                                <span className="AjwsM">Apply</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                                        <button type="submit" tabIndex="-1" aria-hidden="true">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </section>
                                    </div>
                                    <div className='_1fragemjt _1fragemk5 _1fragemir'>
                                        <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                            <h4 id="MoneyLine-Heading0" className="n8k95w1 _1fragemir n8k95w5">
                                                Cost summary
                                            </h4>
                                        </div>
                                        <div role='table' aria-labelledby="MoneyLine-Heading0" className='nfgb6p0 custom-table'>
                                            <div role="row" className="_1qy6ue61 _1fragemkb _1qy6ue65 custom-row">
                                                <div role="rowheader" className="_1qy6ue67">
                                                    <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Subtotal</span>
                                                </div>
                                                <div role="cell" className="_1qy6ue68">
                                                    <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj _19gi7yt1 notranslate">AED420.00</span>
                                                </div>
                                            </div>
                                            <div role="row" className="_1qy6ue61 _1fragemkb _1qy6ue65 custom-row">
                                                <div role="rowheader" className="_1qy6ue67">
                                                    <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkq _1frageml8">
                                                        <div className="_1fragemk7 _1fragemir _1fragemmd">
                                                            <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemkq _1frageml8 _1fragemj1 _1fragemj5 _1fragemmd">
                                                                <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Shipping</span>
                                                                <button type="button" aria-label="Shipping policy" aria-haspopup="dialog" className="QT4by eVFmT janiy mRJ8x EP07D">
                                                                    <span className="AjwsM">
                                                                        <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wuh a8x1wum">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                                                <circle cx="7" cy="7" r="5.6"></circle>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path>
                                                                                <circle cx="7" cy="9.7" r="0.1"></circle>
                                                                            </svg>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="cell" className="_1qy6ue68">
                                                    <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj _19gi7ytc _19gi7yt1 notranslate">Free</span>
                                                </div>
                                            </div>
                                            <div role="row" className="_1x41w3p1 _1fragemkb _1fragemj5 _1x41w3p5 custom-row">
                                                <div role="rowheader" className="_1x41w3p7">
                                                    <span className="_19gi7yt0 _19gi7ytp _1fragemkl _19gi7yt1">Total</span>
                                                </div>
                                                <div role="cell" className="_1x41w3p8">
                                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                                        <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemks _1fragemla _1fragemj4 _1fragemmd">
                                                            <strong translate="yes" className="_19gi7yt0 _19gi7ytr _1fragemkm _19gi7yt1 notranslate">AED441.00</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Sooyq
