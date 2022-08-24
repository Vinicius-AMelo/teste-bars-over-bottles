/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import './ProductCard.scss'

import { FaRegHeart } from 'react-icons/fa'

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.photo} alt="" />
      <div className="infos">
        <p id="name">{product.name}</p>
        <p id="price">R$ {product.price}</p>
        <FaRegHeart id="heart" />
      </div>
    </div>
  )
}

export default ProductCard
