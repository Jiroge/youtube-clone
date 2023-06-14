import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardStyle2(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", margin: "15px", cursor: "pointer" }}
      onClick={() => navigate("/Content", { state: { data: props.content } })}
    >
      <img
        src={props.content.image}
        alt={props.content.title}
        style={{ width: "230px", height: "140px", borderRadius: "10px" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <h1 style={{ margin: 0, padding: 0 }}>{props.content.title}</h1>
        <p style={{ margin: 0, padding: 0, }}>
          {props.content.detail}
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: 0,
              marginRight: "15px",
              color: "#b5b5b5",
            }}
          >
            {props.content.view}
          </p>
          <p style={{ margin: 0, padding: 0, color: "#b5b5b5" }}>
            {props.content.timeRelease}
          </p>
        </div>
      </div>
    </div>
  );
}
