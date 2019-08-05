import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppBar, MovieCard } from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

function App() {
    const classes = useStyles();
  return (
    <div className="App">
        <Router>
            <AppBar />
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Paper className={classes.root}>
                        <div>
                            <Route exact path="/" component={MovieList} />
                            <Route path="/search" component={Search} />
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        </Router>
    </div>
  );
}

function MovieList() {
  return (
      <div style={{display: 'flex', justifyContent: 'flex-start', alignContent:'stretch', flexWrap: 'wrap'}}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
      </div>
  );
}

function Search(props) {
  return (
      <div>
        <h2>Search Results {props.location.search}</h2>
      </div>
  );
}

export default App;
