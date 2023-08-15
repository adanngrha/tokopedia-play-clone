import React from "react";
import { Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {
  return (
    <Grid sx={{ display:"flex", flexDirection: 'column',  alignItems:"center", justifyContent:"center", minHeight:"90vh"}}>
                <Typography variant="h4" sx={{ noWrap: true }}>
                    {video.title}
                </Typography>
                <iframe src={video.url_video}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='640'
                        height='360'
                />
      </Grid>
  )
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
}

export default VideoDetail;