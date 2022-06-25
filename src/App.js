import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "aa",
      body: "бб",
    },
    {
      id: 2,
      title: "bb",
      body: "аа",
    },
    {
      id: 3,
      title: "cc",
      body: "гг",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((post1, post2) => post1[sort].localeCompare(post2[sort]))
    );
  };

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
