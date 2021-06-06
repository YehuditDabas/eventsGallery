import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DisplayUrlJoin from './displayUrlJoin';
import './event.css';

function mapStateToProps(state) {
    console.log("userName", state.userName)
    console.log("state.devJwt", state.devJwt)
    return {
        events: state.events,
        userName: state.userName,
        devJwt: state.devJwt
    }
}

export default connect(mapStateToProps)(function DisplayEvent(props) {
    const { index, events, userName, TokenToString } = props;
    const [url, setUrl] = useState('')
    const classes = useStyles();
    const join = (url) => {
        setUrl(url)
    }
    return (
        <>
            <Card>
                <img src={events[index].image} className="eventImg" />
                <div className="eventDescription">
                    <p className="title">{events[index].title}</p>
                </div>
            </Card>
            {/* <Card className={classes.root}>
                <CardActionArea>

                    <CardContent className="eventDescription">
                        <Typography gutterBottom variant="h5" component="h2">{events[index].title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{events[index].description}</Typography>
                        {events[index].start.slice(0, 10)!==events[index].end.slice(0, 10)?<><Typography variant="body2" color="textSecondary" component="p">מתאריך:  {events[index].start.slice(0, 10)}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">עד: {events[index].end.slice(0, 10)}</Typography></>:  <Typography variant="body2" color="textSecondary" component="p">תאריך: {events[index].start.slice(0, 10)}</Typography>}
                        <Typography variant="body2" color="textSecondary" component="p">{events[index].place}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> מספר משתתפים מקסימאלי {events[index].maxParticipants}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => join(events[index].registrationURL)}>להצתרפות</Button>
                </CardActions>
            </Card> */}
            {url !== '' ? <DisplayUrlJoin url={url}></DisplayUrlJoin> : ''}
        </>

    )
})

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

