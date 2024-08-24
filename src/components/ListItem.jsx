import React from 'react'
import { FiDownload } from 'react-icons/fi'
import '../global.css'

const ListItem = () => {
  return (
    <div id="card">
      <div>NAME</div>
      <div>UPLOADED BY</div>
      <div>dept</div>
      <div>date</div>
      <button className="button-17">Download</button>
    </div>
  )
}

export default ListItem
