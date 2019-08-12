import React from "react";
import MovieCard from "../MovieCard";

export default function MovieList({ movies, onHover }) {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start', alignContent:'stretch', flexWrap: 'wrap'}}>
            {movies.map((movie, index) => {
                return <MovieCard key={index} {...movie} onHover={onHover} />
            })}
        </div>
    );
}
