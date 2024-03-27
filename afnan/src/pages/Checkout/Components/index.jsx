import React, { useState } from 'react'
import '../checkout.css'
import '../checkoutStyle.css'
import '../style.css'
import '../payment.css'
import '../pay.css'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Sooyq from './Sooyq/Sooyq'
import Popup from './Popup/Popup'

const index = () => {
  const [isopenPopup, SetIsopenPopup] = useState()
  const [isopenPopupId, SetIsopenPopupId] = useState(0)
  const handlePopup = (id) => {
    SetIsopenPopup(!isopenPopup)
    SetIsopenPopupId(id)
  }
  const [isSummaryVisible, setSummaryVisible] = useState(false);

  const toggleSummaryVisibility = () => {
    setSummaryVisible(!isSummaryVisible);
  };

  return (
    <>
      <div className='g9gqqf1 _1fragemkj _1fragemre _1fragemjq _1fragemjt'>
        <div className='_1fragemjt _1fragemk5 _1fragemir'>
          <Link to="/" className="Xo_dq">Skip to content</Link>
          <div className='f1jux fc8Jc kZBua mB_Id _1fragemjt _1fragemjq'>
            <Header />


            <div className='U6oc4 yesOe'>
              <button
                aria-pressed={isSummaryVisible}
                aria-controls="disclosure_details"
                aria-expanded={isSummaryVisible}
                className="b20QW"
                onClick={toggleSummaryVisibility}
              >
                <Link to='/card'>
                  <span className="IfmSL">
                    <span>Show order summary <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wua a8x1wue _1fragemk9 a8x1wug a8x1wum">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        focusable="false"
                        aria-hidden="true"
                        className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6">
                        </path>
                      </svg>
                    </span></span>
                    {/* <div className="_1fragemk9 _16s97g7be _16s97g77x"></div> */}

                  </span>
                </Link>
                <span>
                  <div className="_1ip0g651 _1fragemkb _1fragemir _1frageml5 _1fragemln _1fragemmg">
                    <p translate="yes" className="_1x52f9s1 _1fragemir _1x52f9ss _1fragemkl _1x52f9s2 _1x52f9sh notranslate custom-margin-t">
                      AED441.00
                    </p>
                  </div>
                </span>
              </button>
              <div className={`_94sxtb1 _1fragempz _1fragemq1 _1fragemir _1fragemqz _1fragemr3 _1fragemqt ${isSummaryVisible ? 'phone-product-visible' : 'phone-product-hidden'}`}>
                <div>
                  <div className='nn63l _1fragemjt _1fragemjr'>
                    <div className='uA_RC'>
                      <div>
                        <section className='_1fragemjt _1fragemk5 _1fragemir'>
                          <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                            <div className='_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle'>
                              <section className='_1fragemjt _1fragemk5 _1fragemir'>
                                <div className='_1fragemjt _1fragemk5 _1fragemqk _1fragemir'>
                                  <h3 id='ResourceList4' className='n8k95w1 _1fragemir n8k95w4'>Shopping cart</h3>
                                </div>
                                <div aria-labelledby="ResourceList4" className='_6zbcq55 _1fragemk7 _1fragemkd _6zbcq56' role="table">
                                  <div role="row" className='_6zbcq524 _1fragemk7 _1fragem2i _6zbcq52b'>
                                    <div role="cell" className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd'>
                                      <div className="_1m6j2n32 _1fragemir _1fragemri _1m6j2n33" style={{ '--_1m6j2n30': 1 }}>
                                        <div className="_1h3po421 _1h3po423 _1fragemir" style={{ '--_1h3po420': 1 }}>
                                          <picture>
                                            <source
                                              media="(min-width: 0px)"
                                              srcSet="/images/blog-1.webp"
                                            />
                                            <img
                                              src="/images/blog-1.webp"
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
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _1fragemkg">
                                      <div className="_1fragemjt _1fragemk5 _1fragemir iZ894">
                                        <p className="_1x52f9s1 _1fragemir _1x52f9so _1fragemkj">9 AM - Pour Femme</p>
                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1frageml5 _1fragemln">
                                          <p className="_1x52f9s1 _1fragemir _1x52f9sm _1fragemki _1x52f9si">Eau De Perfum / 100 ML / Pour Femme</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _6zbcq53q">
                                      <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                        <span className="_19gi7yt0 _19gi7ytl _1fragemkj">2
                                          <div aria-hidden="true" className="_1fragemjt _1fragemk5 _1fragemir"> x</div>
                                        </span>
                                      </div>
                                    </div>
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd">
                                      <div className="_1fragemjt _1fragemk7 _1fragemkd _1fragemj6 _1fragemmb _1fragemir _16s97g741 bua0H" style={{ '--_16s97g73w': '6.4rem' }}>
                                        <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj notranslate">AED240.00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div role="row" className='_6zbcq524 _1fragemk7 _1fragem2i _6zbcq52b'>
                                    <div role="cell" className='_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd'>
                                      <div className="_1m6j2n32 _1fragemir _1fragemri _1m6j2n33" style={{ '--_1m6j2n30': 1 }}>
                                        <div className="_1h3po421 _1h3po423 _1fragemir" style={{ '--_1h3po420': 1 }}>
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
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _1fragemkg">
                                      <div className="_1fragemjt _1fragemk5 _1fragemir iZ894">
                                        <p className="_1x52f9s1 _1fragemir _1x52f9so _1fragemkj">9 AM - Pour Femme</p>
                                        <div className="_1ip0g651 _1fragemkb _1fragemir _1frageml5 _1fragemln">
                                          <p className="_1x52f9s1 _1fragemir _1x52f9sm _1fragemki _1x52f9si">Eau De Perfum / 100 ML / Pour Femme</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmb _6zbcq53q">
                                      <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                        <span className="_19gi7yt0 _19gi7ytl _1fragemkj">2
                                          <div aria-hidden="true" className="_1fragemjt _1fragemk5 _1fragemir"> x</div>
                                        </span>
                                      </div>
                                    </div>
                                    <div role="cell" className="_6zbcq53s _1fragemk7 _1fragemkd _1fragemmd">
                                      <div className="_1fragemjt _1fragemk7 _1fragemkd _1fragemj6 _1fragemmb _1fragemir _16s97g741 bua0H" style={{ '--_16s97g73w': '6.4rem' }}>
                                        <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj notranslate">AED240.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                            <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemkw _1fragemle">
                              <section className="_1fragemjt _1fragemk5 _1fragemir">
                                <div className="_1ip0g651 _1fragemkb _1fragemir _1fragemku _1fragemlc">
                                  <form action="" method="POST" noValidate id="Form6" className="_1fragemk6">
                                    <div className="_1fragemir">
                                      <div className="_1fragemir _1fragemkb _1fragemkq _1fragemlc _1fragemlp _16s97g7f _16s97g7p _16s97g71j _16s97g71t" style={{ '--_16s97g7a': '1fr', '--_16s97g7k': 'minmax(auto, max-content)', '--_16s97g71e': 'minmax(0, 1fr) minmax(auto, max-content)', '--_16s97g71o': 'minmax(auto, max-content)' }}>
                                        <div className="_7ozb2u2 _1fragemkq _1frageml8 _1fragemir _1fragemkb _10vrn9p1 _10vrn9p0 _10vrn9p4 _1fragemju">
                                          <div className="_1fragemir">
                                            <label id="TextField13-label" htmlFor="TextField13" className="cektnc3 _1fragemih _1fragemqj _1fragemq2 _1fragemr8 _1fragemqx _1fragemqs _1fragemr6">
                                              <span className="cektnc9"><span className="rermvf1 _1fragempz _1fragemq1 _1fragemk5">Discount code or gift card</span></span>
                                            </label>
                                            <div className="_7ozb2u6 _1fragemir _1fragemkb _1fragemk4 _1fragemqx _1fragemqs _1fragemr6 _1fragemr7 _7ozb2uc _1fragemju _1fragemre _7ozb2ul _7ozb2uh">
                                              <input id="TextField13" name="reductions" placeholder="Discount code or gift card" type="text" aria-labelledby="TextField13-label" className="_7ozb2uq _1fragemir _1fragemr8 _1fragemm9 _1fragemqi _7ozb2ur _7ozb2u11 _7ozb2u1j" />
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" disabled aria-label="Apply Discount Code" className="QT4by rqC98 EbLsk _7QHNJ VDIfJ janiy Fox6W hlBcn">
                                          <span className="AjwsM">Apply</span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                      <button type="submit" tabIndex="-1" aria-hidden="true">Submit</button>
                                    </div>
                                  </form>
                                </div>
                              </section>
                            </div>
                            <section className="_1fragemjt _1fragemk5 _1fragemir">
                              <div className="_1fragemjt _1fragemk5 _1fragemqk _1fragemir">
                                <h3 id="MoneyLine-Heading5" className="n8k95w1 _1fragemir n8k95w4">Cost summary</h3>
                              </div>
                              <div role="table" aria-labelledby="MoneyLine-Heading5" className="nfgb6p0">
                                <div role="row" className="_1qy6ue61 _1fragemkb _1qy6ue65">
                                  <div role="rowheader" className="_1qy6ue67">
                                    <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Subtotal</span>
                                  </div>
                                  <div role="cell" className="_1qy6ue68">
                                    <span translate="yes" className="_19gi7yt0 _19gi7ytl _1fragemkj _19gi7yt1 notranslate">AED420.00</span>
                                  </div>
                                </div>
                                <div role="row" className="_1qy6ue61 _1fragemkb _1qy6ue65">
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
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path>
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
                                <div role="row" className="_1qy6ue61 _1fragemkb _1qy6ue65">
                                  <div role="rowheader" className="_1qy6ue67">
                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                      <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemkq _1frageml8 _1fragemj1 _1fragemj5 _1fragemmd">

                                        <span className="_19gi7yt0 _19gi7ytl _1fragemkj">Estimated taxes</span>
                                        <button type="button" className="_1xqelvi1 _1fragemk3 _1fragemk5 _1fragemir _1fragemqn _1fragemqx _1fragemqs _1fragemr6 _1fragemk7 _1fragemj8">
                                          <span className="_1xqelvi2">
                                            <span className="_1fragemm9 _1fragem2i _1fragemhs _1fragemhn a8x1wu3 _1fragemk5 a8x1wuh a8x1wum">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-label="More information" className="a8x1wuo _1fragemk5 _1fragemm9 _1fragemhs _1fragemhn">
                                                <circle cx="7" cy="7" r="5.6"></circle>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path>
                                                <circle cx="7" cy="9.7" r="0.1"></circle>
                                              </svg>
                                            </span>
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div role="cell" className="_1qy6ue68">
                                    <div className="_1fragemk7 _1fragemir _1fragemmd">
                                      <div className="_5uqybw2 _1fragemk7 _1fragemhx _1fragemks _1fragemla _1fragemj3 _1fragemj7 _1fragemmd">
                                        <span className="_19gi7yt0 _19gi7ytl _1fragemkj _19gi7yt1">AED21.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="row" className="_1x41w3p1 _1fragemkb _1fragemj5 _1x41w3p5">
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
                            </section>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Sooyq handlePopup={handlePopup} />
          </div>
        </div>
      </div>
      <Popup isOpen={isopenPopupId} handlePopup={handlePopup} />
    </>
  )
}

export default index
