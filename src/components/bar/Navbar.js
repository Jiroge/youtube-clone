import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrYoutube, GrSearch } from "react-icons/gr";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#f2f3f5",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Link
          to="/Home"
          style={{
            display: "flex",
            width: "30%",
            marginLeft: "10px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <GiHamburgerMenu
            size={35}
            style={{ margin: "auto 0 auto 10px", cursor: "pointer" }}
          />
          <GrYoutube
            size={35}
            color={"red"}
            style={{ margin: "auto 0 auto 10px", cursor: "pointer" }}
          />
          <h1
            style={{ margin: "auto 0 auto 10px", pading: 0, cursor: "pointer" }}
          >
            YouTube
          </h1>
        </Link>
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
          }}
        >
          <GrSearch style={{ left: "10px", position: "absolute" }} />
          <input
            type="text"
            name="name"
            placeholder="Search for YouTube"
            style={{
              width: "500px",
              height: "30px",
              backgroundColor: "#b5b5b5",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              marginTop: "2px",
              marginBottom: "2px",
              paddingLeft: "30px",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginRight: "10px" }}>
        <Link
          to="/Notification"
          style={{ margin: "auto 10px auto 0", cursor: "pointer" }}
        >
          <FaBell size={30} color={"#b3b3b3"} />
        </Link>
        <Link
          to="/User"
          style={{ margin: "auto 10px auto 0", cursor: "pointer" }}
        >
          <FaUserCircle size={30} color={"#b3b3b3"} />
        </Link>
      </div>
    </div>
  );
}
