import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import { actionsStore } from '../../../redux/actions';
import AliceCarousel from 'react-alice-carousel';
import './previousEvents.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import simpleImg from '../../../assets/simpleImg.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
function mapStateToProps(state) {
    console.log("event", state.allEvents.events)
    return {
        events: state.allEvents.events,
        eventsPageColor: state.settings.settings.eventsPageColor

    }
}

export default connect(mapStateToProps)(function PreviousEvents(props) {
    const { events, eventsPageColor } = props

    const ReverseEvents = [...events].reverse()
    if (eventsPageColor !== '')
        document.documentElement.style.setProperty('--main-color', eventsPageColor);
    return (
        <>
            <h1 className="previousEventsTitle">Watch previous events</h1>
            {events.length !== 0 ?
                <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                    {
                        ReverseEvents.map((item, index) => {
                            return (
                                <div className="col-11 video" key={index}  >
                                    <ReactPlayer width='100%' height='100%' className="reactPlayer" url='https://youtu.be/goCN79SruQU' config={{
                                        youtube: {
                                            playerVars: { modestbranding: 1 }
                                        }
                                    }} controls={false} />
                                    <span className="col-3 videoText"><br /><br />title event . {item.start.slice(8, 10)}/{item.start.slice(5, 7)}</span>
                                </div>
                            )
                        })
                    }
                    <div className="col-11 video"  >
                        <ReactPlayer width='100%' height='100%' url='https://youtu.be/cw0GzFG2KFg' />
                        <span width='100%' className="col-3 videoText"><br /><br />title </span>
                    </div>
                    <div className="col-11 video"  >
                        <ReactPlayer width='100%' height='100%' url='https://youtu.be/goCN79SruQU' />
                        <span width='100%' className="col-3 videoText"><br /><br />title </span>
                    </div>
                </Carousel> : 'loading'}
        </>
    )
})
