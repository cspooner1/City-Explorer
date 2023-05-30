import './App.css';
import {useState} from 'react'
import WeatherDay from './WeatherDay.js';



function Weather(props) {
    const [weatherData, setweatherData] = useState([]);
    return (<div className='apiTitle'>Weather{props.weatherData.map((element) => {
         return <WeatherDay  date={element.date} description={element.description}/>
    })}</div>)
}

export default Weather;