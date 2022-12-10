import React, { useState, useContext, useEffect } from "react";
import { GetProducts } from "./context";

const userContext = React.createContext();
const userToggleContext = React.createContext();


const productContext = React.createContext();

const pqrContext = React.createContext();

export function useNewPQR() {
    return useContext(pqrContext)
}


export function useGetProducts() {
    return useContext(productContext)
}

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}





export function StoreProvider(props) {


    const [productos, setProductos] = useState([])
    const [user, setUserStatus] = useState(null);


    const cambiaLogin = () => {
        if (user) {
            setUserStatus(null);
        } else {
            setUserStatus({
                name: 'Luis',
                email: 'luis@mail.com'
            });
        }
    }

    useEffect(() => {

        fetch('http://localhost:8080/api/products', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }

        })
            .then(response => response.json())
            .then(json => setProductos(json));

        //   .then(json => console.log(json));

        // const result = request.json().then()

        // .then(setProductos(request.json()))
        // if(request){
        // 	setProductos(producto)
        // .then(setProductos(request.json()))

        // }else{
        // 	setProductos([])
        // }
    },
        []);

    // let product = GetProducts()

    return (
        <productContext.Provider value={productos}>
            {props.children}
        </productContext.Provider>
    )
}




export function UserProvider(props) {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null)

    useEffect(() => {

        fetch("http://localhost:8080/api/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
                "Authorization": localStorage.token

            }
        })
            // const users = request.json()

            .then(response => response.json())
            .then(json => setUsers(json));
        console.log(users);

        fetch("http://localhost:8080/api/verification", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
                "Authorization": localStorage.token

            }
        })
            // const users = request.json()

            .then(response => response.json())
            .then(json => setUser(json));
        console.log(user);


    }, [])




    // .then(setUser(users))

    // const cambiaLogin = () => {
    //     if (user) {
    //         setUser(null);
    //     } else {
    //         setUser({
    //             name: 'Luis',
    //             email: 'luis@mail.com'
    //         });
    //     }
    // }


    return (
        <userContext.Provider value={user}>
            {/* <userToggleContext.Provider value={cambiaLogin}> */}
            {props.children}
            {/* </userToggleContext.Provider> */}
        </userContext.Provider>
    );
}

export function PQRProvider(props) {


    useEffect(() => {


        fetch("http://localhost:8080/api/newpqr", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
                "Authorization": localStorage.token
            },
            body: JSON.stringify(props)

        })
            // const users = request.json()

            .then(function (response) {
                if (response.ok) {
                    alert("Success")
                }
                else {
                    alert("Something was wrong")
                }
            })


    }, [PQRProvider])

    return (
        <pqrContext.Provider>
            {props.children}
        </pqrContext.Provider>
    )

}


export function LogOut() {

    localStorage.removeItem('email')
    // localStorage.removeItem('token')
    localStorage.setItem('token', "null")
    // localStorage.setItem('token', "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzAyMTI4OTQsImV4cCI6MTY3MDM4NTY5NH0.yA6zPWkRPKaITBXq-S5sZeCsB0gKWSdshhcQ6oUMPV4")


}