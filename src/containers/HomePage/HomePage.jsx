import React, {Component} from "react";
import MovieList from '../../components/MovieList';
import {combineLatest} from 'rxjs';
import {ApiKeySource, DiscoverSource, GenreSource} from '../../services/discover';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListSort from "../../components/ListSort";
import AppBar from "@material-ui/core/AppBar";

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
    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  componentDidMount() {}

  handleSortChange(event) {
    const {mdbApiKey} = this.state;
    const sortBy = event.target.value;
    this.setState({sortBy});
    DiscoverSource(mdbApiKey, sortBy)
      .subscribe(({resultsCount, movies}) => {
        this.setState({
          resultsCount,
          movies
        })
      })
  }

  loadMoreMovies() {
    const {sortBy, page, movies} = this.state;
    const apiKey$ = ApiKeySource();
    apiKey$.subscribe(({MDB_API_KEY: mdbApiKey}) => combineLatest(
      GenreSource(mdbApiKey),
      DiscoverSource(mdbApiKey, sortBy, page + 1)
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
      <div style={{minWidth: 360}}>

        <AppBar position="static" color="default">
          <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignContent: 'stretch', flexWrap: 'wrap'}}>
            <Typography variant="h6" color="inherit">
              Results: {resultsCount}
            </Typography>
            <ListSort
              sortBy={sortBy}
              handleChange={this.handleSortChange} />
          </Toolbar>
        </AppBar>
        <MovieList
          resultsCount={resultsCount}
          movies={movies}
          genres={genres}
          loadMoreMovies={this.loadMoreMovies} />
      </div>
    );
  }
}
