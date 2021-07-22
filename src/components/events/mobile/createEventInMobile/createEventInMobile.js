import React, { useEffect, useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import { Modal, Button } from 'react-bootstrap'
import { actionsStore } from '../../../../redux/actions'
import './createEventInMobile.css'
import { connect } from 'react-redux'
import black from '../../../../assets/titleImgMobile/black.png'
import blue from '../../../../assets/titleImgMobile/blue.png'
import gray from '../../../../assets/titleImgMobile/gray.png'
import lightBlue from '../../../../assets/titleImgMobile/lightBlue.png'
import lightBlue2 from '../../../../assets/titleImgMobile/lightBlue2.png'
import orange from '../../../../assets/titleImgMobile/orange.png'
import pink from '../../../../assets/titleImgMobile/pink.png'
import pink2 from '../../../../assets/titleImgMobile/pink2.png'
import purple from '../../../../assets/titleImgMobile/purple.png'
import red from '../../../../assets/titleImgMobile/red.png'
import turquoise from '../../../../assets/titleImgMobile/turquoise.png'
import yellow from '../../../../assets/titleImgMobile/yellow.png'

import AllEventsInMobile from '../../../events/mobile/allEventsInMobile/allEventsInMobile';
import FooterEventsGallery from '../../../footer/footerEventsGallery';
import HeaderImg from '../../../../assets/purple1Mobile.png'
import ConfiguratorSettings from '../../../Configurator/ConfiguratorSettings'
import { useMediaQuery } from 'react-responsive';
import showSettings from '../../../../assets/show.png';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import upload from '../../../../assets/upload2.png';
import Event from '../../../../models/event';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function mapStateToProps(state) {

    // red #86F3FF
    document.documentElement.style.setProperty('--Button-color', state.pageSettings.page.eventsButtonColor);
    document.documentElement.style.setProperty('--align-text', state.editHeader.header.eventsPageAlignment);
    // document.documentElement.style.setProperty('--display-configurator', 'none');

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
export default connect(mapStateToProps, mapDispatchToProps)(function CreateEventInMobile(props) {
    const { pagesettings, headersettings, message, subscribe, systemWave, setMessage } = props;
    const [eventImg, setEventImg] = useState();
    const showConf = useRef(null);
    // var eventImg;
    const isMobile = useMediaQuery({ query: `(max-width: 380px)` });
    console.log("isMobile  ", isMobile);
    const img =
    {
        '#ad60ff': purple,
        '#4f40d0': blue,
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
    const isAdmin = false;
    // const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    // const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
    const [showing, setShowing] = useState(false);
    // var newEvent = new Event();
    var csim = $(".configuratorSettingsInMobile");
    var btn = $(".showConfigurator");
    var thePage = $(".userEventsTitleMobile")
    function drag(csim) {
        csim = $(".configuratorSettingsInMobile");
        btn = $(".showConfigurator");
        thePage = $(".userEventsTitleMobile")
        var r = parseInt(csim.css('bottom'));

        if (r < 0) {
            csim.addClass('active');
        } else {
            csim.removeClass('active');
        }
        thePage.on("click", function (e) {
            e.preventDefault();
            csim.removeClass('active');
        });
    };
    thePage.on("click", function (e) {
        e.preventDefault();
        csim.removeClass('active');
    });
    btn.on("click", function (e) {
        // debugger;
        e.preventDefault();
        drag(csim);
    });
    function setImg(url) {
        setEventImg(url);
        console.log("eventImg  ", eventImg);
    }
    const changeImage = (e) => {
        const TokenToString = document.cookie && document.cookie.includes('devJwt')
            ? document.cookie
                .split(';')
                .filter(s => s.includes('devJwt'))[0]
                .split('=')
                .pop()
            : null
        const userName = window.location.pathname.split('/')[1]
        const file = e.target.files[0];
        var myFile = new FormData();
        myFile.append("file", file);
        console.log("myFile  ", myFile, "  file  ", file)

        $.ajax({

            type: "POST",
            url: "https://files.codes/api/" + userName + "/upload",
            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: (data) => {
                // alert("upload success");
                // eventImg = data.data.url;
                setImg(data.data.url)
                console.log("document.getElementById().value  ", document.getElementById("file").value);
                // console.log("eventImg  ", eventImg);
                document.getElementById("file").value = "";
                // console.log("document.getElementById().value  ",document.getElementById("file").value);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }

    useEffect(() => {
        console.log("^^^^^^^^^^^^^^")

    }, [headersettings])
    return (
        <>
            <div className="container-fluid userEventsTitleMobile" >
                <div className="thePage">

                    <div id="shortTitle">create new event</div>
                    <div className="wrapImgNewEvent col-5 d-flex justify-content-center">
                        <input type="file" name="file" accept="image/*" id="file"
                            className="newInputFile" onChange={changeImage}
                        />
                        <label htmlFor='file' className="imgNewEventFile">

                            <div className="imgNewInMobile d-flex justify-content-center" align="center">
                                {/* {eventImg ? 
                                <img src={eventImg} className="newEventImgUpload myImg" height="100%" width="100%"></img>
                               : 
                                <img className="myImg" id="imgNewEvent" src={upload} heigt="100%" width="100%" ></img>}  */}
                                <p className="uploadImgP">upload image/gif</p>


                                <div className="wrapIconCreateNew d-flex justify-content-center">
                                    <FontAwesomeIcon
                                        id='angle-right'
                                        className='iconCloudUpload uploadImgCreateNew'
                                        icon={['fas', 'cloud-upload-alt']}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                        </label>

                    </div>
                    {/* <textarea className="titleInCreateEvent"></textarea> */}
                    <div className="newEventDetails">
                        <div className="row">
                            <input type="text" placeholder="event name" className="mobileNewEventTitle" />
                        </div>
                        <div className="row"><input type="text" id="priceInputInCreateEvent" value="Free"></input>
                        </div>
                        <div className="row">
                            {/* <div className="mobileEventPriceArea">
                            <span className="mobileEventPrice">{events[index].price === undefined ? 'Free' : events[index].price}</span>
                            <input type="text" id="priceInputInCreateEvent" value="Free"></input>
                        </div> */}
                        </div>
                        <div className="row rowTimeMobile">
                            <div className="col-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock mobileBi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                            </div>
                            <div className="col-10">
                                <input type="datetime-local" className="mobileNewEventDateTime" />
                            </div>
                        </div>
                        <div className="row rowTimeMobile">
                            <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt mobileBi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></div>
                            <div className="col-10">
                                <input type="text" placeholder="location" className="mobileNewEventLocation" />
                            </div>
                        </div>
                        <div className="row rowTimeMobile">
                            <div className="iconFooter">
                                <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person mobileBi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg></div>
                                <label className="showParticipants">show participants number</label>
                                <FormControlLabel className="d-flex justify-content-between"
                                    label={<span  className="icon" id="secondIcon">
                                        </span>} control={<Switch name="participants" />}
                                />
                            </div>

                        </div>
                        {/* <div className="row rowAboutEventMobile">
                            <h1 className="mobileAboutHeader">About The Event</h1>
                            <textarea className="mobileNewEventAboutText" rows="6" />
                        </div> */}
                    </div>
                </div>
            </div>
            <button className="showConfigurator" onClick={drag}><img src={showSettings}></img></button>
            <div className="configuratorSettingsInMobile" id="mobileConfig" ><ConfiguratorSettings /></div>

        </>
    )

})
