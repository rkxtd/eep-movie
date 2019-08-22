import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import randomTextMeme from 'random-text-meme';
import { apiDiscover, apiGenres } from '../../helpers/api';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(async () => {
            const { results: movies } = await (await apiDiscover()).json();
            const { results: genres } = await (await apiGenres()).json();

            this.setState({ movies, loading: false })
        }, 100)

    }

    render() {
        const { movies, loading } = this.state;
        return (
            <div style={{minWidth: 360}}>
                { loading && <p>Loading... {randomTextMeme.getEmoji('flip-table')} </p> }
                <MovieList movies={movies}/>
            </div>
        );
    }
}
