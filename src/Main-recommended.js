import React from "react";
import Trending from "./Main-trending";
import CardStyle1 from "./components/CardStyle1";

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
    <div style={{display: "block", margin: "0 20px", width: "80vw"}}>
      <h2 style={{margin: 0}}>Recommended</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {contents.map((content) => (
          <CardStyle1 content={content}/>
          ))}
      </div>
      <h2 style={{margin: 0}}>Trending</h2>
      <Trending />
    </div>
  );
}
