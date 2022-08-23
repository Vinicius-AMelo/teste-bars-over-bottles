import React from 'react'
import '../../scss/CategoriesContent.scss'
import CardList from './CardList/CardList'

function CategoriesContent() {
  return (
    <main className="main_content">
      <div>a</div>
      <ul>
        <li>FEMININO</li>
        <li>MASCULINO</li>
        <li>ACESSÓRIOS</li>
      </ul>
      <div>
        <span>
          <p>ORDERNAR: NAME</p>
          <p>VIZUALIZAR: 9</p>
        </span>
        <p>VIEW</p>
      </div>
      <CardList />
    </main>
  )
}

export default CategoriesContent
