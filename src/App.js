import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JS1",
      body: "Description1",
    },
    {
      id: 2,
      title: "JS2",
      body: "Description2",
    },
    {
      id: 3,
      title: "JS3",
      body: "Description3",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
