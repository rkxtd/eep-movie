import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import randomTextMeme from 'random-text-meme';
import { apiDiscover, apiGenres } from '../../helpers/api';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
            sortBy: '',
        };
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentDidMount() {
        setTimeout(async () => {
            const { results: movies } = await (await apiDiscover()).json();
            const { results: genres } = await (await apiGenres()).json();

            this.setState({ movies, loading: false })
        }, 100)

    }

    handleSortChange(event) {
        this.setState({
            'sortBy': event.target.value,
        });

        console.log(this.state)
    }

    render() {
        const { movies, loading, sortBy } = this.state;
        return (
            <div style={{minWidth: 360}}>
                { loading && <p>Loading... {randomTextMeme.getEmoji('flip-table')} </p> }
                <MovieList
                  movies={movies}
                  sortBy={sortBy}
                  handleSortChange={this.handleSortChange} />
            </div>
        );
    }
}
