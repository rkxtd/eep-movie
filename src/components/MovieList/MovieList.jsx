import React from "react";
import MovieCard from "../MovieCard";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ListSort from "../ListSort";

export default function MovieList({movies}) {
  return (
    <React.Fragment>
      <AppBar position="static" color="default" style={{marginTop: 60}}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignContent: 'stretch', flexWrap: 'wrap'}}>
          <Typography variant="h6" color="inherit">
            Results: 19
          </Typography>
          <ListSort />
        </Toolbar>
      </AppBar>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'stretch', flexWrap: 'wrap'}}>
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />
        })}
      </div>
    </React.Fragment>
  );
}
