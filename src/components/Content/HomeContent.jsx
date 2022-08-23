import React from 'react'
import CardList from './CardList/CardList'
import HomePictures from './HomePictures'

function HomeContent() {
  return (
    <main className="main_content">
      <div className="banner">
        <span>a</span>
      </div>
      <h1>TENDÊNCIAS</h1>
      <HomePictures />
      <CardList />
      <button type="button">VER MAIS PRODUTOS</button>
    </main>
  )
}

export default HomeContent
