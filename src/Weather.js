import './App.css';
function Weather(props) {
    return (<div className='apiTitle'>Weather{props.weatherData.map((element) => {
         return <div><h3 id='weather' className='weatherData'>Date: {element.date} Description: {element.description}</h3></div>
    })}</div>)
}

export default Weather;