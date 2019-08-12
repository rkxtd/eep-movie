import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import AppBar from './components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mdbApiKey: "",
        };

        // fetch('/api/get-mdb-api-key')
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function({ MDB_API_KEY }) {
        //         this.setState({ mdbApiKey: MDB_API_KEY });
        //     });
    }

    render () {
        return (
            <div className="App">
                <Router>
                    <AppBar />
                    <React.Fragment>
                        <CssBaseline />
                        <Container>
                            <Paper style={{minWidth: 380}}>
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
        )
    }
}

export default App;
