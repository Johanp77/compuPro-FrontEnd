import React, { useState, useContext, useEffect } from "react";
import { GetProducts } from "./context";

const userContext = React.createContext();
const userToggleContext = React.createContext();


const productContext = React.createContext();


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

    useEffect(() => {
        const request = fetch("http://localhost:8080/api/products", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }
        })


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

    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: 'Luis',
                email: 'luis@mail.com'
            });
        }
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}