import React from 'react'
import Banner from '../components/Header/Banner'
import Products from '../components/products/Products'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonial/Testimonials'

const HomeScreen = () => {
    return (
        <main className="w-full">
            <Banner />
            <Services />
            <Products />
            <Testimonials />
        </main>
    )
}

export default HomeScreen
