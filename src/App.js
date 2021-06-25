import React,{useState, useEffect} from 'react'
import Weather from './components/weather/weather';

const kelvin = 273;

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const weatherTime = [0,1,2,3,4,5,6,7]

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
      const months = [  
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Nocvember',
        'December',
      ];

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDate = new Date();
      const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;

      
      const temp = data.list[0].main.temp - kelvin;

      const weatherInfo = {
        city: 'Munich',
        date,
        description: data.list[0].weather[0].description,
        temp,
        highestTemp: data.list[0].main.temp_max,
        lowestTemp: data.list[0].main.temp_min,
        forecast: data.list,
      };

      setWeatherInfo(weatherInfo)
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
  FetchWeatherData()
  }, [])
   
  let city = "Munich";
      let date = "";
      let temp=""; 
      let highestTemp="";
      let description="";
      let MainIcon= "04d";
      let Url=""
      let lowestTemp=""
      if(weatherInfo){
          city = weatherInfo.city
          date = weatherInfo.date
          temp = (weatherInfo.temp ).toFixed(0)
          highestTemp= (weatherInfo.highestTemp).toFixed(0)
          description= weatherInfo.description
          lowestTemp = (weatherInfo.lowestTemp).toFixed(0)
          MainIcon = weatherInfo.forecast[0].weather[0].icon
          Url= ""
          switch (MainIcon){
           
              case "01d":
                Url = './icons/sunny.svg'
                break;
                case "02d":
                Url = './icons/mostly-sunny.svg'
                  break;
                  case "03d":
                 Url = './icons/mostly-sunny.svg'
                    break;
                    case "04d":
                  Url = './icons/mostly-sunny.svg'
                      break;
                      case "09d":
                   Url = './icons/mostly-sunny.svg'
                        break;
                  case "10d":
                   Url = './icons/mostly-sunny.svg'
                          break;
                  case "11d":
                    Url = './icons/mostly-sunny.svg'
                            break;
                  case "13d":
                    Url = './icons/mostly-sunny.svg'
                            break;
                   case "50d":
                         Url = './icons/mostly-sunny.svg'
                                        break;

            default:
    
              Url = './icons/sunny.svg';
          }
      }  
            
  
    return (
      <main className ="main-container">
      <div className="current-temperature">
          <div className="current-temperature__icon-container">
            <img src={Url} className="current-temperature__icon" alt="" /> 
          </div>
          <div className="current-temperature__content-container">
            <div className="current-temperature__city">
              <span className="current-temperature__summary">{description}</span>
              <span className="current-stats__value">{highestTemp - kelvin} &deg;/{lowestTemp - kelvin} &deg; </span>
                <span className="location-and-date__location">{city}</span>
              <div>
            </div>
          </div>
          <div className = "current-temperature__date">
            <div className="current-temperature__value">{temp}&deg;</div>
            <div className="location-and-date">{date}</div>
          </div>
          </div>
        </div>

        <div className="weather-by-hour">
          <div className="weather-by-hour__container">
        {weatherInfo && weatherTime.map((item, index)=>(
                      <Weather weatherInfo={weatherInfo} id={item} key={item}/>
              )
            
              )} 
              </div>
              </div>
        </main>
    )
}


export default App
