import "./App.css";
import "./global.css";
import { IoMdSearch } from "react-icons/io";
import Upload from "./components/Upload";

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
          placeholder="Enter Name or uploader.... "
        />
        <IoMdSearch id="srch" />
      </div>
      <Upload />
      <div id="container"></div>
      <div id="footer">
        <pre>Made with 💖 © Team </pre>
      </div>
    </div>
  );
}

export default App;
