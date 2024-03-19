import React from 'react'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard'

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
        <div className='product-card' >
          <ProductCard />
        </div>
      </main>
    </div>
  )
}

export default Home
