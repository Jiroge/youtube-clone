import Navbar from "./Navbar";
import LeftMenuBar from "./LeftMenuBar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftMenuBar />
        Learn React
      </div>
    </div>
  );
}

export default App;
