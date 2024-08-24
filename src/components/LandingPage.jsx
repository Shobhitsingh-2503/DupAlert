import React, { useEffect, useState } from "react";
import "../global.css";
import { IoMdSearch } from "react-icons/io";
import Upload from "./Upload";
import ListItem from "./ListItem";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
// import {} from 'firebase'

const LandingPage = () => {
  const [listOfCid, setListOfCid] = useState([]);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [itemToBeSearched, setItemToBeSearched] = useState("");
  const searchSpace = document.getElementById("srchBar");
  const [holder, setHolder] = React.useState(user ? user.email : "");

  var temp = [
    {
      name: "NASA Project 1",
      owner: "prof1@iitism.ac.in",
      cid: "random",
      dept: "Miscellaneous",
      time: "2024 August",
    },
    {
      name: "NASA Project 2",
      owner: "prof2@iitism.ac.in",
      cid: "random",
      dept: "Indian Institute of Tropical Metereologoy (IITM) Pune",
      time: "2024 August",
    },
    {
      name: "NASA Project 3",
      owner: "prof3@iitism.ac.in",
      cid: "random",
      dept: "National center for medium range weather forecasting (NCMRWF)",
      time: "2024 August",
    },
    {
      name: "NASA Project 4",
      owner: "prof4@iitism.ac.in",
      cid: "random",
      dept: "CSE",
      time: "2024 August",
    },
  ];

  function search() {
    // if (itemToBeSearched === "") {
    //   setList(temp);
    // }
    setList(
      temp.filter(
        (item) =>
          item.name.includes(itemToBeSearched) ||
          item.owner.includes(itemToBeSearched)
      )
    );
  }

  searchSpace?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  });

  useState(() => {
    if (document.getElementById("dept")) {
      setList(temp);
    }
  });

  function filterDept() {
    console.log("hello");
    if (document.getElementById("dept")) {
      const dept = document.getElementById("dept").value;
      if (dept === "ALL") {
        console.log("all");
        setList(temp);
      } else {
        setList(temp.filter((item) => item.dept === dept));
      }
    }
  }

  function filterMonth() {
    if (document.getElementById("month")) {
      const monthChoosen = document.getElementById("month").value;
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let monthName = monthNames[Number(monthChoosen.substr(5, 2)) - 1];
      let selected = monthChoosen.substr(0, 4) + " " + monthName;
      // console.log(selected);

      if (!(monthChoosen === "")) {
        setList(temp.filter((item) => item.time === selected));
      } else if (monthChoosen === "") {
        setList(temp);
      }
    }
  }

  useEffect(() => {
    filterDept();
    filterMonth();
  }, []);

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setHolder(user.email);
    } else {
      setHolder("");
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchDataFiles = async () => {
      const data = await getDocs(collection(db, "Files"));
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchDataFiles();
  }, []);

  useEffect(() => {
    const fetchDataCID = async () => {
      const data = await getDocs(collection(db, "CID"));
      setListOfCid(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchDataCID();
  }, [list]);
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
        <button className="button-6" onClick={search}>
          <IoMdSearch />
        </button>
      </div>

      <div id="filter">
        <input type="month" id="month" onChange={filterMonth} />
        <select id="dept" onChange={filterDept}>
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
        {list.map((item) => {
          return (
            <ListItem
              name={item.name}
              owner={item.owner}
              cid={item.cid}
              dept={item.dept}
              time={item.time}
            />
          );
        })}
      </div>
      <div id="footer">
        <pre>Made with 💖 © Team Shipwrecked Survivors</pre>
      </div>
    </div>
  );
};

export default LandingPage;
