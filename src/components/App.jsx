import React, {useEffect} from 'react';
import HomePage from "../pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import VideoDetailPage from "../pages/VideoDetailPage.jsx";
import axios from "axios";

export default function App() {
    const [loading , setLoading] = React.useState(true);
    const [videos, setVideos] = React.useState([]);


    useEffect(() => {
        axios.get('https://sandbox-395908.et.r.appspot.com/api/videos')
            .then((response) => {
                setVideos(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (loading) return null;

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={ <HomePage videos={videos} /> } />
                    <Route path="/videos/:id" element={ <VideoDetailPage /> } />
                </Routes>
            </main>
        </>
    )
}