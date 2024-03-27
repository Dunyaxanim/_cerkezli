import React from 'react'
import ProductComponents from './Components'
import { useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    return (
        <main id='main' role='main'>
            <ProductComponents id={id} />
        </main>
    )
}

export default Product
