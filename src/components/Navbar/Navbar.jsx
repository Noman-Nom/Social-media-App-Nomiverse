import React from "react";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link style={{ textDecoration: "none" }} to="/">
          <h4>
            Nomi<span>Verse</span>
            {/* <img src="/logo.png" alt="" /> */}
          </h4>
        </Link>

        <HomeIcon />
        <NightlightIcon />
        <AppsIcon />

        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <MarkEmailReadIcon />
        <NotificationsNoneIcon />

        <div className="user">
          <img src="/user.jpg" alt="userImg" />
          <span>M.Noman</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
