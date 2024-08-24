import React from 'react'
import '../global.css'

const ListItem = ({ name, owner, cid, dept, time }) => {
  return (
    <div id="card">
      <div id="displayName">{name}</div>
      <div id="displayOwner">{owner}</div>
      <div id="displayDept">{dept}</div>
      <div id="displayTime">{time}</div>
      <a
        href={`https://bronze-elegant-gopher-211.mypinata.cloud/ipfs/${cid}`}
        target="_blank"
      >
        <button className="button-17">Download</button>
      </a>
    </div>
  )
}

export default ListItem
