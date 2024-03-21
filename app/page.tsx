import React from 'react'
import NavBar from './components/NavBar'
import ToDoCard, { ToDo } from './components/ToDoCard'
import Layout from './components/layout'


const Home = async () => {
  // :) const cardArray = [{ title: "Testing", description: "Testing1 description" }, { title: "Testing2", description: "Testing1 description" }];

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDo: ToDo[] = await res.json();


  return (
    <Layout>
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
        <div className='product-card'>
          {toDo.map(todo => (
            <ToDoCard title={todo.title} description={todo.completed} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Home
