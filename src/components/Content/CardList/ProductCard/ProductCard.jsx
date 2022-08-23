import React from 'react'
import './ProductCard.scss'

function ProductCard({ product }) {
  return (
    <div className="card">
      <div />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductCard
