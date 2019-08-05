import React from "react";
import MovieList from '../../components/MovieList';
import movies from './movies';
import randomTextMeme from 'random-text-meme';

export default function HomePage() {
    return (
        <div style={{minWidth: 360}}>
            Home Page {randomTextMeme.getEmoji('flip-table')}
            <MovieList movies={movies} />
        </div>
    );
}
