import React from "react";

import Navbar from "./Navbar";
import LeftMenuBar from "./LeftMenuBar";
import Main from "./Main";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftMenuBar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
