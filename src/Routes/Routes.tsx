import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage"
import ErrorPage from "../Components/ErrorPage"


const appRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default appRouter;