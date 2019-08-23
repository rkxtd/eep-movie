import { fromFetch } from 'rxjs/fetch';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import config from "../config";

const decoratedFromFetch = (url) => {
  return fromFetch(url).pipe(
    switchMap(response => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError(err => {
      return of({ error: true, message: err.message })
    })
  );
}

export const DiscoverSource = (apiKey, sortBy = 'popularity.desc', page = 1) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}`);
}

export const GenreSource = (apiKey) => {
  return decoratedFromFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
}

export const ApiKeySource = () => {
  return decoratedFromFetch(`${config.apiUrl}/api/get-mdb-api-key`);
}
