import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Sports</li>
        <li>Lives</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Moves</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Spoorts</li>
        <li>Gaming</li>
        <li>Moves</li>
      </ul>
    </div>
  );
};

export default Sidebar;
