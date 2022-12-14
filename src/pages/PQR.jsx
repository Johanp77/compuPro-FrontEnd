import React from 'react'
import FormPQR from '../components/FormPQR'
import Footer from '../components/global/Footer'
import NavBar from '../components/global/NavBar'
import styles from '../styles/PQRStyles.module.css'

const PQR = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className={styles.main_title}>Formulario de PQR</h1>
        <h2 className={styles.subtitle}>Estimado usuario, desde aquí usted podrá enviar una nueva petición, queja o recurso, por favor recuerde <strong>iniciar sesión</strong> antes de empezar con el relleno del formulario.</h2>
        <div className={styles.container_page_pqr_form}>
          <FormPQR />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PQR