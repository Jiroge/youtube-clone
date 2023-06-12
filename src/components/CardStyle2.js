import React from "react";

export default function CardStyle2(props) {
  return (
    <div style={{ display: "flex", margin: "15px" }}>
      <img
        src={props.content.image}
        alt={props.content.title}
        style={{ width: "230px", height: "140px", borderRadius: "10px" }}
      />
      <div style={{marginLeft: "10px"}}>
        <h1 style={{ margin: 0, padding: 0 }}>{props.content.title}</h1>
        <p style={{ margin: 0, padding: 0 }}>{props.content.detail}</p>
        <div
          style={{
            display: "flex",
          }}
        >
          <p style={{ margin: 0, padding: 0, marginRight: "15px"}}>{props.content.view}</p>
          <p style={{ margin: 0, padding: 0 }}>{props.content.timeRelease}</p>
        </div>
      </div>
    </div>
  );
}
