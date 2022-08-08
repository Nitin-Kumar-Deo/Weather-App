import React,{useEffect, useState} from 'react'
import './styles.css'
import WeatherDetails from './WeatherDetails'

function SearchMain() {
    
    const [searchTerm,setSearchTerm]=useState('patna')
    const [tempInfo,setTempInfo]=useState({});
    const getWeatherInfo = async ()=>{
      try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=9fa3405fa6be4dc47126d0f1d034baad`;
        const res= await fetch(url);
        const data =await res.json()
        
        const {temp,humidity,pressure }=data.main;
        const {main:weatherType}=data.weather[0];
        const {name}=data;
        const {speed}=data.wind;
        const {country,sunset}=data.sys;
        
        const myWeatherInfo={
          temp,humidity,pressure,weatherType,name,speed,country,sunset
        }
        setTempInfo(myWeatherInfo)
        
      }
      catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      getWeatherInfo();
    },[])
  return (
    <>
    <div className="wrap">
        <div className='search'>
            <input 
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)}/>
             <button className='searchButton' onClick={getWeatherInfo}>Search</button>

        </div>
        
    </div>
    <WeatherDetails {...tempInfo}/>
    </>
  )
}

export default SearchMain
