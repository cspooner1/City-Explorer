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

function ExploreForm() {
    const [userinput, setUserInput] = useState("");
    const [image, setImage] = useState("");
    const [citydata, setCitydata] = useState({
        display_name: "",
        lat: "",
        lon: "",
    })
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
                         let response = axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_APT_KEY}&q=${userinput}&format=json`);
                         

                         response.then(function(res){
                             // console.log(res.data)
                             console.log(res.data[0])
                             setCitydata(res.data[0]);
                         })
                     console.log(response,"........");
                    }}>Explore!</Button>
                </Form.Group>
            </Row>
            <h1 className='info text'>{citydata.display_name}</h1>
            <div id='coor'>
            <h1 className='info text coordinates' id='long'>Longitude: {citydata.lon}</h1>
            <h1 className='info text coordinates' id='lati'>Latitude: {citydata.lat}</h1>
            </div>
            <img id="Mapp"alt="City Map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_APT_KEY}&center=${citydata.lat},${citydata.lon}&zoom=13&format=jpg`}  />
            </Form>
    )
}

export default ExploreForm;