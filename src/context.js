import { createContext, useEffect, useState } from "react";


export async function getUsers() {
    // const request = await fetch("http://localhost:8080/api/users",{
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json",
    //         "content-type": "application/json"
    //     }
    // })
    // const users = await request.json()

    // console.log(users);
}

// const dataProducts = createContext({})


async function requestAsync(promise){
    const request = await fetch("http://localhost:8080/api/products", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        }
    })
}

export function GetProducts(promise) {


    requestAsync(promise).then(data => {
        console.log(data);
    })

    // .then(dataProducts.Provider)
    // const products = await request.json()

    // setProducts(products)
    // .then()


    // setValue(products)

    // console.log(products);
    // console.log(dataProducts)
    // return null;
}

export const headers = () => {
    return {
        "Accept": "application/json",
        "content-type": "application/json",
        "Authorization": "localStorage.token"
    }
}

export async function deleteUser(userData) {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Are you sure you want to delete this user?')) {
        return;
    }

    const request = await fetch("http://localhost:8080/api/users" + userData.id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json",
            "Authorization": "localStorage.token"
        }
    })

}

export async function createUser(userData) {
    const request = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const users = await request.json()
}



export async function login(userData) {
    const request = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const response = await request.text()

    if (response !== "FAIL") {
        localStorage.token = response;
        localStorage.email = userData.email;
        alert("Bienvenido")
    } else {
        alert("Incorrect credentials")
    }

}