import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
    Axios.get("http://localhost:3001/company").then((response) => {
      setCompanyList(response.data);
    });
  };
  return (
    <div className="App container">
      <h1>Test</h1>
      <div className="information">
        <br />
        <br />
        <button class="btn btn-primary" onClick={getCompany}>
          Show company
        </button>
        {companyList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">id: {val.cp_id}</p>
                <p className="card-text">Name: {val.cp_name}</p>
                <p className="card-text">link: {val.cp_link}</p>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
