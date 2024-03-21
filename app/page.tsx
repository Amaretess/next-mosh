import React from 'react'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard'
import Layout from './components/layout'

const Home = () => {
  const cardArray = [{ title: "Testing", description: "Testing1 description" }, { title: "Testing2", description: "Testing1 description" }];
  return (
    <Layout>
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
        <div className='product-card'>
          {cardArray.map(card => (
            <ProductCard title={card.title} description={card.description} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Home
