import React from "react";
import { List, Toolbar, Card, CardContent, CardMedia, Typography, Grid, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <Box sx={{ ml:2 }}>
        <Toolbar>
          <Link to="/">
          <MdArrowBack
            size={25}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </MdArrowBack>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="center">
            Products
          </Typography>
        </Toolbar>
            <div>
            {
                products.length === 0 ? ( <Typography sx={{ flexGrow: 1, textAlign:"center" }}>No products yet</Typography>
                ) : (
                    <List>
                    {
                        products.map((product) => (
                       <Card key={product._id} sx={{ display: 'flex', maxWidth: 345 }}>
                        <CardMedia image={product.url_image}
                            sx={{ width: 100, height: 100 }}
                        />
                        <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography>
                                {product.title}
                            </Typography>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.secondary">
                                Rp{product.price}
                            </Typography>
                        </CardContent>
                       </Card>
                    ))
                    }
                    </List>
                )
            }
            </div>
        <Grid>
    </Grid>
    </Box>
       
    )
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductsList;