import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth: 230,
        margin: '10px',
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/433301/pexels-photo-433301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Train"
                />
                <CardContent>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="h5" style={{textAlign: 'left'}}>Одного разу у Лас Вегасі</Typography>
                        <Typography style={{ border: 'solid 1px', padding: '2px 5px', fontSize: 12, borderRadius: 3, height: 24}}>1997</Typography>
                    </div>
                    <Typography color="textSecondary" component="p" style={{textAlign: 'left'}}>
                        Drama
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
