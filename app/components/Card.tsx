import React from 'react'
import Button from './Button'

interface Props {
    title: string;
    // UNION TYPE: This interface will accept description as a boolean or string so can be optimized
    description?: string | boolean; // optional paremeter
}


const Card = ({ title, description }: Props) => {
    return (
        <div className="card">
            <img src="#" className="card-img-top" />
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <Button >Add to Cart</Button>
            </div>
        </div>
    )
}

export default Card;