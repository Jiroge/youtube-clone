import React from "react";

import Navbar from "./components/bar/Navbar";
import LeftMenuBar from "./components/bar/LeftMenuBar";
import Recommended from "./components/main/Recommended";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex"}}>
        <LeftMenuBar />
        <Recommended />
      </div>
    </div>
  );
}