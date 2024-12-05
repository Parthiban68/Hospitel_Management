import React from 'react'
import Carousel from '../pages/Carousel'
import Departments from '../pages/Departments'
import Events from '../pages/Events'
import Footer from '../pages/Footer'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Departments/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default Home