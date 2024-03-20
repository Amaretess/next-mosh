import React from 'react'
import Button from './Button'

const ProductCard = () => {
    return (
        <div className="card">
            <img src="#" className="card-img-top" />
            <div className="card-body">
                <h3>product title</h3>
                <p>product</p>
                <Button >Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard
