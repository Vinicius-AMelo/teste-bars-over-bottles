import React from 'react'
import './CategoriesContent.scss'
import { FaGripHorizontal, FaList } from 'react-icons/fa'
import CardList from '../CardList/CardList'

function CategoriesContent() {
  return (
    <main className="main_content">
      <div className="faixa">
        <h1>BLUSAS</h1>
        <span>
          <p>Home -</p>
          <p>Blusas e Camisas -</p>
          <p>Blusas</p>
        </span>
      </div>
      <ul className="categories">
        <li>FEMININO</li>
        <li>MASCULINO</li>
        <li>ACESSÓRIOS</li>
      </ul>
      <span className="ordenacao">
        <div>
          <p>
            ORDERNAR:
            <strong> NAME</strong>
          </p>
          <p>
            VIZUALIZAR:
            <strong> 10</strong>
          </p>
        </div>
        <p className="view">
          VIEW
          <FaGripHorizontal />
          <FaList />
        </p>
      </span>
      <CardList />
      <ul className="menu">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>...</li>
        <li>5</li>
        <li>&gt;</li>
      </ul>
    </main>
  )
}

export default CategoriesContent
