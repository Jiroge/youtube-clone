import React from "react";
import Trending from "./Trending";
import WatchAgain from "./WatchAgain";
import CardStyle1 from "../CardStyle1";

export default function Recommended() {
  const contents = [
    {
      image: "https://shorturl.at/wxIQV",
      title: "title1",
      detail: "detail1",
      view: "207k",
      timeRelease: "8 days ago",
    },
    {
      image: "https://shorturl.at/cpAPQ",
      title: "title2",
      detail: "detail2",
      view: "392k",
      timeRelease: "5 months ago",
    },
    {
      image: "https://shorturl.at/almKS",
      title: "title3",
      detail: "detail3",
      view: "517k",
      timeRelease: "11 months ago",
    },
    {
      image: "https://shorturl.at/fMVW9",
      title: "title4",
      detail: "detail4",
      view: "115k",
      timeRelease: "2 years ago",
    },
    {
      image: "https://shorturl.at/agQU9",
      title: "title5",
      detail: "detail5",
      view: "60k",
      timeRelease: "6 months ago",
    },
    {
      image: "https://shorturl.at/krv07",
      title: "title6",
      detail: "detail6",
      view: "600k",
      timeRelease: "2 months ago",
    },
  ];
  return (
    <div style={{ display: "block", width: "80vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "75vh",
        }}
      >
        <div style={{ width: "70%", margin: "0 10px" }}>
          <h2 style={{ margin: 0 }}>Recommended</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {contents.map((content) => (
              <CardStyle1 content={content} key={content.image}/>
            ))}
          </div>
        </div>

        <WatchAgain />
      </div>
      <h2 style={{ margin: 0 }}>Trending</h2>
      <Trending />
    </div>
  );
}
