import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

const VideoItem = ({ id, url_thumbnail, title }) => {
  return (
    <Link to={`videos/${id}`}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: "140%",
          }}
          image={url_thumbnail}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography color="white">{title}</Typography>
          </CardContent>
        </CardMedia>
      </Card>
    </Link>
  );
};

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  url_thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoItem;
