import React, { useState } from 'react'
import '../global.css'
import Modal from 'react-modal'
import { FileUploader } from 'react-drag-drop-files'
import ReactLoading from 'react-loading'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { BiSolidError } from 'react-icons/bi'

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

const JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZGE0ODQxZi0yZDRhLTQ3YjktOTk3NC0xYTlmMmY2Mjg4YTAiLCJlbWFpbCI6InNob2JoaXRzaW5naDI1MDMyMDAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzMzg5Y2MyZDExNTJiYmFhOTgyZiIsInNjb3BlZEtleVNlY3JldCI6IjIxMTBhOGE3OTFiZmQzMmUyMGJmOTQ1YWFjMjM2ZjI0ZTA2MmM0MTNiOWVkNzQ3NGY4YjdhMGVlNjNhNjdiMzYiLCJleHAiOjE3NTYwNjE1ODV9.UE4bhKOQQpAs-Qa_iKqpCL60Ajg9IBJbyQodwHNWAAw'

const Upload = ({ list, setList, holder }) => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)
  const [exist, setExist] = useState(false)
  const fileTypes = ['JPG', 'PNG', 'PDF', 'DOC']
  const [file, setFile] = useState(null)
  const [nfile, setNFile] = useState('')
  const [dName, setDName] = useState('')
  const [loading, setLoading] = useState(false)
  const [hash, setHash] = useState('')

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
    setLoading(false)
    setExist(false)
  }

  async function getIpfsHash(file) {
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      body: formData,
    })
    const resData = await res.json()
    return resData.IpfsHash
  }

  async function uploadDoc() {
    setLoading(true)
    if (nfile === '' || dName === '' || file === null) {
      alert('All fields are mandatory')
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
    const cid = await getIpfsHash(file)
    setHash(cid)

    for (let i = 0; i < list.length; i++) {
      if (cid === list[i].cid) {
        setExist(true)
        setLoading(false)
        return
      }
    }

    const currentDate = `${year} ${monthName}`

    try {
      const fileRef = await addDoc(collection(db, 'Files'), {
        name: nfile,
        owner: holder,
        cid: cid,
        dept: dName,
        time: currentDate,
      })
      console.log('File Document written with ID: ', fileRef.id)

      setList([...list, { ...fileRef.data(), id: fileRef.id }])
    } catch (e) {
      console.error('Error adding document: ', e)
    } finally {
      setLoading(false)
    }
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
        {loading ? (
          <ReactLoading type="spokes" color="green" height={100} width={100} />
        ) : (
          <div id="inside">
            {!exist ? (
              <>
                <div id="first">
                  <input
                    autoComplete="off"
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
                    <option value="Indian Meteorological department (IMD)">
                      Indian Meteorological department (IMD)
                    </option>
                    <option value="National center for medium range weather forecasting (NCMRWF)">
                      National center for medium range weather forecasting
                      (NCMRWF)
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
                </div>{' '}
              </>
            ) : (
              <div id="inside2">
                <BiSolidError id="logo" />
                <div>
                  This file already exists,{' '}
                  <a
                    href={`https://bronze-elegant-gopher-211.mypinata.cloud/ipfs/${hash}`}
                    target="_blank"
                  >
                    click here
                  </a>{' '}
                  for preview{' '}
                </div>
                <button onClick={closeModal} className="button-6" id="error">
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Upload
