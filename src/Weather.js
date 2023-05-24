import './App.css';
function Weather(props) {
    return props.weatherData.map((element) => {
        return <h3 id='weather'>{element.date} {element.description}</h3>
    })
}

export default Weather;