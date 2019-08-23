import React from "react";
import MovieCard from "../MovieCard";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ListSort from "../ListSort";
import InfiniteScroll from 'react-infinite-scroller';

export default function MovieList({movies, genres, sortBy, resultsCount, handleSortChange, loadMoreMovies }) {
  const items = movies.map((movie, index) => <MovieCard key={index} {...movie} genres={genres} />);
  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignContent: 'stretch', flexWrap: 'wrap'}}>
          <Typography variant="h6" color="inherit">
            Results: {resultsCount}
          </Typography>
          <ListSort
            sortBy={sortBy}
            handleChange={handleSortChange} />
        </Toolbar>
      </AppBar>
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
