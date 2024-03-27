import React from 'react'
import { Link } from 'react-router-dom'
const ContactPage = () => {
    return (
        <>
            <header className="PageHeader ok">
                <div className="SectionHeader SectionHeader--center">
                    <h1 className="SectionHeader__Heading Heading u-h1">CONTACT US</h1>
                </div>
            </header>
            <div className='PageContent PageContent--narrow Rte'>
                <h1>HEAD OFFICE</h1>
                <div>
                    <p>Afnan perfumes L.L.C.</p>
                    <p>P.O. Box 7771, Jurf Ind. Area 1, Ajman, U.A.E.</p>
                    <p>Contact No: +971 6 747 4441</p>
                    <p>Fax No: +971 6 747 4114</p>
                </div>
                <h1>
                    <strong>
                        <span >Are you an influencer, or you are interested in collaborating with us?</span>
                    </strong>
                </h1>
                <p>
                    <span>Please click the below link, follow our Instagram account @afnanperfumes and send a direct message to our social media team asking to be added to our Social List
                    </span>
                </p>
                <p>
                    <Link target="_blank" className='custom-link' to="/" rel="noopener noreferrer">https://instagram.com/afnanperfumes?utm_medium=copy_link</Link>
                </p>
                <h1>
                    <strong>If you want to submit your CV or become an;influencer/reviewer, please fill out the form below. </strong>
                </h1>
                <div className='aaa-form-builder-wholesale-registration custom-form-style'>
                    <form action="">
                        {/* <input type="hidden" name="container_id" defaultValue="" />
                        <input type="hidden" name="url" defaultValue="https://www.afnan.com/pages/contact-us" />
                        <input type="hidden" name="form_id" defaultValue="14402" />
                        <input type="hidden" name="form_domain" defaultValue="afnan-perfumes-l-l-c.myshopify.com" />
                        <input type="hidden" name="" defaultValue="Thank You!" className="success_msg" />
                        <input type="hidden" name="" defaultValue="https://www.instagram.com/afnanperfumes/" className="aaa_thankyoupageurl" />
                        <input type="hidden" name="uploadeLimit" className="formUploadLimit" defaultValue="100" />
                        <input type="hidden" name="allowefiletype" className="allowedfiletype" defaultValue="" />
                        <input type="hidden" name="conditionallogic" className="conditionallogic" defaultValue="" /> */}
                        <div className="fb-text form-group field-text-2021415295617">
                            <label htmlFor="text-2021415295617" className="fb-text-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                First Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                className="form-control custom-input w-full-custom"
                                name="text-2021415295617"
                                id="text-2021415295617"
                                aria-required="true"
                            />
                        </div>
                        <div className="fb-text form-group field-last-name">
                            <label htmlFor="last-name" className="fb-text-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                Last Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="form-control w-full-custom custom-input"
                                name="last-name"
                                id="last-name"
                                aria-required="true"
                            />
                        </div>
                        <div className='custom-two-input'>
                            <div className="custom-fb-country-code form-group field-aaa-customer-phone-number-country-code">
                                <label htmlFor="country-code" className="fb-country-code-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                    Country Code
                                </label>
                                <input
                                    type="text"
                                    id="country-code"
                                    name="aaa-customer-phone-number-country-code"
                                    className="aaa-customer-phone-number-country-code form-control custom-input"
                                    placeholder="country code(+1)"
                                    defaultValue=""
                                />
                            </div>
                            <div className="custom-fb-number form-group field-aaa-customer-phone-number">
                                <label htmlFor="aaa-customer-phone-number" className="fb-number-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control custom-input"
                                    name="aaa-customer-phone-number"
                                    id="aaa-customer-phone-number"
                                />
                            </div>
                        </div>
                        <div className="fb-email form-group field-text-1631114415977">
                            <label htmlFor="text-1631114415977" className="fb-email-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                className="form-control custom-input"
                                name="text-1631114415977"
                                id="text-1631114415977"
                                aria-required="true"
                            />
                        </div>
                        <div className="fb-select form-group field-aaa-form-builder-country field-country-1">
                            <label htmlFor="aaa-form-builder-country" className="fb-select-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                Country <span className="required">*</span>
                            </label>
                            <select
                                type="select"
                                required
                                className="form-control custom-input"
                                name="aaa-form-builder-country"
                                id="aaa-form-builder-country"
                                aria-required="true"
                            >
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Afghanistan">Afghanistan</option>
                            </select>
                        </div>
                        <div className="fb-text form-group field-aaa-customer-city">
                            <label htmlFor="aaa-customer-city" className="fb-text-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                City <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="form-control custom-input"
                                name="aaa-customer-city"
                                id="aaa-customer-city"
                                aria-required="true"
                            />
                        </div>
                        <div className="fb-select form-group field-select-1616409204213">
                            <label htmlFor="select-1616409204213" className="fb-select-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                How did you come to know about Afnan Perfumes? <span className="required">*</span>
                            </label>
                            <select
                                type="select"
                                required
                                className="form-control custom-input"
                                name="select-1616409204213"
                                id="select-1616409204213"
                                aria-required="true"
                            >
                                <option value="Social Media (IG, YT, FB, LI, TT)">Social Media (IG, YT, FB, LI, TT)</option>
                                <option value="Google Search">Google Search</option>
                                <option value="Magazine Advertising">Magazine Advertising</option>
                                <option value="Afnan Website">Afnan Website</option>
                                <option value="Friends & Family referral">Friends & Family referral</option>
                            </select>
                        </div>
                        <div className="fb-select form-group field-select-1658745535855">
                            <label htmlFor="select-1658745535855" className="fb-select-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                Inquiry Subject <span className="required">*</span>
                            </label>
                            <select
                                type="select"
                                required
                                className="form-control custom-input"
                                name="select-1658745535855"
                                id="select-1658745535855"
                                aria-required="true"
                            >
                                <option value="Influencers and collaborations">Influencers and collaborations</option>
                                <option value="Job Application">Job Application</option>
                            </select>
                        </div>
                        <div className="fb-undefined form-group field-textarea-1616409188373">
                            <label htmlFor="textarea-1616409188373" className="fb-textarea-label w-full-custom" style={{ color: 'rgb(106, 106, 106)' }}>
                                Please write your inquiry <span className="required">*</span>
                            </label>
                            <textarea
                                type="textarea"
                                required
                                rows="10"
                                className="form-control custom-input"
                                name="textarea-1616409188373"
                                id="textarea-1616409188373"
                                aria-required="true"
                            ></textarea>
                        </div>
                        <div className="fb-file form-group field-file-1666004820463">
                            <label htmlFor="file-1666004820463" className="fb-file-label" style={{ color: 'rgb(106, 106, 106)' }}>
                                File Upload
                            </label>
                            <input
                                type="file"
                                className="form-control custom-input"
                                name="file-1666004820463"
                                id="file-1666004820463"
                            />
                        </div>
                        <div className="fb-submit form-group field-button-1481029333721">
                            <button
                                type="submit"
                                className="button-input btn btn-default contact-button"
                                name="button-1481029333721"
                                style={{ default: 'default' }}
                                id="button-1481029333721"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage
