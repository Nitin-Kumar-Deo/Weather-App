import React, { useState, useEffect } from "react";
import ExtraInfo from "./ExtraInfo";

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
  
}) {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  //conveting the seconds in time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherType}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <ExtraInfo  
              icon={"wi wi-sunset"}
              type={timeStr}
              Type={'Sunset'}
            />
            <ExtraInfo  
              icon={"wi wi-humidity"}
              type={humidity}
              Type={'Humidity'}
            />
          </div>

          <div className="weather-extra-info">
            
            <ExtraInfo  
              icon={"wi wi-barometer"}
              type={pressure}
              Type={'Pressure'}
            />
            <ExtraInfo  
              icon={"wi wi-strong-wind"}
              type={speed}
              Type={'Speed'}
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
