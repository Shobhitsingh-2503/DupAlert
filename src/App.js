import "./App.css";
import "./global.css";
import { IoMdSearch } from "react-icons/io";
import Upload from "./components/Upload";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div>
      <div id="navbar">
        <div id="name">DupAlert</div>
        <div id="">Holder</div>
      </div>
      <div id="search">
        <input
          type="text"
          id="srchBar"
          placeholder="Enter Name of file or uploader.... "
        />
        <IoMdSearch id="srch" />
      </div>
      <Upload />
      <div id="filter">
        <input type="month" id="month" />
        <select id="dept">
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
        <ListItem />
      </div>
      <div id="footer">
        <pre>Made with 💖 © Team </pre>
      </div>
    </div>
  );
}

export default App;
