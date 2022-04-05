import React from "react";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostLists";

function App() {
  return (
    <div className="App" style={{ width: "100%", padding: "5em 10em" }}>
      <AddPostForm />
      <PostLists />
    </div>
  );
}

export default App;
