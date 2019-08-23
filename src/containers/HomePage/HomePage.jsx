import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import randomTextMeme from 'random-text-meme';
import {combineLatest} from 'rxjs';
import {ApiKeySource, DiscoverSource, GenreSource} from '../../services/discover';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdbApiKey: '',
      movies: [],
      loading: true,
      sortBy: 'popularity.desc',
      page: 0,
      resultsCount: 0,
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    const apiKey$ = ApiKeySource();
    apiKey$.subscribe(({MDB_API_KEY: mdbApiKey}) => combineLatest(
      GenreSource(mdbApiKey),
      DiscoverSource(mdbApiKey)
    ).subscribe(
      ([genres, {resultsCount, movies}]) => {
        this.setState({
          mdbApiKey,
          genres,
          resultsCount,
          movies
        })
      }));
  }

  handleSortChange(event) {
    const {mdbApiKey} = this.state;
    const sortBy = event.target.value;
    this.setState({sortBy});
    DiscoverSource(mdbApiKey, sortBy).subscribe(({resultsCount, movies}) => {
        this.setState({
          resultsCount,
          movies
        })
      })
  }

  render() {
    const {movies, genres, loading, sortBy, resultsCount} = this.state;
    return (
      <div style={{minWidth: 360}}>
        {loading && <p>Loading... {randomTextMeme.getEmoji('flip-table')} </p>}
        <MovieList
          resultsCount={resultsCount}
          movies={movies}
          genres={genres}
          sortBy={sortBy}
          handleSortChange={this.handleSortChange}/>
      </div>
    );
  }
}
