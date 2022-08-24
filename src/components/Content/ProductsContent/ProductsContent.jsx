import React from 'react'

import CardList from '../CardList/CardList'
import './ProductsContent.scss'
import img from '../../../assets/images/image.jpg'
import Button from '../../Button/Button'

function ProductsContent() {
  return (
    <main className="products_content">
      <span className="faixa">
        <p>Home - </p>
        <p>Blusas e Camisas - </p>
        <p>Gravida Est Quis Euismod</p>
      </span>
      <article className="content">
        <img src={img} alt="a" />
        <article className="infos">
          <h1 className="name">Product Est Quis Euismod</h1>
          <h1>R$ 155.99</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aperiam magni consequatur minima maiores optio commodi pariatur
            nesciunt eos natus officia excepturi quidem, quas nemo voluptate
            sunt explicabo magnam omnis.
          </p>
          <hr />
          <p>CORES</p>
          <ul className="cores">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <p>TAMANHOS</p>
          <ul>
            <li>P</li>
            <li>M</li>
            <li>G</li>
            <li>XG</li>
            <li>XXG</li>
          </ul>
          <form>
            <input type="number" />
            <Button text="Comprar" />
          </form>
          <hr />
          <h4>Descriçao</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            ut, obcaecati laborum quisquam omnis necessitatibus, voluptas
            distinctio maiores eaque voluptatem facere! Maxime odit cum animi
            alias aliquid nesciunt earum atque.
          </p>
          <hr />
          <h4>Especificações</h4>
          <hr />
        </article>
      </article>
      <h1 id="relational_products">PRODUTOS RELACIONADOS</h1>
      <CardList />
    </main>
  )
}

export default ProductsContent
