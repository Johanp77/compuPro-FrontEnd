import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Store from '../pages/Store'

const appRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={
                        <Register />
                    }
                    />

                    <Route path="/" element={
                        <Index />
                    }
                    />
                    <Route path="/login" element={
                        <Login />
                    }
                    />
                    <Route path="/store" element={
                        <Store />
                    }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default appRoutes