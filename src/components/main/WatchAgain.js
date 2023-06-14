import React from "react";
import CardStyle2 from "../CardStyle2";

export default function WatchAgain() {
  const contents = [
    {
      image: "https://shorturl.at/eiovW",
      title: "title1",
      detail: "detail1",
      view: "587k",
      timeRelease: "25 days ago",
    },
    {
      image: "https://shorturl.at/mrBCS",
      title: "title2",
      detail: "detail2",
      view: "92k",
      timeRelease: "18 days ago",
    },
    {
      image: "https://shorturl.at/DJTV3",
      title: "title3",
      detail: "detail3",
      view: "17k",
      timeRelease: "6 months ago",
    },
    {
      image: "https://shorturl.at/HJW17",
      title: "title4",
      detail: "detail4",
      view: "155k",
      timeRelease: "3 years ago",
    },
    {
      image: "https://shorturl.at/rtB08",
      title: "title5",
      detail: "detail5",
      view: "610k",
      timeRelease: "2 months ago",
    },
    {
      image: "https://shorturl.at/itHT4",
      title: "title6",
      detail: "detail6",
      view: "140k",
      timeRelease: "4 months ago",
    },
  ];

  return (
    <div style={{ width: "30%" }}>
      <h2 style={{ margin: 0 }}>Watch Again</h2>
      <div
        style={{
          overflowY: "auto",
          whiteSpace: "nowrap",
          height: "95%",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        {contents.map((content) => (
          <CardStyle2 content={content} key={content.image} />
        ))}
      </div>
    </div>
  );
}
