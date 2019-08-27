import React from "react";
import MovieCard from "../MovieCard";
import InfiniteScroll from 'react-infinite-scroller';

export default function MovieList({movies, genres, loadMoreMovies }) {
  const items = movies.map((movie, index) => <MovieCard key={index} {...movie} genres={genres} />);
  return (
    <React.Fragment>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreMovies}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
        style={{display: 'flex', justifyContent: 'center', alignContent: 'stretch', flexWrap: 'wrap'}}
      >
        {items}
      </InfiniteScroll>
    </React.Fragment>
  );
}
