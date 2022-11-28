import React, { useEffect } from 'react'
import { getUsers } from '../context'
// import getUsers from '../context'

let response = []

const User = () => {

    // useEffect(() => {
    //     fetch("http://localhost:8080/user/2344")
    //     .then(response => response.json())
    //     .catch(err => console.log("OOF"))
    //     console.log(response)
    //     // return () => {

    //     // }
    // }, [])

    getUsers()
    return (
        <div>Users</div>
    )
}

export default User