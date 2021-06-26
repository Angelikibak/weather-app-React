import React from 'react'
import moment from 'moment';
import './weather.scss'

const Weather = ({weatherInfo, id}) => {
    const kelvin = 273;
    let {dt} =weatherInfo.forecast[id]
    let {temp } = weatherInfo.forecast[id].main
    temp = (temp - kelvin).toFixed(0)
    let icon = weatherInfo.forecast[id].weather[0].icon
    let Url= ""
    switch (icon){
     
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
                   Url = './icons/sunny.svg'
                                  break;

      default:

        Url = './icons/sunny.svg';
    }
    return (

      
        
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{moment(dt* 1000).format('HH:mm ')}</div>
      <img className="weather-by-hour__logo" src={Url} alt="Mostly sunny" />
      <div className="weather-by-hour__degree">{temp}&deg;</div>
    </div>   
        
    )
}

export default Weather
