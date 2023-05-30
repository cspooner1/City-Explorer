import './App.css';
import Card from 'react-bootstrap/Card';

function EachMovie(props) {
    return(
        <div className='Data'>
            <h3>
                <Card>
                    <Card.Title className='apiTitle'>Movies</Card.Title>
                    <Card.Body id='movie'>
                    <Card.Body>Adult: {props.adult}</Card.Body>
                    <Card.Body>Backdrop_path: {props.backdrop_path}</Card.Body>
                    <Card.Body>Genre_ids: {props.genre_ids}</Card.Body>
                    <Card.Body>Id: {props.id}</Card.Body>
                    <Card.Body>Original_language: {props.original_language}</Card.Body>
                    <Card.Body>Original_title: {props.original_title}</Card.Body>
                    <Card.Body>Overview: {props.overview}</Card.Body>
                    <Card.Body>Popularity: {props.popularity}</Card.Body>
                    <Card.Body>Release_date: {props.release_date}</Card.Body>
                    <Card.Body>Title: {props.title}</Card.Body>
                    <Card.Body>Video: {props.video}</Card.Body>
                    <Card.Body>Vote_average: {props.vote_average}</Card.Body>
                    <Card.Body>Vote_count: {props.vote_count}</Card.Body>
                    </Card.Body>
                </Card>
            </h3>
        </div>
    )
}

export default EachMovie;