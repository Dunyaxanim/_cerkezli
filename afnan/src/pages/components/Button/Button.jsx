import React from 'react'
import { Link } from 'react-router-dom';
const Button = ({ text , to}) => {
    return (
        <div className='Container'>
            <div className='SectionFooter'>
                <Link to={to} className="Button Button--primary">
                    {text}
                </Link>
            </div>
        </div>
    )
}

export default Button
