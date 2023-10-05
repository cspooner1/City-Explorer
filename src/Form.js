import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import axios from 'axios';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import './App.css';
import Error from './Error';
import Weather from './Weather';
import Movies from './Movies';

function ExploreForm() {
    const [userinput, setUserInput] = useState("");
    const [image, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [weatherData, setweatherData] = useState([]);
    const [movieObject, setmovieObject] = useState([]);
    let weatherHTML = weatherData.map(function(element){
       return(
        <h1 id='weather'>{element.description},{element.date}</h1>
       )
    })
    const [citydata, setCitydata] = useState({
        display_name: "",
        lat: "",
        lon: "",
    })
    let errorHtml = <Error/>
    if(errorMessage === ""){
        errorHtml = <></>
    }
    return (
        <Form id="cityForm">
            <Row>
                <Form.Group>
                    <Col><Form.Label className='text' id='title'>City</Form.Label></Col>
                    <Form.Control id='searchbar' onChange={function(event){
                    setUserInput(event.target.value);
                    }} placeholder="Search City" />

                    <Button onClick={function(){
                        console.log(userinput)
                         let response = axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_APT_KEY}&q=${userinput}&format=json`)

                         response.then(function(res){
                             // console.log(res.data)
                             console.log(res.data[0])
                             setCitydata(res.data[0]);
                         }).catch(function(error){
                            setErrorMessage(error.message)
                         })

                         let weatherResponse = axios.get(`https://city-explorer-api1.netlify.app/weather?searchQuery=${userinput}&lon=${citydata.lon}&lat=${citydata.lat}`)
                         weatherResponse.then(function(res){
                            weatherHTML = res.data
                            setweatherData(res.data)
                            console.log(res.data)
                         })

                         weatherResponse.catch(function(err){
                            setErrorMessage(err.message)
                        })              
                        let movieResponse = axios.get(`https://city-explorer-api1.netlify.app/movies?searchQuery=${userinput}`)
                        movieResponse.then(function(res){
                            console.log(res.data)
                            setmovieObject(res.data)
                        })
                        // console.log(weatherResponse,"........");
                    }}>Explore!</Button>
                </Form.Group>
            </Row>
            <h1 className='info text'>{citydata.display_name}</h1>
            <div id='coor'>
            <h1 className='info text coordinates' id='long'>Longitude: {citydata.lon}</h1>
            <h1 className='info text coordinates' id='lati'>Latitude: {citydata.lat}</h1>
            </div>
           {errorHtml}
            <img id="Mapp"alt="City Map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_APT_KEY}&center=${citydata.lat},${citydata.lon}&zoom=13&format=jpg`}  />
            <Weather weatherData={weatherData}/>
            <Movies  movieResponse={movieObject}/>
            </Form>
    )
}

export default ExploreForm;