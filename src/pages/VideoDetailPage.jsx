import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function VideoDetailPage() {
    const {id} = useParams();
    const [video, setVideo] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/videos/${id}`)
            .then((response) => {
                setVideo(response.data.data);
                setInitializing(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (initializing) return null;

    return (
        <div>
            <h1>{video.title}</h1>
        </div>
    )
}