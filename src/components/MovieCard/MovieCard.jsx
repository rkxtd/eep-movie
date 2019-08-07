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
        width: 320,
        minWidth: 270,
        margin: '10px',
    },
    media: {
        height: 250,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Link to={`/movie/${props.id}`} style={{textDecoration: 'none'}}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.backdrop_path}
                        title={props.title}
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant="h5" style={{textAlign: 'left',  marginRight: '10px',}}>{props.title}</Typography>
                            <Typography style={{ border: 'solid 1px', padding: '2px 5px', fontSize: 12, borderRadius: 3, height: 24}}>{new Date(props.release_date).getFullYear()}</Typography>
                        </div>
                        <Typography color="textSecondary" component="p" style={{textAlign: 'left'}}>
                            {props.genres[0].name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
