import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';



function Country() {

    const [countryData, setCountryData] = useState([]);

    const { countryName } = useParams();

  useEffect(() => {
    // fetching specific countrt data by providing params
    const CountriesData = async () => {
     await fetch(`https://corona.lmao.ninja/v2/countries/${countryName}`)
     .then((response) => response.json())
     .then((data) => {
      setCountryData(data);
     })
      }

    CountriesData();
  }, [countryName])
  

        
    return (
      // displaying the results
        <div>
            <div className="app"> 
        <div className="app_header">
          <h1>{countryData.country}</h1>
        </div>
        <div className="table">
            <div>
                <h2>Active Cases</h2>
                {countryData.active}
            </div>
            <div>
                <h2>Total Cases</h2>
                {countryData.cases}
            </div>
            <div>
                <h2>Deaths</h2>
                {countryData.deaths}
            </div>
            <div>
                <h2>Recovered</h2>
                {countryData.recovered}
            </div>

          
          
          </div>
        
      </div>

        </div>
    )
}

export default Country
