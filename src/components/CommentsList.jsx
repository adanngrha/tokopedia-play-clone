import React, { useEffect, useRef } from "react";
import { Box, Toolbar, List, Typography, ListItem, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop =  listRef.current.scrollHeight;
    }
  }, [comments]);


  return (
    <Box sx={{ mr:2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>Comments</Typography>
      </Toolbar>
        <List ref={listRef} sx={{ width: '100%', maxWidth: 360, overflow: 'auto', position: 'relative', maxHeight: 340, height:"100%" }}>
          
          {
            comments.length === 0 ? (
                  <Typography sx={{ flexGrow: 1 , textAlign:"center"  }}>No comments yet</Typography>
            ) : (
                comments.map((comment) => (
                <div key={comment._id}>
                <ListItem alignItems="flex-start" dense>
            <ListItemText key={comment._id} primary={comment.username} secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {comment.comment}
              </Typography>
            </React.Fragment>
          } />
          </ListItem>
                </div>
                  )
              )
          )
          }
          
        </List>   
    </Box>
    )
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default CommentsList;