import React from 'react';
import ProductDetailComponents from './Components'
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const { id } = useParams();
    return (
        <main id='main' role='main'>
            <div className='mlvedaform'>
                <ProductDetailComponents id={id} />
            </div>
        </main>
    )
}

export default ProductDetail
