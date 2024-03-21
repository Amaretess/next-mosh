import React from 'react'
import Button from './Button'

type data = {
    title: string;
    description: string;
}

const Card = (passedData: data, children: string) => {
    return (
        <div className="card">
            <img src="#" className="card-img-top" />
            <div className="card-body">
                <h3>{passedData.title}</h3>
                <p>{passedData.description}</p>
                <Button >{children}</Button>
                <Button>{children}</Button>
            </div>
        </div>
    )
}

export default Card;