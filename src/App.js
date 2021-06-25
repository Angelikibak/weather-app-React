import React,{useState, useEffect} from 'react'

const App = () => {
  async function FetchWeatherData  () {

    const value= 'München'
    const APIkey = 'b6907d289e10d714a6e88b30761fae22';
    const forecast = `data/2.5/forecast?q=${value}&APPID=${APIkey}`;

    fetch(forecast)
      .then((res) => {
        if (res.ok ) {
          return res.json();
        }
        throw Error(res.statusText);
      })
    .then((data) => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
  FetchWeatherData()
  }, [])
   
    
            
  
    return (
      <div></div>
    )
}


export default App
