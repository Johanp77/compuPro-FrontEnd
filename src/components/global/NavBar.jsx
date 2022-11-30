import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/globalStyles.module.css'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container_nav}>
        <div>
          <div>
            <Logo />
          </div>
        </div>
        <div className={styles.container_links}>
          <Link to='/'> Home</Link>
          <Link to='/register'> Register</Link>
          <Link to='/login'> Login</Link>
          <Link to='/store'> Store</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar