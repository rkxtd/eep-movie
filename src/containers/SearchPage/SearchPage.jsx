import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import {combineLatest} from 'rxjs';
import {ApiKeySource, SearchSource, GenreSource} from '../../services/discover';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdbApiKey: '',
      movies: [],
      loading: true,
      sortBy: 'popularity.desc',
      page: 0,
      resultsCount: 0,
      query: ''
    };
    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  componentDidMount() {}

  loadMoreMovies() {
    const {page, movies} = this.state;
    const apiKey$ = ApiKeySource();
    apiKey$.subscribe(({MDB_API_KEY: mdbApiKey}) => combineLatest(
      GenreSource(mdbApiKey),
      SearchSource(mdbApiKey, page + 1)
    ).subscribe(
      ([genres, {resultsCount, movies: moreMovies}]) => {
        this.setState({
          resultsCount,
          movies: [...movies, ...moreMovies],
          page: page + 1,
          genres,
          mdbApiKey,
        })
      }))
  }

  render() {
    const {movies, genres, sortBy, resultsCount} = this.state;
    return (
      <div style={{minWidth: 360, marginTop: 70}}>
        <MovieList
          resultsCount={resultsCount}
          movies={movies}
          genres={genres}
          sortBy={sortBy}
          handleSortChange={this.handleSortChange}
          loadMoreMovies={this.loadMoreMovies} />
      </div>
    );
  }
}
