import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/index.module.css'
import Logo from './Logo'
import UserMenu from '../Auth&Users/UserMenu'
import { useUserContext } from '../../Provider';


const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};




function UserUndefined() {
    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
                color="inherit"
                variant="h6"
                underline="none"
                sx={rightLink}
                href="/register"

            >
                {'Sign Up'}
            </Link>
            <Link
                variant="h6"
                underline="none"
                href="/login"
                sx={{ ...rightLink, color: '#F55139', mr: 2 }}
            >
                {'Log In'}
            </Link>


        </Box>
    )
}


function UserLogued() {

    // const isUserLogued = useMatch("/store2");
    // const dispatch = useDispatch();

    // const { userData } = useSelector(store => store.authReducers);

    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
            <Typography variant="p" color="white">
                Hola {localStorage.email}</Typography>
            {/* <UserMenu userImage={userData[0].photoURL} /> */}
            {/* <button onClick={() => (dispatch(logoutAsync()))}>LogOut</button> */}

        </Box>
    )
    // mostrar, ocultar contenido o hacer otra cosa

}


const NavBar2 = () => {


    // const value = useContext(UserContext);

    const user = useUserContext()


    return (
        <nav>
            <div className={styles.container_nav}>
                <div>
                    <div>
                        <Logo />
                    </div>
                </div>
                <div className={styles.container_links}>
                    <div>
                        {
                            user == null ?
                                <div>
                                </div>
                                :
                                <div>


                                </div>
                        }
                    </div>

                    <Link to='/register'> Register</Link>
                    <Link to='/login'> Login</Link>
                    <UserMenu />
                    <Link to='/'> Home</Link>
                    <Link to='/store'> Store</Link>
                    <Link to='/pqr'> PQR´s</Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar2