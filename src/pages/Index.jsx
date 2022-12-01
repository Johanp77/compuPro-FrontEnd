import React from 'react'
import NavBar from '../components/global/NavBar'
import { getProducts } from '../context'

const Index = () => {
  return (
    // getProducts(),
    <div>
        <div>
            <NavBar/>
        </div>
        <h1>Index</h1>
    </div>
  )
}

export default Index