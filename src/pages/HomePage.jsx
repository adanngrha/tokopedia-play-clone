import {
    Container, Grid, Card,
    CardContent, Typography, CardMedia,
} from "@mui/material";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar.jsx";
import React from "react";

const HomePage = ({ videos }) => {
    return (
        <>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt:10 }}>
            <Grid container spacing={2}>
                {videos.map((card) => (
                    <Grid item key={card._id} xs={4} sm={4} md={2} xl={2}>
                        <Link to={`videos/${card._id}`} >
                            <Card
                                sx={{
                                    height: '100%', display: 'flex',
                                    flexDirection: 'column', borderRadius: '10px',
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '140%',
                                    }}

                                    image={card.url_thumbnail}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography color='white'>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                </CardMedia>

                            </Card>
                        </Link>
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