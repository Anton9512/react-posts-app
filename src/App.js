import { useState } from "react";
import PostItem from "./components/PostItem";
import "./App.css";

function App() {
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ");

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JS1", body: "Description1" }} />
    </div>
  );
}

export default App;
