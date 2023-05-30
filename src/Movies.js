import './App.css';
import EachMovie from './eachMovie';

function Movies(props) {
    return props.movieResponse.map((element) => {
        return (
            <EachMovie
                adult={element.adult}
                genre_ids={element.genre_ids}
                backdrop_path={element.backdrop_path}
                id={element.id}
                original_language={element.original_language}
                original_title={element.original_title}
                overview={element.overview}
                popularity={element.popularity}
                release_date={element.release_date}
                title={element.title}
                video={element.video}
                vote_average={element.vote_average}
                vote_count={element.vote_count}
            />
        )
    })
}

export default Movies;