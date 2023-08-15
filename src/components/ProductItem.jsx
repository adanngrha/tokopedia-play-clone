import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return (
    // <ListItem sx={{ display: "flex" }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //         <Typography>{product.title}</Typography>
    //         <Typography>{product.price}</Typography>
    //     </CardContent>
    //     <CardMedia component="img" sx={{ width: 100}} image="" />
    // </ListItem>
    <ListItem>
        <>
          <Avatar alt="Product" src={product.url_image} />
        </>
        <ListItemText primary={product.title} />
        <ListItemText primary={`Rp` + product.price} />
      </ListItem>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductItem;