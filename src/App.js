import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppBar } from './components';
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
      <AppBar />
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Paper className={classes.root}>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </Router>
                </Paper>
            </Container>
        </React.Fragment>
    </div>
  );
}

function Home() {
  return (
      <div>
        <h2>Home</h2>
      </div>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}

export default App;
