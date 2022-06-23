import { useRef, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

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
  const [post, setPost] = useState({ title: "", body: "" });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewEvent = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание"
        />
        <MyButton onClick={addNewEvent}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
