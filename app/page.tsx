import React from 'react'
import NavBar from './components/NavBar'
import ToDoCard, { ToDo } from './components/ToDoCard'
import Layout from './components/layout'
import getToDos from './hooks/getToDos'


const Home = () => {
  // :) const cardArray = [{ title: "Testing", description: "Testing1 description" }, { title: "Testing2", description: "Testing1 description" }];


  return (
    <Layout>
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
        <div className='product-card'>

        </div>
      </main>
    </Layout>
  )
}

export default Home
