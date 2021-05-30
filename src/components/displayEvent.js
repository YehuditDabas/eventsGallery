import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DisplayUrlJoin from './displayUrlJoin';
import './event.css';
import SimpleImg from '../assets/simpleImg.png'
import {withRouter} from 'react-router-dom'
 
function mapStateToProps(state) {
    console.log("userName", state.userName)
    console.log("state.devJwt", state.devJwt)
    return {
        events: state.events,
        userName: state.userName,
        devJwt: state.devJwt
    }
}

export default withRouter(connect(mapStateToProps)(function DisplayEvent(props) {
    const { index, events, userName, TokenToString,history } = props;
    // const [events, setEvents] = useState([{ title: 'aaa', start: '03-03', place: 'urnu,jrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: 'urnujrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: ',urnujrn' }])
    const [url, setUrl] = useState('')
    const [isShown, setIsShown] = useState(false)
    const classes = useStyles();
    const join = (url) => {
        setUrl(url)
    }
    function details() {
        console.log('details')
        debugger
        history.push({pathname:`/${userName}/eventDetails/${index}`,state:{ index:index}})
       
       // <Redirect to={{pathname: "/eventDetails",state: { index: index }}} />
    }
    return (
        <>
            <Card className="eventCard" onClick={() => details()} data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <img src={SimpleImg} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="eventImg" />
                {/* <div className="price"></div> */}
                <div className="eventDescription">
                    <div className="container">
                        <div className="row">
                            <div hidden={isShown} >
                                <br></br>
                                <span className="col-sm-12 eventTitle" >{events[index].title}</span>
                                <br></br>
                                <br className="d-sm-none"></br>
                            </div>
                        </div>
                        <br hidden={!isShown}></br>
                        <div className="dShowDetails">
                        </div>
                        <span hidden={!isShown} className="showDetails">View Details</span>

                        <div className="details" hidden={!isShown}>
                            <div hidden={!isShown} class="arrow">
                                <div class="line"></div>
                                <div class="point"></div>
                            </div>
                        </div>

                        <div className="row no-gutters mx-0" hidden={isShown}>
                            <span className="col-sm-12 col-md-3 col-lg-3 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar4 biTime" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                            </svg> {events[index].start.slice(8, 10)}/{events[index].start.slice(5, 7)}</span>
                            <span className="col-sm-12 col-md-6 col-lg-3 time padding-0" hidden={isShown}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock biTime" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>  {events[index].start.slice(11, 16)}</span>
                            <span className="col-sm-6 col-md-6 col-lg-6 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt biTime" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> {events[index].place.split(',')[2]}</span>
                        </div>
                    </div>
                </div>
            </Card>
            {url !== '' ? <DisplayUrlJoin url={url}></DisplayUrlJoin> : ''}
        </>

    )
}))

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

