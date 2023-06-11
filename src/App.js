import React from "react";

import Navbar from "./Navbar";
import LeftMenuBar from "./LeftMenuBar";
import Recommended from "./Main-recommended";

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