import React from "react";

export default function Main() {
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
    <div style={{display: "block", margin: "0 20px"}}>
      <h2>Recommended</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {contents.map((content) => (
          <div style={{ margin: "15px" }}>
            <img
              src={content.image}
              alt={contents.title}
              style={{ width: "320px", height: "220px", borderRadius: "10px" }}
            />
            <h1 style={{ margin: 0, padding: 0 }}>{content.title}</h1>
            <p style={{ margin: 0, padding: 0 }}>{content.detail}</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
              <p style={{ margin: 0, padding: 0 }}>{content.view}</p>
              <p style={{ margin: 0, padding: 0 }}>{content.timeRelease}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
