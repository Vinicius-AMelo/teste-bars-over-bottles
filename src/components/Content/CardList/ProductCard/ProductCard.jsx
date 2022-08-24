/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import './ProductCard.scss'

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.photo} alt="" />
      <div className="infos">
        <p id="name">{product.name}</p>
        <p>R$ {product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
