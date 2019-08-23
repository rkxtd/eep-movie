import React from "react";
import MovieCard from "../MovieCard";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ListSort from "../ListSort";

export default function MovieList({movies, genres, sortBy, resultsCount, handleSortChange }) {
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
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'stretch', flexWrap: 'wrap'}}>
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} genres={genres} />
        })}
      </div>
    </React.Fragment>
  );
}
