import React, { useState } from "react";
import { Box, Grid, TextField, Button, Paper } from "@mui/material";
import PropTypes from 'prop-types';

const CommentInput = ({ addComment }) => {
  const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    return [value, onValueChangeHandler];
  }

  const [username, onUsernameChange] = useInput('');
  const [comment, onCommentChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (username === '' || comment === '') {
      alert('Username and comment are required!');
      return;
    }

    addComment({
      username: username,
      comment: comment,
    });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Box elevation={3} sx={{
        position: 'fixed',
        bottom: 2,
        right: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 330,
      }}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={onUsernameChange}
      />
      <TextField
        label="Comment"
        variant="outlined"
        multiline
        rows={3}
        value={comment}
        onChange={onCommentChange}
      />
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </Box>
    </form>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
}

export default CommentInput;