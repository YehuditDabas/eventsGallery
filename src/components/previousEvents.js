import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import AliceCarousel from 'react-alice-carousel';
import './previousEvents.css'
const Gallery = () => (
    <AliceCarousel>
        <img src="/img1" className="yours-custom-class" />
        <img src="/img2" className="yours-custom-class" />
        <img src="/img3" className="yours-custom-class" />
        <img src="/img4" className="yours-custom-class" />
        <img src="/img5" className="yours-custom-class" />
    </AliceCarousel>
)

export default connect()(function PreviousEvents(props) {

    return (
        <>
            <h1 className="previousEventsTitle">Watch previous events</h1>
            <AliceCarousel duration={400}
                autoPlay={true}
                startIndex={0}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlayActionDisabled={true}>
                <div className="col-3">
                    <ReactPlayer width='100%' height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />
                    <div className="videoText">
                        <br></br>
                        <br></br>
                        <div className="">event title</div>
                    </div>
                </div>
                <div className="col-3">
                    <ReactPlayer width='100%' height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />
                </div>
                <div className="col-3">
                    <ReactPlayer width='100%' height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />
                </div>
                <div className="col-3">
                    <ReactPlayer width='100%' height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />
                </div>
                <div className="col-3">
                    <ReactPlayer width='100%' height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />
                </div>
            </AliceCarousel>

        </>

    )
})
