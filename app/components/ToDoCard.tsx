import React from 'react'
import Button from './Button'
import Card from './Card';

export interface ToDo {
    id: number;
    title: string;
    completed: string;
}


const ToDoCard = (props: ToDo) => {
    return (
        <Card passedData={ } />
    )
}

export default ToDoCard
