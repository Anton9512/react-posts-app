import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { React, useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewEvent = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <h3>Создать пост</h3>
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
  );
};

export default PostForm;
