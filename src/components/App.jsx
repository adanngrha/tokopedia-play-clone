import React from 'react';
import Navbar from "./Navbar.jsx";
import HomePage from "../pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import VideoDetailPage from "../pages/VideoDetailPage.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/videos/:id" element={ <VideoDetailPage /> } />
                </Routes>
            </main>
        </>
    )
}