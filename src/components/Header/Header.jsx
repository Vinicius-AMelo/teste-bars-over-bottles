import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { FaPhone, FaShoppingBag } from 'react-icons/fa'

function Header() {
  return (
    <header className="main_header">
      <span>
        <p>
          <FaPhone />
          11 4191 4399
        </p>
        <h1>AVIATO</h1>
        <p>
          <FaShoppingBag />
          R$ 0.00
        </p>
      </span>
      <hr />
      <nav className="Header_nav">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">CAMISAS</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">BLUSAS</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">CALÇAS</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">ACESSÓRIOS</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">OUTLET</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
