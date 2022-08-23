import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import '../../scss/Home.scss'

const arr = [
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
  {
    name: 'Creative Adidas T-Shirts',
    price: 90.99,
  },
]

function HomeContent() {
  return (
    <main className="main_content">
      <div className="pictures1">
        <div>a</div>
      </div>
      <h1>TENDÊNCIAS</h1>
      <div className="pictures2">
        <div>
          <div className="picture1">a</div>
          <div className="picture1">a</div>
        </div>
        <div className="picture2">a</div>
        <div />
      </div>
      <div className="main_products">
        {arr.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <button type="button">VER MAIS PRODUTOS</button>
    </main>
  )
}

export default HomeContent
