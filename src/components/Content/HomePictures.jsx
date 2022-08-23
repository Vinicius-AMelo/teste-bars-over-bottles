import React from 'react'
import '../../scss/HomePictures.scss'

function HomePictures() {
  return (
    <div className="pictures">
      <div className="vertical_pictures">
        <span id="pictureOne">
          <p>MEN DRESSES</p>
          <a href="/">ver produtos</a>
        </span>
        <span id="pictureTwo">
          <p>JEWELLERY</p>
          <a href="/">ver produtos</a>
        </span>
      </div>
      <span id="pictureThree">
        <p>WOMEN DRESSES</p>
        <a href="/">ver produtos</a>
      </span>
      <div />
    </div>
  )
}

export default HomePictures
