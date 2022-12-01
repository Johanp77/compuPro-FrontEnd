import React from 'react'
import RegisterForm from '../components/Auth&Users/RegisterForm'
import Footer from '../components/global/Footer'
import NavBar from '../components/global/NavBar'
import styles from '../styles/authStyles.module.css'

const Register = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={styles.register_main_container}>
                <h1>Register zone</h1>
                <div>
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register