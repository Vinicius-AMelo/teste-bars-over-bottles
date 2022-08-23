import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className="main_header">
      <span>
        <p>11 4191 4399</p>
        <h1>AVIATO</h1>
        <p>R$ 0.00</p>
      </span>
      <nav className="Header_nav">
        <ul>
          <li>HOME</li>
          <li>CAMISAS</li>
          <li>BLUSAS</li>
          <li>CALÇAS</li>
          <li>ACESSÓRIOS</li>
          <li>OUTLET</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
