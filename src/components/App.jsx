import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import VideoDetailPage from "../pages/VideoDetailPage.jsx";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://tokopedia-play-api-clone-production.up.railway.app/api/videos"
      )
      .then((response) => {
        setVideos(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) return null;

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage videos={videos} />} />
          <Route path="/videos/:id" element={<VideoDetailPage />} />
        </Routes>
      </main>
    </>
  );
}
