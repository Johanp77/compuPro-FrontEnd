import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../context'
import useForm from '../../hooks/useForm'
import styles from '../../styles/authStyles.module.css'


const RegisterForm = () => {



  const [formValue, handleInputChange, rest] = useForm({
    user_name: '',
    email: '',
    password: '',
    client_address: undefined,
    client_phone: undefined
  })

  const { user_name, email, password, client_address, client_phone } = formValue
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    rest()
    createUser(formValue)
  }

  return (
    <div>
      <form className={styles.form_login_container} onSubmit={handleSubmit}>
        <div>
          {/* <label>Name</label> */}
          <TextField label="Name" name="user_name" placeholder="Name required" value={user_name} type="text" onChange={handleInputChange} required />
        </div>
        <div>
          {/* <label>Email</label> */}
          <TextField label="Email" name="email" placeholder="Email required" value={email} type="email" onChange={handleInputChange} required />
        </div>
        <div>
          {/* <label>Password</label> */}
          <TextField label="Password" name="password" placeholder="Password required" value={password} type="password" onChange={handleInputChange} required />
        </div>
        <div>
          {/* <label>client_address</label> */}
          <TextField label="Your Address" name="client_address" value={client_address} type="text" onChange={handleInputChange} />
        </div>
        <div>
          {/* <label>client_phone</label> */}
          <TextField label="Your Phone" name="client_phone" value={client_phone} type="text" onChange={handleInputChange} />
        </div>
        <div>
          <button className={styles.button_submit_form_login} type="submit">Submit</button>
        </div>
      </form>
      <div className={styles.container_redirect_login}>
        <p>Already have an account?</p>
        <Link className={styles.container_redirect_login} to='/login'>Login here</Link>
      </div>
    </div>
  )
}

export default RegisterForm

// onClick={() => { handleSubmit() }}