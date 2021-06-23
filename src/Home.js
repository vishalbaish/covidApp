import React, { useEffect, useState } from 'react'
import "./Home.css"
import {
    Link
  } from "react-router-dom";

function Home() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const getCountriesData = async () => {
       await fetch("https://corona.lmao.ninja/v2/countries")
       .then((response) => response.json())
       .then((data) => {
        setCountries(data);
       })
        }
  
      getCountriesData();
    }, [])
  

    return (
        <div className="app"> 
        <div className="app_header">
          <h1>COVID TRACKER APP</h1>
          <Link to={{ pathname: "Historical" }}>
            <button>Historical</button>
        </Link>
        </div>
        <div className="table">
        
          {countries.map(country => (
                <Link style={{ textDecoration: 'none', color: "#000"}} to={{ pathname: country.country }} >
                    <ul className="table_data2">
                    <li><h2>{country.country}</h2></li>
                    <li><h2>{country.cases}</h2></li>
                    </ul>
                </Link>
            ))}
          
          
          </div>
        
      </div>
    )
}

export default Home
