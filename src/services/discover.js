import {fromFetch} from 'rxjs/fetch';
import {of} from 'rxjs';
import {switchMap, catchError, map} from 'rxjs/operators';
import config from "../config";

const decoratedFromFetch = (url) => {
  return fromFetch(url).pipe(
    switchMap(response => {
      if (response.ok) {
        return response.json();
      } else {
        return of({error: true, message: `Error ${response.status}`});
      }
    }),
    catchError(err => {
      return of({error: true, message: err.message})
    })
  );
}

export const DiscoverSource = (apiKey, sortBy = 'popularity.desc', page = 1) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}`)
    .pipe(map(({
                 total_results: resultsCount,
                 results,
                 total_pages: pagesCount,
               }) => ({
      resultsCount,
      movies: results.map(movie => ({
        ...movie,
        release_date: movie.release_date || '1970/01/01 00:00:00',
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : `https://as1.ftcdn.net/jpg/01/63/16/64/500_F_163166486_lbs6jKnxWlXEZpSIjRJG4lmque9hrjyT.jpg`})
      ), pagesCount})));
}

export const GenreSource = (apiKey) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .pipe(
      map(({genres}) => genres.reduce((acc, {id, name}) => {
        acc[id] = name;
        return acc;
      }, {}))
    );
}

export const SearchMovieSource = (apiKey, searchTerm, page = 1) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=${page}`)
    .pipe(map(({
                 total_results: resultsCount,
                 results = [],
                 total_pages: pagesCount,
               }) => ({
      resultsCount,
      movies: results.map(movie => ({
        ...movie,
        release_date: movie.release_date || '1970/01/01 00:00:00',
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : `https://as1.ftcdn.net/jpg/01/63/16/64/500_F_163166486_lbs6jKnxWlXEZpSIjRJG4lmque9hrjyT.jpg`})
      ), pagesCount})));
}

export const SearchPersonSource = (apiKey, searchTerm, page = 1) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=${page}`)
    .pipe(map(({
                 total_results: resultsCount,
                 results = [],
                 total_pages: pagesCount,
               }) => ({
      resultsCount,
      persons: results.map(person => ({
        ...person,
        profile_path: person.profile_path
          ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
          : `https://secondchancetinyhomes.org/wp-content/uploads/2016/09/empty-profile.png`,
          known_for: person.known_for || [],
        })
      ), pagesCount})));
}

export const ApiKeySource = () => {
  const apiHost = window.location.hostname === 'localhost' ? config.devApiUrl : config.prodApiUrl;
  return decoratedFromFetch(`${apiHost}/api/get-mdb-api-key`);
}
