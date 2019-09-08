import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import PersonList from '../../components/PersonList';
import {combineLatest} from 'rxjs';
import {ApiKeySource, SearchMovieSource, SearchPersonSource, GenreSource} from '../../services/discover';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { searchType, searchTerm }}} = props;
    this.state = {
      mdbApiKey: '',
      results: [],
      loading: true,
      sortBy: 'popularity.desc',
      page: 0,
      resultsCount: 0,
      searchTerm,
      searchType,
    };
    this.loadMoreMovies = this.loadMoreMovies.bind(this);
    this.loadMorePersons = this.loadMorePersons.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { searchType: prevSearchType, searchTerm: prevSearchTerm }}} = prevProps;
    const { match: { params: { searchType, searchTerm }}} = this.props;
    console.log(searchType, searchTerm);
    if (prevSearchType !== searchType || prevSearchTerm !== searchTerm) {
      this.setState({
        results: [],
        page: 0,
        loading: true,
        resultsCount: 0,
      })
    }
  }

  loadMoreMovies() {
    const {page, results, searchTerm} = this.state;
    const apiKey$ = ApiKeySource();
    apiKey$.subscribe(({MDB_API_KEY: mdbApiKey}) => combineLatest(
      GenreSource(mdbApiKey),
      SearchMovieSource(mdbApiKey, searchTerm, page + 1)
    ).subscribe(
      ([genres, {resultsCount, movies: moreMovies}]) => {
        this.setState({
          resultsCount,
          results: [...results, ...moreMovies],
          page: page + 1,
          genres,
          mdbApiKey,
        })
      }))
  }

  loadMorePersons() {
    const {page, results, searchTerm} = this.state;
    const apiKey$ = ApiKeySource();
    apiKey$.subscribe(({MDB_API_KEY: mdbApiKey}) => combineLatest(
      GenreSource(mdbApiKey),
      SearchPersonSource(mdbApiKey, searchTerm, page + 1)
    ).subscribe(
      ([genres, {resultsCount, movies: moreMovies}]) => {
        this.setState({
          resultsCount,
          results: [...results, ...moreMovies],
          page: page + 1,
          genres,
          mdbApiKey,
        })
      }))
  }

  render() {
    const {results, genres, resultsCount, searchType} = this.state;
    //console.log('Update: ', searchType, results);
    return (
      <div style={{minWidth: 360, marginTop: 70}}>
        {searchType === 'movie' &&
          <MovieList
            resultsCount={resultsCount}
            movies={results}
            genres={genres}
            loadMoreMovies={this.loadMoreMovies} />
        }
        {searchType === 'person' &&
          <PersonList
            resultsCount={resultsCount}
            persons={results}
            loadMorePersons={this.loadMorePersons} />
        }
      </div>
    );
  }
}
