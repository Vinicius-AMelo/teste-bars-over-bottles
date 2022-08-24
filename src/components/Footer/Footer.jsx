import React from 'react'
import './Footer.scss'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTumblr,
  FaPinterestP,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="main_footer">
      <div>
        <ul>
          <li>CONTATO</li>
          <li>FRETES E ENTREGA</li>
          <li>COMO COMPRAR</li>
          <li>TROCAS E DEVOLUÇÕES</li>
          <li>SOBRE</li>
          <li>NA MÍDIA</li>
          <li>SEGURANÇA</li>
          <li>POLÍTICAS</li>
        </ul>
        <span>
          <p>CADASTRE-SE E RECEBA NOSSAS NOVIDADES</p>
          <button type="button">CADASTRAR</button>
        </span>
      </div>
      <hr />
      <footer>
        <p>COPYRIGHT @ 2022</p>
        <ul>
          <li>FAQ</li>
          <li>MINHA CONTA</li>
          <li>MEUS PEDIDOS</li>
        </ul>
        <ul className="icons">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTumblr />
          </li>
          <li>
            <FaPinterestP />
          </li>
        </ul>
      </footer>
    </footer>
  )
}

export default Footer
