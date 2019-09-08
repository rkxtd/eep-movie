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
        height: 100,
    }
});

export default function PersonCard(props) {
    const classes = useStyles();
    return (
        <Link to={`/person/${props.id}`} style={{textDecoration: 'none'}}>
            <Card className={classes.card}>
                <CardActionArea style={{ position: 'relative'}}>
                    <CardMedia
                        className={classes.media}
                        image={props.profile_path}
                        title={props.name} />
                    <CardContent className={classes.content} style={{ position: 'absolute', bottom: 0, background: '#fff', width: '100%' }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant="h6" style={{textAlign: 'left',  marginRight: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{props.name}</Typography>
                        </div>
                        <Typography color="textSecondary" component="p" style={{textAlign: 'left'}}>
                            {props.known_for.filter(({ title }) => (title)).map(({ title }, index) => <span key={index}>{ title }{ index < props.known_for.length - 1 ? ', ' : '' }</span>)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
