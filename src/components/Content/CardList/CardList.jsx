import React from 'react'

import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard/ProductCard'
import './CardList.scss'

const arr = [
  {
    id: 1,
    name: 'Creative Adidas T-shirts',
    category: 'Women',
    price: 150.55,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/001.png',
  },
  {
    id: 2,
    name: 'Mango-Navy',
    category: 'Women',
    price: 190.99,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/002.png',
  },
  {
    id: 3,
    name: 'Gravida Est Quis Euismod',
    category: 'Women',
    price: 150.55,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/003.png',
  },
  {
    id: 4,
    name: 'Donec Condimentum Fer',
    category: 'Women',
    price: 310.05,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/004.png',
  },
  {
    id: 5,
    name: 'Creative Adidas T-shirts',
    category: 'Women',
    price: 150.55,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/005.png',
  },
  {
    id: 6,
    name: 'Mango-Navy',
    category: 'Women',
    price: 190.99,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/006.png',
  },
  {
    id: 7,
    name: 'Gravida Est Quis Euismod',
    category: 'Women',
    price: 150.55,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/007.png',
  },
  {
    id: 8,
    name: 'Donec Condimentum Fer',
    category: 'Women',
    price: 310.05,
    available: true,
    photo: 'https://bob-teste-front-end.herokuapp.com/images/products/008.png',
  },
]

function CardList() {
  return (
    <main className="ytr">
      <div className="main_products">
        {arr.map((product, index) => (
          <NavLink to="/Products">
            <ProductCard key={index} product={product} />
          </NavLink>
        ))}
      </div>
    </main>
  )
}

export default CardList
