import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DisplayUrlJoin from './displayUrlJoin';
// import './event.css';
import './miniEvent.css';
import SimpleImg from '../assets/simpleImg.png'
import price from '../assets/price.png'
import arrow from '../assets/arrow.png'
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    console.log("userName", state.userName)
    console.log("state.devJwt", state.devJwt)
    return {
        events: state.events,
        userName: state.userName,
        devJwt: state.devJwt
    }
}

export default withRouter(connect(mapStateToProps)(function MiniEvent(props) {
    const { index,img,title, events, userName, TokenToString, history } = props;
    // const [events, setEvents] = useState([{ title: 'aaa', start: '03-03', place: 'urnu,jrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: 'urnujrn' }, { title: 'aaa', start: '03-03', place: 'u,rnujrn' }, { title: 'aaa', start: '03-03', place: ',urnujrn' }])
    const [url, setUrl] = useState('')
    const [isShown, setIsShown] = useState(false)
    const join = (url) => {
        setUrl(url)
    }
    function details() {
        console.log('details')

        history.push({ pathname: `/${userName}/eventDetails/${index}`, state: { index: index } })

        // <Redirect to={{pathname: "/eventDetails",state: { index: index }}} />
    }
    return (
        <>
            <Card className="miniEventCard" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onDoubleClick={() => details()} data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <div className="row pRow">
                    <img src={SimpleImg} className="imgMiniEvent" />
                </div>
                <div className="miniEventDescription">
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <div >
                                <span className="col-sm-12 miniEventTitle" >{title}title</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>

    )
}))

