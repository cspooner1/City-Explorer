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

function ExploreForm() {
    let userinput = ""
    const [citydata, setCitydata] = useState({
        display_name: "Paris, Ile-de-France, Metropolitan France, France",
        lat: "48.8588897",
        lon: "2.3200410217200766"
    })
    return (
        <Form>
            <Row>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={function(event){
                    userinput = event.target.value
                    }} placeholder="Search City" />

                    <Button onClick={function(){
                        console.log(userinput)
                         let response = axios.get(`https://us1.locationiq.com/v1/search?key=pk.e7ac28688556d9f05c9e6e2517927329&q=${userinput}&format=json`);
                         response.then(function(res){
                             // console.log(res.data)
                             console.log(res.data[0])
                             setCitydata(res.data[0]);
                         })
                     console.log(response,"........");
                    }}>Explore!</Button>
                </Form.Group>
            </Row>
            <h1>{citydata.display_name}</h1>
            <h1>{citydata.lon}</h1>
            <h1>{citydata.lat}</h1>
        </Form>
    )
}

export default ExploreForm;