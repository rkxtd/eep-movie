export async function apiDiscover(sortBy = 'popularity.desc', page = 1) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${window.mdbApiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}`);
}
