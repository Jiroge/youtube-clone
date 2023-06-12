import React from "react";
import { AiOutlineHistory, AiFillFolder, AiOutlineHeart } from "react-icons/ai";
import {
  BiTrendingUp,
  BiHome,
  BiListCheck,
  BiUserCircle,
} from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";

function DisplayMenu(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.list.map((item) => (
        <li
          style={{
            display: "flex",
            marginTop: "10px",
            height: "40px",
            cursor: "pointer",
          }}
          key={item.name}
        >
          <item.icon size={30} style={{ margin: "auto 0 auto 10px" }} />
          <p style={{ margin: "auto 0 auto 10px", pading: 0 }}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default function LeftMenuBar() {
  const firstMenu = [
    { icon: BiHome, name: "Home" },
    { icon: BiTrendingUp, name: "Trending" },
    { icon: AiOutlineHeart, name: "Subscription" },
  ];

  const secondMenu = [
    { icon: AiOutlineHistory, name: "History" },
    { icon: AiFillFolder, name: "Library" },
    { icon: BiListCheck, name: "Saved Videos" },
    { icon: GrYoutube, name: "Liked Videos" },
  ];

  const mockupSubscription = [
    { profile: BiUserCircle, profileName: "Mockup-1" },
    { profile: BiUserCircle, profileName: "Mockup-2" },
    { profile: BiUserCircle, profileName: "Mockup-3" },
    { profile: BiUserCircle, profileName: "Mockup-4" },
    { profile: BiUserCircle, profileName: "Mockup-5" },
    { profile: BiUserCircle, profileName: "Mockup-6" },
    { profile: BiUserCircle, profileName: "Mockup-7" },
    { profile: BiUserCircle, profileName: "Mockup-8" },
    { profile: BiUserCircle, profileName: "Mockup-9" },
    { profile: BiUserCircle, profileName: "Mockup-10" },
  ];

  return (
    <div
      style={{
        height: "115vh",
        width: "20vw",
        backgroundColor: "#f2f3f5",
      }}
    >
      <DisplayMenu list={firstMenu} />
      <hr style={{ margin: "auto 10px" }} />
      <DisplayMenu list={secondMenu} />
      <hr style={{ margin: "auto 10px" }} />
      <div style={{ margin: "auto 10px" }}>
        <p>Subscription</p>
        <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }}>
          {mockupSubscription.map((channel) => (
            <li
              style={{
                display: "block",
                cursor: "pointer",
                padding: "4px",
              }}
              key={channel.profileName}
            >
              <channel.profile size={30} style={{ margin: "0 0 0 8px" }} />
              <p style={{ margin: "auto 0", pading: 0, fontSize: "0.6rem" }}>
                {channel.profileName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
