import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    content: "",
    userId: "",
  });
  console.log(post);
  const { title, content, userId } = post;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (title && content) {
      dispatch(postAdded(post));
      setPost({ title: "", content: "", userId: "" });
    }
  };

  //getting users details from redux store
  const users = useSelector(selectAllUsers);
  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  //checking all inputs fields are filled or not
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <div>
      <h2>Add A New Post</h2>
      <TextField
        label="Post Title"
        inputProps={{
          type: "text",
          placeholder: "Enter post title",
          name: "title",
        }}
        value={title}
        onChange={handleChange}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="postAuther">Author</label>
        <select id="postAuther" name="userId" onChange={handleChange}>
          <option value=""></option>
          {userOptions}
        </select>
      </div>
      <TextField
        label="Post Content"
        inputProps={{
          type: "text",
          placeholder: "Enter post Content",
          name: "content",
        }}
        value={content}
        onChange={handleChange}
      />
      <Button
        onclick={handleSubmit}
        buttonProps={{ type: "button", disabled: !canSave }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddPostForm;
