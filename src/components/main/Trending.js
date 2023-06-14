import React from "react";
import CardStyle1 from "../CardStyle1";

export default function Trending() {
  const contents = [
    {
      image: "https://shorturl.at/gjtBC",
      title: "title1",
      detail: "detail1",
      view: "1.5m",
      timeRelease: "5 days ago",
    },
    {
      image: "https://shorturl.at/uDLNQ",
      title: "title2",
      detail: "detail2",
      view: "958k",
      timeRelease: "3 days ago",
    },
    {
      image: "https://shorturl.at/juUX2",
      title: "title3",
      detail: "detail3",
      view: "897k",
      timeRelease: "4 days ago",
    },
    {
      image: "https://shorturl.at/ikpV3",
      title: "title4",
      detail: "detail4",
      view: "2.1m",
      timeRelease: "2 days ago",
    },
    {
      image: "https://shorturl.at/qrT23",
      title: "title5",
      detail: "detail5",
      view: "960k",
      timeRelease: "6 days ago",
    },
    {
      image: "https://shorturl.at/DLY48",
      title: "title6",
      detail: "detail6",
      view: "880k",
      timeRelease: "2 days ago",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        margin: "0 20px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        backgroundColor: "#fff",
        zIndex: 2,
        border: "1px solid",
        borderRadius: "10px"
      }}
    >
      {contents.map((content) => (
       <CardStyle1 content={content} key={content.image}/>
      ))}
    </div>
  );
}
