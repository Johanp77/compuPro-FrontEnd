import React from 'react'
import { login } from '../../context'
import useFormLogin from '../../hooks/useFormLogin'
import TextField from '@mui/material/TextField';
import styles from '../../styles/authStyles.module.css'


const LoginForm = () => {

  const [formValue, handleInputChange, rest] = useFormLogin({
    email: '',
    password: '',
  })


  const { email, password, } = formValue
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    rest()
    login(formValue)
  }


  return (
    <div >
      <form className={styles.login_form_container} onSubmit={handleSubmit}>
        <div>
          {/* <label>Email</label> */}
          <TextField label="Email" placeholder="Email here..." type="email" name="email" value={email} onChange={handleInputChange} required />
        </div>
        <div>
          {/* <label>Password</label> */}
          <TextField label="Password" placeholder="Password here..." type="password" name="password" value={password} onChange={handleInputChange} required />
        </div>
        <div>
          <button className={styles.button_submit_form_login} type="submit">Submit and login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm