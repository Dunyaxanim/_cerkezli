import React from 'react'

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <main id='id' role='id'>
            <section>
                <div className='Container'>
                    <div className='PageContent PageContent--fitScreen PageContent--extraNarrow'>
                        <form method="post" action="/account" id="create_customer" acceptCharset="UTF-8" name="create_customer" className="Form Form--spacingTight" onSubmit={handleSubmit}>
                            <input type="hidden" name="form_type" value="create_customer" />
                            <input type="hidden" name="utf8" value="✓" />
                            <header className="Form__Header">
                                <h1 className="Form__Title Heading u-h1">Register</h1>
                                <p className="Form__Legend">Please fill in the information below:</p>
                            </header>
                            <div className="Form__Item">
                                <input type="text" className="Form__Input" name="customer[first_name]" aria-label="First name" placeholder="First name" autoFocus />
                                <label className="Form__FloatingLabel">First name</label>
                            </div>

                            <div className="Form__Item">
                                <input type="text" className="Form__Input" name="customer[last_name]" aria-label="Last name" placeholder="Last name" />
                                <label className="Form__FloatingLabel">Last name</label>
                            </div>

                            <div className="Form__Item">
                                <input type="email" className="Form__Input" name="customer[email]" aria-label="Email" placeholder="Email" required />
                                <label className="Form__FloatingLabel">Email</label>
                            </div>

                            <div className="Form__Item">
                                <input type="password" className="Form__Input" name="customer[password]" aria-label="Password" placeholder="Password" required />
                                <label className="Form__FloatingLabel">Password</label>
                            </div>

                            <button type="submit" className="Form__Submit Button Button--primary Button--full">Create my account</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register
