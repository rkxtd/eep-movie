import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import AppBar from './components/AppBar';
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
                    <Paper className={classes.root} style={{minWidth: 380}}>
                        <div>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/search" component={SearchPage} />
                            <Route path="/movie/:id" component={MoviePage} />
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        </Router>
    </div>
  );
}

export default App;
