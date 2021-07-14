import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { actionsStore } from '../../../redux/actions'
import './title.css'
import arrow from '../../../assets/Polygon 24@2x.png'
// import CreateEvent from './events/createEvent/createEvent's
import { connect } from 'react-redux'
import red from '../../../assets/red.png'
import yellow from '../../../assets/yellow.png'
import pink from '../../../assets/pink.png'
import black from '../../../assets/black.png'
import gray from '../../../assets/gray.png'
import lightBlue from '../../../assets/lightBlue.png'
import lightBlue2 from '../../../assets/lightBlue2.png'
import orange from '../../../assets/orange.png'
import pink2 from '../../../assets/pink2.png'
import purple1 from '../../../assets/purple1.png'
import purple2 from '../../../assets/purple2.png'
import turquoise from '../../../assets/turquoise.png'
// import { subscribe } from '../../../redux/middlweare/crud'
import AllEvents from '../../events/allEvents/allEvents'
import FooterEventsGallery from '../../footer/footerEventsGallery';
import Subscribe from '../../subscribe/subscribe'

function mapStateToProps(state) {

    // red #86F3FF
    document.documentElement.style.setProperty('--Button-color', state.pageSettings.page.eventsButtonColor);
    document.documentElement.style.setProperty('--align-text', state.editHeader.header.eventsPageAlignment);
    return {
        pagesettings: state.pageSettings.page,
        headersettings: state.editHeader.header,
        subscribesettings: state.editSubscription.subscribe,
        message: state.allEvents.message,
    }
}
const mapDispatchToProps = (dispatch) => ({
    subscribe: (obj) => dispatch(actionsStore.createSubscribe(obj)),
    systemWave: (res) => dispatch(actionsStore.createSystemWave(res)),
    setMessage: (res) => dispatch(actionsStore.setMessage(res)),
    changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)) },
    changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) }
    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function TitleEvent(props) {
    const { pagesettings, headersettings, subscribesettings, message, subscribe, systemWave, setMessage } = props;
    const img =
    {
        '#ad60ff': purple1,
        '#4f40d0': purple2,
        '#ff53f7': pink,
        '#ff62b2': pink2,
        '#fa5252': red,
        '#ff803f': orange,
        '#faee3a': yellow,
        '#424149': black,
        '#9f9cb5': gray,
        '#63f597': turquoise,
        '#54b9ff': lightBlue,
        '#51e7fb': lightBlue2
    }
    
    function checkImg() {
        let x = headersettings.eventsPageImageOrVideo.replace(/[{()}]/g, '');
        if (x.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/)) {
            return true;
        } else {
            return false;
        }
    }
    function setHeightAndWidth() {
        var myImg = new Image();
        var size;
        myImg.src = headersettings.eventsPageImageOrVideo;
        myImg.onload = function () {
            size = myImg.width / myImg.height * 25;
            size += "vw";
            console.log("myImg.width  ", myImg.width, "  myImg.height  ", myImg.height)
            console.log("@@" + size + "@@")
            document.documentElement.style.setProperty('--image-width', size);

        }
    }

    function setFontsize() {
        debugger
        var height, len = headersettings.eventsPageTitle.length;
        height = Math.ceil(len / 15) * 7;
        let textLength = headersettings.eventsPageTitle.length
        let textSize = 5
        const baseSize = 8
        if (Math.ceil(len / 15) >= 2) {
            textSize = textSize - 1;
            if (Math.ceil(len / 15) >= 3) {
                textSize = textSize - 1
                if (Math.ceil(len / 15) >= 4) {
                    textSize = textSize - 1
                }
            }
        }
        document.documentElement.style.setProperty('--font-size-titleSettings', `${textSize}vw`);
    }
    useEffect(() => {
        if (headersettings) {
            setHeightAndWidth()
            setFontsize()
        }
    }, [headersettings])
    return (
        <>
            {pagesettings.user !== '' ?

                <div className="container-fluid userEventsTitle" >

                    <div className="row titleRow">
                        <img className="myImg titleImgColor" src={img[pagesettings.eventsPageColor]}></img>
                        <img className="mylogo" src={headersettings.eventsPageLogo}></img>

                        <div className="row ">

                            <div className="col-5 titleAndDescription">

                                <h1 className="titleH1"> {headersettings.eventsPageTitle}</h1>
                                {<p className="descriptionP"> {headersettings.eventsPageDescription}</p>}
                            </div>
                            <div className="wrapImgOrVieo col-6 d-flex justify-content-center">
                                <div className="imgOrVieo">
                                    {checkImg() === true ?
                                        <img className="myImg" id="imageInTitle" src={headersettings.eventsPageImageOrVideo} heigt="100%" width="100%"></img>
                                        : <ReactPlayer width='100%'
                                            height='45vh' className="video_or_picture" url={headersettings.eventsPageImageOrVideo} controls={true} />
                                    }

                                </div></div>
                        </div>
                    </div>
                    <Subscribe/>
                    {/* <div className="row imgTitleDetails">
                    <img src={img[pagesettings.eventsPageColor]} height="100%" width="100%" style={{ padding: 0, borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}></img>
                    <div className="col-7 eventDetailsTitle">
                        <div className="eventTitle" > <h1 className="titleH1"> {headersettings.eventsPageTitle}</h1>

                            <div className="eventDetails">{<p className="descriptionP"> {headersettings.eventsPageDescription}</p>}
                            </div>
                        </div>
                    </div>
                    <div class="col-5 picTitle"> {checkImg() === true ?
                        <img id="imageInTitle" src={headersettings.eventsPageImageOrVideo} height="100%" width="100%"></img>
                        : <ReactPlayer width='100%'
                            height='100%' className="video_or_picture" url={headersettings.eventsPageImageOrVideo} controls={true} />
                    }

                    </div>
                </div> */}





                    <div className="container-fluid evnetsUnderFilter">
                        <div className="row">
                            <AllEvents style={{ zIndex: 1 }} sentBy={"titleEvent"}></AllEvents>
                            {/* <div className="col-3 createEventArea">
                        <CreateEvent></CreateEvent>
                    </div> */}
                        </div>
                        <FooterEventsGallery />
                    </div>
                </div> : ''}
        </>
    )

})