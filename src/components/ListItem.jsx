import React from 'react'
import '../global.css'

const ListItem = ({ name, owner, cid, dept, time }) => {
  return (
    <div id="card">
      <div id="displayName">{name}</div>
      <div id="displayOwner">{owner}</div>
      <div id="displayDept">{dept}</div>
      <div id="displayTime">{time}</div>
      <button className="button-17">Download</button>
    </div>
  )
}

export default ListItem
