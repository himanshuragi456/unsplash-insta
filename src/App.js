import { useState } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import SearchBar from "./components/SearchBar";

function App() {
  const [SearchKeyword, setSearchKeyword] = useState(null);

  return (
    <div className="App">
      <SearchBar value={SearchKeyword} setValue={setSearchKeyword} />
      {SearchKeyword && <Posts keyword={SearchKeyword} />}
    </div>
  );
}

export default App;
