import React, { useEffect, useState } from 'react'

function Historical() {

    const [historicalCountries, setHistoricalCountries] = useState([]);

  useEffect(() => {
    const HistoricalData = async () => {
     await fetch(`https://corona.lmao.ninja/v2/Historical`)
     .then((response) => response.json())
     .then((data) => {
        setHistoricalCountries(data);
     })
      }

    HistoricalData();
  },)
  
    return (
        <div className="historical">
            {historicalCountries.map(historicalCountry => (
                <div>
                    <h4>{historicalCountry.country}</h4> 
                </div>
            ))}
            
        </div>
    )
}

export default Historical
