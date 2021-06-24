import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './event.css';
import SimpleImg from '../../../assets/simpleImg.png'
import price from '../../../assets/price.png'
import arrow from '../../../assets/arrow.png'
import black from '../../../assets/arrows/black.png'
import blue from '../../../assets/arrows/blue.png'
import gray from '../../../assets/arrows/gray.png'
import green from '../../../assets/arrows/green.png'
import lightblue from '../../../assets/arrows/lightblue.png'
import lightpink from '../../../assets/arrows/lightpink.png'
import orange from '../../../assets/arrows/orange.png'
import pink from '../../../assets/arrows/pink.png'
import purple from '../../../assets/arrows/purple.png'
import red from '../../../assets/arrows/red.png'
import turkiz from '../../../assets/arrows/turkiz.png'
import yellow from '../../../assets/arrows/yellow.png'
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) { 
    
    return {
        events: state.allEvents.events,   
        eventsPageColor: state.pageSettings.page.eventsPageColor,
        userName: state.allEvents.userName,
        devJwt: state.allEvents.devJwt
    }
}

export default withRouter(connect(mapStateToProps)(function DisplayEvent(props) {
    const { eventsPageColor, userName, TokenToString, history, currentEvent,events } = props;
    // console.log("event",events)
    document.documentElement.style.setProperty('--main-color', eventsPageColor);


    // const [events, setEvents] = useState([{ title: 'aaa', start: '03-03', place: 'urnu,jrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: 'urnujrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: ',urnujrn' }])
    const [url, setUrl] = useState('')
    const [isShown, setIsShown] = useState(false)
    const classes = useStyles();
    // document.documentElement.style.setProperty('--main-color','#63F597');

    const images = {
        '#424149': black,
        '#4f40d0': blue,
        '#9f9cb5': gray,
        '#63f597': green,
        '#54b9ff': turkiz,
        '#ff53f7': lightpink,
        '#ff803f': orange,
        '#ff62b2': pink,
        '#ad60ff': purple,
        '#fa5252': red,
        '#51e7fb': lightblue,
        '#faee3a': yellow
    }
  

    function details() {
        console.log('details')
        var index = events.indexOf(currentEvent);
        console.log('index ', index);
        history.push({ pathname: `/${userName}/eventDetails/${index}`, state: { index: index } })

        // <Redirect to={{pathname: "/eventDetails",state: { index: index }}} />
    }
    return (
        <>
            <Card className="eventCard" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onDoubleClick={() => details()} data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <div className="row pRow">
                    <img src={currentEvent.image == "" ? SimpleImg : currentEvent.image} className="eventImg" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi des bi-share" viewBox="0 0 16 16" style={{ width: "8vw" }}>
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi deh bi-heart" viewBox="0 0 16 16" style={{ width: "8vw" }}>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>

                    <div hidden={isShown} className="priceD"><img className="price" src={images[eventsPageColor]}></img></div>
                    {/* <div hidden={isShown} className="priceD">
                        <div className="rectangle"></div>
                        <div className="triangle-left"></div>
                    </div> */}
                    <div hidden={isShown} className="priceTextEvent">{currentEvent.price === undefined ? 'Free' : currentEvent.price}</div>
                </div>
                <div className="eventDescription">
                    <div className="container eventContainer">
                        <div className="row leftSite">
                            <div style={{ marginTop: "5%" }, { width: "75%" }} hidden={isShown} >
                                <span className="col-sm-12 eeventTitle" >{currentEvent.title}</span>
                            </div>
                        </div>
                        <br hidden={!isShown} />
                        <br hidden={!isShown} />
                        <span hidden={!isShown} className="showDetails">View Details</span>
                        <div className="details" hidden={!isShown}>
                            <img src={arrow} ></img>
                        </div>
                        <div className="row padding-0" hidden={isShown}>
                            <div className="col-12 padding-0 leftSite">
                                <span className="timeDetails"> {currentEvent.start.slice(8, 10)}/{currentEvent.start.slice(5, 7)} . {currentEvent.start.slice(11, 16)} . {currentEvent.place.split(',')[2]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
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

