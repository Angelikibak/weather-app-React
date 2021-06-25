import React from 'react'

const Weather = () => {
    return (   
        <div className="current-temperature">
          <div className="current-temperature__icon-container">
            <img src="" className="current-temperature__icon" alt="" /> 
          </div>
          <div className="current-temperature__content-container">
            <div className="current-temperature__city">
              <span className="current-temperature__summary">description</span>
              <span className="current-stats__value">highestTemp &deg;/lowestTemp &deg; </span>
                <span className="location-and-date__location">city</span>
              <div>
            </div>
          </div>
          <div className = "current-temperature__date">
            <div className="current-temperature__value">temp&deg;</div>
            <div className="location-and-date">date</div>
          </div>
          </div>
        </div>
    )
}

Weather.defaultProps={
    dayOfTimes: "one"
}

export default Weather
