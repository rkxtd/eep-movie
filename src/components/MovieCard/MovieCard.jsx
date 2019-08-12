import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        width: 300,
        minWidth: 270,
        margin: '10px',
        height: 400,
    },
    media: {
        height: 400,
    },
    content: {
        height: 0,
        '&:hover': {
            height: 'auto',
        },
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    const onHover = (e) => {
        // const div = e.target.parentElement.querySelector('.MuiCardContent-root');
        // if (div)
        //     e.target.parentElement.querySelector('.MuiCardContent-root').style.display = 'block';
    };
    const onLeave = (e) => {
        // const div = e.target.parentElement.querySelector('.MuiCardContent-root');
        // if(div)
        //     e.target.parentElement.querySelector('.MuiCardContent-root').style.display = 'none';
    };
    return (
        <Link to={`/movie/${props.id}`} style={{textDecoration: 'none'}}>
            <Card className={classes.card} onMouseOver={onHover} onMouseOut={onLeave}>
                <CardActionArea style={{ position: 'relative'}}>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
                        title={props.title} />
                    <CardContent className={classes.content} style={{ position: 'absolute', bottom: 0, background: '#fff', width: '100%', maxHeight: 140, transition: 'height 2s' }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant="h5" style={{textAlign: 'left',  marginRight: '10px',}}>{props.title}</Typography>
                            <Typography style={{ border: 'solid 1px', padding: '2px 5px', fontSize: 12, borderRadius: 3, height: 24}}>{new Date(props.release_date).getFullYear()}</Typography>
                        </div>
                        <Typography color="textSecondary" component="p" style={{textAlign: 'left'}}>
                            {props.genre_ids.map((genre, index) => <span key={index}>{ genre }</span>)},
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
