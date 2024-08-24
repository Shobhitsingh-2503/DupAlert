import React from "react";
import { FiDownload } from "react-icons/fi";
import "../global.css";

const ListItem = ({ name, owner, cid, dept, time }) => {
  return (
    <div id="card">
      <div>{name}</div>
      <div>{owner}</div>
      <div>{dept}</div>
      <div>{time}</div>
      <button className="button-17">Download</button>
    </div>
  );
};

export default ListItem;
