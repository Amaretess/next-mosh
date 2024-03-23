import React from 'react'
import Card from './Card';

export interface ToDos {
    toDos: ToDo[];
}
export interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}


const ToDoCard = ({ toDos }: ToDos) => {

    return (
        <>
            {toDos.map((todo) => (
                <Card title={todo.title} description={todo.completed} />
            ))}
        </>
    )
}

export default ToDoCard;
