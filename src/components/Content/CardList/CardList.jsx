import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import ProductCard from './ProductCard/ProductCard'
import './CardList.scss'

function CardList() {
  const [productList, setProductList] = useState()

  useEffect(() => {
    axios
      .get('https://bob-teste-front-end.herokuapp.com/api/products.json')
      .then((res) => {
        setProductList(res)
      })
      .catch((err) => err)
  }, [])
  return (
    <main className="ytr">
      <div className="main_products">
        {/* {productList.map((product) => (
          <ProductCard product={product} />
        ))} */}
        <p>a</p>

        {productList}
      </div>
    </main>
  )
}

export default CardList
