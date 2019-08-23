import { fromFetch } from 'rxjs/fetch';

export default (apiKey) => {
  debugger;
  return fromFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
}
