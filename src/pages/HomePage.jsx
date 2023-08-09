import {Container, Grid, Card,
    CardContent, Typography, CardMedia
} from "@mui/material";
import {Link} from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomePage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {cards.map((card) => (
                    <Grid item key={card} xs={4} sm={4} md={2} xl={2}>
                        <Link to="videos/1" >
                            <Card
                                sx={{
                                    height: '100%', display: 'flex',
                                    flexDirection: 'column', borderRadius: '10px',
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '150%',
                                    }}

                                    image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/05/portrait-lighting-landscape-photography-dps-3.jpg?resize=500%2C750&ssl=1"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default HomePage;