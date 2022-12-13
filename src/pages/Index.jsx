import React from 'react'
import NavBar2 from '../components/global/NavBar2'
import { getProducts } from '../context'
import styles from '../styles/index.module.css'

const Index = () => {
  return (
    // getProducts(),
    <div className={styles.index_background}>
      <div className={styles.index_navBar}>
        <NavBar2 />
      </div>
      <h1 className={styles.index_main_title}>¡Bienvenidos a CompuPro!</h1>
      <p className={styles.index_main_subtitle}>Una empresa enfocada en brindar soluciones tecnológicas a nuestros clientes.</p>

      <div className={styles.container_circles}>
        {/* <div className={styles.index_first_circle}>
          <div className={styles.index_first_circle_core}>

          </div>
        </div> */}
        {/* <div className={styles.index_first_circle}>
          <div className={styles.index_first_circle_core}></div>
        </div> */}

        <div className={styles.index_father_circle}>
          <div className={styles.index_loading_circle}>
          </div>
        <span className={styles.span_styles}>CompuPro</span>

        </div>

      </div>



      <div className={styles.father_animation_container}>
        {/* <div className={styles.animation_container}>

        </div> */}
      </div>
    </div>
  )
}

export default Index