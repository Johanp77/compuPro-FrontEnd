import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/Auth&Users/LoginForm'
import NavBar from '../components/global/NavBar'
import styles from '../styles/authStyles.module.css'

const Login = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={styles.login_main_container}>
                <h1>Login</h1>
                <div>
                    <LoginForm />
                </div>
                <div className={styles.second_child_main_container}>
                    <p className={styles.suggestion_login}>Dont you have an account yet?</p>
                    <Link className={styles.redirect_register} to='/register'>Register here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login