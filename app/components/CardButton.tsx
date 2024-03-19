'use client';

import React, { ReactNode } from 'react'

const CardButton = ({ children }: {
    children: string;
}): React.ReactNode => {
    return (
        <button onClick={() => console.log('click')} >{children}</button>
    )
}

export default CardButton
