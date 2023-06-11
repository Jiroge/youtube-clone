import React from "react";

export default function CardStyle1(props) {
  return (
    <div style={{ margin: "15px" }}>
      <img
        src={props.content.image}
        alt={props.content.title}
        style={{ width: "320px", height: "220px", borderRadius: "10px" }}
      />
      <h1 style={{ margin: 0, padding: 0 }}>{props.content.title}</h1>
      <p style={{ margin: 0, padding: 0 }}>{props.content.detail}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0, padding: 0 }}>{props.content.view}</p>
        <p style={{ margin: 0, padding: 0 }}>{props.content.timeRelease}</p>
      </div>
    </div>
  );
}
