import React from "react";
import MovieList from '../../components/MovieList';
import movies from './movies';

export default function HomePage() {
    return (
        <div style={{minWidth: 360}}>
            Home Page
            <MovieList movies={movies} />
        </div>
    );
}
