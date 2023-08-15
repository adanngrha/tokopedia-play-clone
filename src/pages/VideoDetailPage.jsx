import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductsList from "../components/ProductsList";
import CommentsList from "../components/CommentsList";
import VideoDetail from "../components/VideoDetail";
import CommentInput from "../components/CommentInput";

export default function VideoDetailPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const videoResponse = await axios.get(
        `https://tokopedia-play-api-clone-production.up.railway.app/api/videos/${id}`
      );
      const productsResponse = await axios.get(
        `https://tokopedia-play-api-clone-production.up.railway.app/api/videos/${id}/products`
      );
      const commentsResponse = await axios.get(
        `https://tokopedia-play-api-clone-production.up.railway.app/api/videos/${id}/comments`
      );

      setVideo(videoResponse.data.data);
      setProducts(productsResponse.data.data);
      setComments(commentsResponse.data.data);
      setInitializing(false);
    };
    fetchData();
  }, []);

  const onAddComment = async ({ username, comment }) => {
    await axios.post(
      `https://tokopedia-play-api-clone-production.up.railway.app/api/videos/${id}/comments`,
      {
        username: username,
        comment: comment,
      }
    );

    setComments([...comments, { username, comment }]);
  };

  if (initializing) return null;

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={3}>
        <ProductsList products={products} />
      </Grid>
      <Grid item xs={6}>
        <VideoDetail video={video} />
      </Grid>
      <Grid item xs={3}>
        <CommentsList comments={comments} />
        <CommentInput addComment={onAddComment} />
      </Grid>
    </Grid>
  );
}
