import React from 'react'
import RegisterForm from '../components/Auth&Users/RegisterForm'
import NavBar from '../components/global/NavBar'

const Register = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <h1>Register zone</h1>
            <RegisterForm />
        </div>
    )
}

export default Register