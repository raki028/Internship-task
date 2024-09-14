
 
import React , { useState } from "react";
import CountryDetails from "./CountryDetails";
import CountryCards from "./CountryCards";
import './index.css'

const App = () => {
  const [inputData, setInputData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [singleCountryDetails, setSingleCountryDetails] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);

    if (value === "") {
      setFilterData([]);
      setSingleCountryDetails([]);
    } else {
      const searchData = CountryDetails.filter((item) =>
        (`${item.country}${item.capital}`).toUpperCase().includes(value.toUpperCase())
      );
      setFilterData(searchData);
      setSingleCountryDetails([]);
    }
  };

  const handleClick = (countryName) => {
    const countryDetails = CountryDetails.filter((item) =>
      item.country.toUpperCase() === countryName.toUpperCase()
    );
    setSingleCountryDetails(countryDetails);
    setFilterData([]);
    setInputData("");
  };

  const displayMessage = () => {
    if (inputData === "" && singleCountryDetails.length === 0) {
      return <h2 style={{textAlign : 'center'}}>Welcome! Please search for a country or capital.</h2>;
    }
    return null;
  };

  return (
    <div className="container">
      <div className="row" style={{ display: 'flex', justifyContent: 'center', width: '50%', margin: '50px auto' }}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Search for a country or capital"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={inputData}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-md-6 ListGroup">
          <ul className="list-group">
            {filterData.length > 0 ? filterData.map((item, index) => (
              <li
                key={index}
                style={{ color: "blue", cursor: "pointer" }}
                className="list-group-item"
                onClick={() => handleClick(item.country)}
              >
                <svg style={{ marginRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                {item.country}
              </li>
            )) : null}
          </ul>
        </div>
      </div>

      <div className="row">
        {displayMessage()}
        {singleCountryDetails.length > 0 && (
          <CountryCards data={singleCountryDetails} />
        )}
      </div>
    </div>
  );
};

export default App;


