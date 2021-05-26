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
import SimpleImg from '../assets/simpleImg.png'

function mapStateToProps(state) {
    console.log("userName", state.userName)
    console.log("state.devJwt", state.devJwt)
    return {
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
                <img src={SimpleImg} className="eventImg" />
                <div className="eventDescription">
                    <span className="eventTitle" >{events[index].title}</span>
                    <div className="container-fluid">
                        <div className="row no-gutters mx-0">
                            <div className="col-xs-1 col-sm-2 col-md-4 padding-0 px-0 ">
                                <span className="time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                                </svg> {events[index].start.slice(8, 10)}/{events[index].start.slice(5, 7)}</span>
                            </div>
                            <div className="col-xs-1 col-sm-3 col-md-3 padding-0">
                                <span className="time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>  {events[index].start.slice(11, 16)}</span>
                            </div>
                            <div className="col-xs-1 col-md-3 padding-0 d-md-block">
                                <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg> {events[index].place.split(',')[2]}</span>
                            </div>
                        </div>
                    </div>
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

