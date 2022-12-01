import React from 'react'
import NavBar from '../components/global/NavBar'
import SliderProducts from '../components/SliderProducts'
import { GetProducts } from '../context'
import styles from '../styles/store.module.css'


const Store = () => {
  return (
    // GetProducts(),
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container_slider}>
      <h1>Welcome to CompuPro Store!</h1>
      {/* <div> */}
        <SliderProducts />
      {/* </div> */}
      </div>
    </div>
  )
}

export default Store