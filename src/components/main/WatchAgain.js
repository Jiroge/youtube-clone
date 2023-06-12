import React from "react";
import CardStyle2 from "../CardStyle2";

export default function WatchAgain() {
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
    <div style={{ width: "30%" }}>
      <h2 style={{ margin: 0 }}>Watch Again</h2>
      <div style={{ overflowY: "auto", whiteSpace: "nowrap", height: "100%"}}>
        {contents.map((content) => (
          <CardStyle2 content={content} />
        ))}
      </div>
    </div>
  );
}
