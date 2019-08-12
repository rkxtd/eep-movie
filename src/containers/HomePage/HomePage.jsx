import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import randomTextMeme from 'random-text-meme';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true
        };

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(response => response.json())
            .then( ({results: movies}) => this.setState({ movies, loading: false }));
    }
    render() {
        const { movies, loading } = this.state;
        console.log(movies);
        return (
            <div style={{minWidth: 360}}>
                { loading && <p>Loading... {randomTextMeme.getEmoji('flip-table')} </p> }
                <MovieList movies={movies}/>
            </div>
        );
    }
}
