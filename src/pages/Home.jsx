import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../scss/Home.scss'
import HomeContent from '../components/Content/HomeContent'

function Home() {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  )
}

export default Home
