import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {
    TextField,
    CardContent,
    Card,
    Typography,
    CardMedia,
    Toolbar,
    Grid,
    FormControl,
    Box
} from "@mui/material";
import { MdKeyboardBackspace } from "react-icons/md";
import {Link} from "react-router-dom";
import {display} from "@mui/system";

export default function VideoDetailPage() {
    const {id} = useParams();
    const [video, setVideo] = React.useState(null);
    const [products, setProducts] = React.useState([]);
    const [comments, setComments] = React.useState([]);
    const [initializing, setInitializing] = React.useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const videoResponse = await axios.get(`https://sandbox-395908.et.r.appspot.com/api/videos/${id}`);
            const productsResponse = await axios.get(`https://sandbox-395908.et.r.appspot.com/api/videos/${id}/products`);

            setVideo(videoResponse.data.data);
            setProducts(productsResponse.data.data);
            setInitializing(false);
        }
        fetchData();

    }, []);

    useEffect(() => {
        axios.get(`https://sandbox-395908.et.r.appspot.com/api/videos/${id}/comments`).then(
            (response) => {
                setComments(response.data.data);
            }
        )

    }, [comments, setComments]);

    if (initializing) return null;

    return (
        <Grid container >
            <Grid
                sx={{
                    width: 250,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar variant="dense">
                    <Link to="/"> <MdKeyboardBackspace /> Back</Link>
                </Toolbar>
                <h3>Products</h3>

                {
                    products.map((product) => (
                        <Card key={product._id} sx={{ display: "flex" }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography>{product.title}</Typography>
                                <Typography>{product.price}</Typography>
                            </CardContent>
                            <CardMedia component="img" sx={{ width: 100}} image="https://m.media-amazon.com/images/I/51TJknV3NbL.jpg" />
                        </Card>
                        )
                    )
                }
            </Grid>
            <Grid sx={{ display:"flex", flexDirection: 'column',  alignItems:"center", justifyContent:"center" }}>
                <h1>{video.title}</h1>
                <iframe src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='640'
                        height='360'
                />
            </Grid>

            <Grid container direction="column" sx={{ width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                }, }} justify="flex-start" >
                <h3>Comments</h3>
                 {
                    comments.map((comment) => (
                            <div key={comment._id}>
                                <p>{comment.username}</p>
                                <p>{comment.comment}</p>
                            </div>
                        )
                    )
                }
                <FormControl >
                    <Grid container direction="row">
                        <Box>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                maxRows={4}
                            />
                        </Box>
                        <button>
                            Submit
                        </button>
                    </Grid>

                </FormControl>
            </Grid>
        </Grid>
    )
}