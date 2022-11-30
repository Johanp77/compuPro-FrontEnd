import React from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../context'
import useForm from '../../hooks/useForm'

const RegisterForm = () => {

  ////: Fix the problem with empty fields when the data is send to the server.
  // TODO: Set the default value of client_address to "-"

  const [formValue, handleInputChange, rest] = useForm({
    user_name: '',
    email: '',
    password: '',
    client_address: '-',
    client_phone: null
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input name="user_name" placeholder="Enter Name" value={user_name} type="text" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={email} type="email" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" value={password} type="password" onChange={handleInputChange} required />
        </div>
        <div>
          <label>client_address</label>
          <input namee="client_address" value={client_address} type="text" onChange={handleInputChange} />
        </div>
        <div>
          <label>client_phone</label>
          <input name="client_phone" value={client_phone} type="text" onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to='/login'>Login here</Link>
      </div>
    </div>
  )
}

export default RegisterForm

// onClick={() => { handleSubmit() }}