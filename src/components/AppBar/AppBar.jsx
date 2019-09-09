import React, { Component } from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            'min-width': '150px',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class PrimarySearchAppBar extends Component {
    constructor(props) {
        super(props);
        this.doSearch = this.doSearch.bind(this);
        this.searchInputRef = React.createRef();
    }

    doSearch = (searchType, event) => {
        if (searchType === 'multi' && event.key !== 'Enter') return false;
        this.props.history.push(`/search/${searchType}/${this.searchInputRef.current.querySelector('input').value}`);
        //this.searchInputRef.current.value = '';
    };

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.grow}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                The MovieDB
                            </Typography>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search for a person or movie…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onKeyDown={this.doSearch.bind(undefined, 'multi')}
                                ref={this.searchInputRef}
                            />

                        </div>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={this.doSearch.bind(undefined, 'person')}>Person</Button>
                            <Button onClick={this.doSearch.bind(undefined, 'movie')}>Movie</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(PrimarySearchAppBar));
