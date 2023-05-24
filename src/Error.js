import './App.css';
import ExploreForm from './Form';
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

function Error() {
    const [currentError, setcurrentError] = useState("Error")

    return (
        <h1>{currentError}</h1>
    )
}
export default Error;