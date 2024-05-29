import LeftPane from "./components/LeftPane/LeftPane.js";
import NavBar from "./components/Navigation/NavBar.js";
import PostPane from "./components/PostPane/PostPane.js";
import RightPane from "./components/RightPane/RightPane.js";
import Home from "./pages/home/Home.js";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <div className="bottomContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}

export default App;
