import React from 'react'
import styles from '../../styles/globalStyles.module.css'
import logo from './logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <a
                className={styles.link}
                href="https://github.com/Johanp77"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    Web page designed by <strong>Johan Castañeda</strong>
                    {/* texto de ejemplo 1 */}
                </span>
                <span>
                    johanp877@gmail.com
                    {/* texto de ejemplo 2 */}
                </span>
            </a>
            <a
                href="https://es.reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.logo}>
                    <img src={logo} alt="React Logo" width={72} height={72}/>
                </span>
            </a>
    </footer>
  )
}

export default Footer