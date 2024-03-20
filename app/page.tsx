import React from 'react'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard'
import Layout from './components/layout'

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
        <div className='product-card' >
          <ProductCard />
        </div>
      </main>
    </Layout>
  )
}

export default Home
