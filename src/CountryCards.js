import React from 'react';

function CountryCards({ data }) {
  return (
    <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center" , width : '45%'}}>
      {data.map((item, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title"><b>Country Name:</b> {item.country}</h5>
              <p className="card-text"><b>Country Capital:</b> {item.capital}</p>
              <p className="card-text"><b>Population:</b> {item.population}</p>
              <p className="card-text"><b>Official Language:</b> {Array.isArray(item.official_language) ? item.official_language.join(', ') : item.official_language}</p>
              <p className="card-text"><b>Currency:</b> {item.currency}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryCards;
