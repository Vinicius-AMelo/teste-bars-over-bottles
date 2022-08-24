import React from 'react'
import CardList from '../CardList/CardList'
import HomePictures from './HomePictures'
import Button from '../../Button/Button'

function HomeContent() {
  return (
    <main className="main_content">
      <div className="banner">
        <span>a</span>
      </div>
      <h1>TENDÊNCIAS</h1>
      <HomePictures />
      <hr />
      <h1>POPULARES</h1>
      <CardList />
      <Button text="Ver mais produtos" />
    </main>
  )
}

export default HomeContent
