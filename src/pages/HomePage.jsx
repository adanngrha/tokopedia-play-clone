import React from "react";
import {
    Container, Grid
} from "@mui/material";
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar.jsx";
import VidioItem from "../components/VideoItem.jsx";

const HomePage = ({ videos }) => {
    return (
        <>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt:10 }}>
            <Grid container spacing={2}>
                {videos.map((video) => (
                    <Grid item key={video._id} xs={4} sm={4} md={2} xl={2}>
                        <VidioItem id={video._id} url_thumbnail={video.url_thumbnail} title={video.title}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    );
}

HomePage.propTypes = {
    videos: PropTypes.array.isRequired,
}

export default HomePage;