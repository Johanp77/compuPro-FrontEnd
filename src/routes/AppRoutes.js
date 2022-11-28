import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Register from '../pages/Register'

const appRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={
                        <Register/>
                    }
                    />

                    <Route path="/" element={
                        <Index/>
                    }
                    />
                    <Route path="/login" element={
                        <Login />
                    }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default appRoutes