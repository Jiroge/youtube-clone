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

        <div style={{ display: "block", width: "80vw" }}>
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "990px", height: "680px", borderRadius: "10px" }}
          />
          <div style={{display:"flex", justifyContent: "space-between", width: "990px"}}>
            <p>{data.view}</p>
            <p>{data.timeRelease}</p>
          </div>
          <h1>{data.title}</h1>
          <p>{data.detail}</p>
        </div>
      </div>
    </>
  );
}
