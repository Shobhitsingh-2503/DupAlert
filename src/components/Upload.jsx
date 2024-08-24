import React, { useState } from 'react'
import '../global.css'
// require('dotenv').config()
import Modal from 'react-modal'
import { FileUploader } from 'react-drag-drop-files'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Upload = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const fileTypes = ['JPG', 'PNG', 'PDF', 'DOC']
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    setFile(file)
  }

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div id="upld">
      <button className="button-68" onClick={openModal}>
        UPLOAD
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} align="center">
          UPLOAD
        </h2>
        <div id="inside">
          <div id="first">
            <input
              type="text"
              placeholder="Enter Name of document..."
              id="nameOfFile"
            />
            <select id="selectOption">
              <option value="ALL">ALL</option>
              <option value="Indian Meteorological department (IMD)">
                Indian Meteorological department (IMD)
              </option>
              <option value="National center for medium range weather forecasting (NCMRWF)">
                National center for medium range weather forecasting (NCMRWF)
              </option>
              <option value="Indian Institute of Tropical Metereologoy (IITM) Pune">
                Indian Institute of Tropical Metereologoy (IITM) Pune
              </option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          <div id="second">
            <button className="button-6" id="sbmt">
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Upload
