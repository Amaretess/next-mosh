import React from 'react'
import Button from './Button'

type data = {
    title: string;
    description: string;
}

const ProductCard = (passedData: data) => {
    return (
        <div className="card">
            <img src="#" className="card-img-top" />
            <div className="card-body">
                <h3>{passedData.title}</h3>
                <p>{passedData.description}</p>
                <Button >Add to cart</Button>
                <Button>Buy more</Button>
            </div>
        </div>
    )
}

export default ProductCard
