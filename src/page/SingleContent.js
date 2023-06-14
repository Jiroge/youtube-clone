import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/bar/Navbar";
import LeftMenuBar from "../components/bar/LeftMenuBar";

export default function SingleContent() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftMenuBar />

        <div style={{ display: "block", width: "80vw", marginLeft: "20px" }}>
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "990px", height: "680px", borderRadius: "10px" }}
          />
          <div style={{display:"flex", justifyContent: "space-between", width: "990px"}}>
            <p style={{ color: "#b5b5b5"}}>{data.view}</p>
            <p style={{ color: "#b5b5b5"}}>{data.timeRelease}</p>
          </div>
          <h1  style={{ margin: 0, padding: 0 }}>{data.title}</h1>
          <p>{data.detail}</p>
        </div>
      </div>
    </>
  );
}
