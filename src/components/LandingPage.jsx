import React, { useEffect, useState } from 'react'
import '../global.css'
import { IoMdSearch } from 'react-icons/io'
import Upload from './Upload'
import ListItem from './ListItem'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const LandingPage = () => {
  const [listOfCid, setListOfCid] = useState([])
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([]) // New state for filtered items
  const [itemToBeSearched, setItemToBeSearched] = useState('')
  const [selectedDept, setSelectedDept] = useState('ALL')
  const [selectedMonth, setSelectedMonth] = useState('')
  const navigate = useNavigate()
  const user = auth.currentUser
  const [holder, setHolder] = React.useState(user ? user.email : '')

  const fetchDataFiles = async () => {
    const data = await getDocs(collection(db, 'Files'))
    const fetchedList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setList(fetchedList)
    setFilteredList(fetchedList)
  }

  useEffect(() => {
    fetchDataFiles()
  }, [])

  useEffect(() => {
    let filtered = list

    if (itemToBeSearched) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(itemToBeSearched.toLowerCase()) ||
          item.owner.toLowerCase().includes(itemToBeSearched.toLowerCase()),
      )
    }

    if (selectedDept !== 'ALL') {
      filtered = filtered.filter((item) => item.dept === selectedDept)
    }

    if (selectedMonth) {
      const [year, month] = selectedMonth.split('-')
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
      const selectedTime = `${year} ${monthNames[parseInt(month, 10) - 1]}`
      filtered = filtered.filter((item) => item.time === selectedTime)
    }

    setFilteredList(filtered)
  }, [itemToBeSearched, selectedDept, selectedMonth, list])

  const signOutUser = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      setHolder(user.email)
    } else {
      setHolder('')
      navigate('/')
    }
  }, [user, navigate])

  return (
    <div>
      <div id="navbar">
        <div id="name">DupAlert</div>
        <div id="upload">
          <Upload
            list={list}
            setList={setList}
            holder={holder}
            listOfCid={listOfCid}
            setListOfCid={setListOfCid}
          />
          <button className="button-68" id="lo" onClick={signOutUser}>
            LOGOUT
          </button>
          <div id="email">{holder[0]?.toUpperCase()}</div>
        </div>
      </div>
      <div id="search">
        <input
          type="text"
          id="srchBar"
          placeholder="Enter Name of file or uploader.... "
          onChange={(e) => setItemToBeSearched(e.target.value)}
        />
        <button
          className="button-6"
          onClick={() => setItemToBeSearched(itemToBeSearched)}
        >
          <IoMdSearch />
        </button>
      </div>

      <div id="filter">
        <input
          type="month"
          id="month"
          onChange={(e) => setSelectedMonth(e.target.value)}
        />
        <select id="dept" onChange={(e) => setSelectedDept(e.target.value)}>
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
      <div id="container">
        {filteredList.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            owner={item.owner}
            cid={item.cid}
            dept={item.dept}
            time={item.time}
          />
        ))}
      </div>
      <div id="footer">
        <pre>Made with 💖 © Team Shipwrecked Survivors</pre>
      </div>
    </div>
  )
}

export default LandingPage
