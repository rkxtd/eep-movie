import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import MainAppBar from './components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import queryString from 'query-string';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        // const values = queryString.parse(this.props.location.search)
        // console.log(values);
    }

    render () {
        return (
            <div className="App">
                <Router>
                    <MainAppBar />
                    <React.Fragment>
                        <CssBaseline />
                        <Container maxWidth="xl">
                            <Typography component="div" style={{ backgroundColor: '#fff', height: '100%', minHeight: '90vh' }}>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/search/:searchType/:searchTerm" component={SearchPage} />
                                <Route path="/movie/:id" component={MoviePage} />
                            </Typography>
                        </Container>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default App;
