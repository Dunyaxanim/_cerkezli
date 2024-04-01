import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <main role='main' id='main'>
            <section>
                <div className='Container'>
                    <div className='PageContent PageContent--fitScreen PageContent--extraNarrow'>
                        <form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8" dataLoginWithShopSignIn="true" name="login" className="Form Form--spacingTight" style={{ display: 'block' }} onSubmit={handleSubmit}>
                            <input type="hidden" name="form_type" value="customer_login" />
                            <input type="hidden" name="utf8" value="✓" />
                            <header className="Form__Header">
                                <h1 className="Form__Title Heading u-h1">Login</h1>
                                <p className="Form__Legend">Please enter your e-mail and password:</p>
                            </header>
                            <div className="Form__Item">
                                <input type="email" className="Form__Input" name="customer[email]" required placeholder="Email" aria-label="Email" autoFocus />
                                <label className="Form__FloatingLabel">Email</label>
                            </div>

                            <div className="Form__Item">
                                <input type="password" className="Form__Input" name="customer[password]" required placeholder="Password" aria-label="Password" />
                                <label className="Form__FloatingLabel">Password</label>
                                <button type="button" className="Form__ItemHelp Link Link--primary" dataAction="toggle-recover-form">Forgot password?</button>
                            </div>

                            <button type="submit" className="Form__Submit Button Button--primary Button--full">Login</button>

                            <div className="Form__Hint Form__Hint--center">
                                <span className="Text--subdued">Don't have an account?</span>
                                <Link href="/register" className="Link Link--secondary">Create one</Link>
                            </div>
                            <input type="hidden" name="return_url" value="/account" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login
