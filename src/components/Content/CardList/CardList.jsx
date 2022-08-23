import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import './CardList.scss'

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

function CardList() {
  return (
    <main className="ytr">
      <div className="main_products">
        {arr.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  )
}

export default CardList
