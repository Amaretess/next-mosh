'use client';

import React, { ReactNode } from 'react'

const Button = ({ children }: {
    children: string;
}): React.ReactNode => {
    return (
        <button className='btn btn-primary' onClick={() => console.log('click')} >{children}</button>
    )
}

export default Button
