import React, { useState } from 'react'
import '../global.css'
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

const Upload = ({ list, setList, holder }) => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const fileTypes = ['JPG', 'PNG', 'PDF', 'DOC']
  const [file, setFile] = useState(null)
  const [nfile, setNFile] = useState('')
  const [dName, setDName] = useState('')
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

  async function uploadDoc() {
    if (nfile === '' || dName === '') {
      alert('all fields are mandatory')
      closeModal()
      return
    }
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    let monthName = monthNames[month]

    const currentDate = year + ' ' + monthName
    var newItem = {
      name: nfile,
      owner: holder,
      cid: 'random',
      dept: dName,
      time: currentDate,
    }
    setList([...list, newItem])
    closeModal()
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
              onChange={(e) => {
                setNFile(e.target.value)
              }}
            />
            <select
              id="selectOption"
              onChange={(e) => {
                setDName(e.target.value)
              }}
            >
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
            <button className="button-6" id="sbmt" onClick={uploadDoc}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Upload
