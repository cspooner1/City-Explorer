import './App.css';
import Card from 'react-bootstrap/Card';

function Movies(props) {
    return props.movieResponse.map((element) => {
        return <div className='Data'>
            <h3 >
                <Card>
                    <Card.Title className='apiTitle'>Movies</Card.Title>
                    <Card.Body id='movie'>
                    <Card.Body>Adult: {element.adult}</Card.Body>
                    <Card.Body>Backdrop_path: {element.backdrop_path}</Card.Body>
                    <Card.Body>Genre_ids: {element.genre_ids}</Card.Body>
                    <Card.Body>Id: {element.id}</Card.Body>
                    <Card.Body>Original_language: {element.original_language}</Card.Body>
                    <Card.Body>Original_title: {element.original_title}</Card.Body>
                    <Card.Body>Overview: {element.overview}</Card.Body>
                    <Card.Body>Popularity: {element.popularity}</Card.Body>
                    <Card.Body>Release_date: {element.release_date}</Card.Body>
                    <Card.Body>Title: {element.title}</Card.Body>
                    <Card.Body>Video: {element.video}</Card.Body>
                    <Card.Body>Vote_average: {element.vote_average}</Card.Body>
                    <Card.Body>Vote_count: {element.vote_count}</Card.Body>
                    </Card.Body>
                </Card>
            </h3>
        </div>
    })
}

export default Movies;