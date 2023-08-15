import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    Grid,
} from "@mui/material";
import ProductsList from "../components/ProductsList";
import CommentsList from "../components/CommentsList";
import VideoDetail from "../components/VideoDetail";
import CommentInput from "../components/CommentInput";

export default function VideoDetailPage() {
    const {id} = useParams();
    const [video, setVideo] = useState(null);
    const [products, setProducts] = useState([]);
    const [comments, setComments] = useState([]);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const videoResponse = await axios.get(`http://localhost:3080/api/videos/${id}`);
            const productsResponse = await axios.get(`http://localhost:3080/api/videos/${id}/products`);
            const commentsResponse = await axios.get(`http://localhost:3080/api/videos/${id}/comments`);

            setVideo(videoResponse.data.data);
            setProducts(productsResponse.data.data);
            setComments(commentsResponse.data.data);
            setInitializing(false);
        }
        fetchData();

    }, []);

    const onAddComment = async ({ username, comment }) => {
        await axios.post(`http://localhost:3080/api/videos/${id}/comments`, {
            username: username,
            comment: comment
        });

        setComments([...comments, {username, comment}]);
        // window.location.reload();
    };

    // const addComment = async ({ username, comment }) => {
    //     await axios.post(`http://localhost:3080/api/videos/${id}/comments`, {
    //         username: username,
    //         comment: comment
    //     })
    // }

    // const onAddComment = async ({ username, comment }) => {
    //     await addComment({ username, comment });
    //     window.location.reload();
    // }
    // const handleSubmitComment = (event, username, comment) => {
    //     event.preventDefault();
    //     if (username === '' || comment === '') {
    //         alert('Username and Comment cannot be empty');
    //         return;
    //     }

    //     axios.post(`http://localhost:3080/api/videos/${id}/comments`, {
    //             username: username,
    //             comment: comment
    //     }).then(response => {
    //         console.log(response.data.data);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    if (initializing) return null;

    return (
        <Grid container spacing={2} sx={{ mt:2 }}>
            <Grid item xs={3}>
                <ProductsList products={products}/>
            </Grid>
            <Grid item xs={6}>
                <VideoDetail video={video} />
            </Grid>
            <Grid item xs={3}>
                <CommentsList comments={comments} />
                <CommentInput addComment={onAddComment}/>
            </Grid>
        </Grid>
    )
}