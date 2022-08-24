import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import './CardList.scss'

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
