import './App.css';
import {useState} from 'react'

function WeatherDay(props) {
const [weatherData, setweatherData] = useState([]);
 
        return <div><h3 id='weather' className='weatherData'>Date: {props.date} Description: {props.description}</h3></div>

}

export default WeatherDay;