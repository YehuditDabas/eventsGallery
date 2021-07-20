import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { actionsStore } from '../../../redux/actions'
import './eventDetails.css';
import { withRouter } from 'react-router-dom'
import arrow from '../../../assets/Polygon 24@2x.png'
import SimpleImg from '../../../assets/simpleImg.png'
import user from '../../../assets/user.svg'
import title from '../../../assets/title.png';
import MiniEvent from '../miniEvents/miniEvent';
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
import reactImageSize from 'react-image-size';
import FooterEventsGallery from '../../footer/footerEventsGallery'

function mapStateToProps(state) {
    var year = new Date();
    year = year.getUTCFullYear();
    return {
        events: state.allEvents.events,
        mainColor: state.pageSettings.page.eventsPageColor,
        eventsButtonColor: state.pageSettings.page.eventsButtonColor,
        subscribesettings: state.editSubscription.subscribe,
        message: state.allEvents.message,
        newEvent:state.createEvent
    }
}
const mapDispatchToProps = (dispatch) => ({
    subscribe: (obj) => dispatch(actionsStore.createSubscribe(obj)),
    systemWave: (res) => dispatch(actionsStore.createSystemWave(res)),
    setMessage: (res) => dispatch(actionsStore.setMessage(res)),
    changeTitleEvent:(title)=>dispatch(actionsStore.setTitleEvent(title)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function NewEventDetails(props) {
    const { events, mainColor, eventsButtonColor } = props;
    const { pagesettings, headersettings, subscribesettings, message, subscribe, systemWave, setMessage,changeTitleEvent,newEvent } = props;

    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--button-color', eventsButtonColor);
    //const index = window.location.pathname.split('/')[3]
    // var year = new Date();
    // year = year.getUTCFullYear();
    // var mon = index < 10 ? events[index].start.slice(6, 7) : events[index].start.slice(5, 7);
    // console.log("inddddddd  ", mon);
    // var ev = events.filter(item => item.start.slice(6, 7) == mon && item != events[index]&&item.start.slice(0,4) ==year);
    const [moreEvents, setMoreEvents] = useState();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let e1 = [];
    const [errorsForm, setErrorsForm] = useState('')
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [placeHolderEmail, setPlaceHolderEmail] = useState("email");
    const [placeHolderName, setPlaceHolderName] = useState("name");
    const [placeHolderPhone, setPlaceHolderPhone] = useState("phone");
    const [placeHolderAdress, setPlaceHolderAdress] = useState("adress");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    // console.log(events[index])
    //console.log('index', index)

    function setWidth() {
        const { widthP, heightP } = reactImageSize(events[0].image)
        return widthP;
    }

    function setMore(e1) {
        setMoreEvents(e1);

    }
    // async function addMoreEvents() {
    //     let mon = await month().slice(3, 10);
    //     let numMonth = await months.indexOf(mon) < 10 ? "0" + (months.indexOf(mon) * 1 + 1) : (months.indexOf(mon) * 1) + 1;
    //     console.log("moreE " + numMonth)
    //     e1 = await events.filter((item, indexM) => item.start.indexOf(numMonth) == 5 && indexM != index);
    //     setMore(e1);
    //     console.log(moreEvents != undefined ? moreEvents[0] : "no more")
    // }
    // function setHeightAndWidth() {
    //     // var myImg = document.querySelector("#ti")
    //     var myImg = new Image();
    //     var size;
    //     myImg.src = events[index].image;
    //     myImg.onload = function () {
    //         size = myImg.width / myImg.height * 25;
    //         size += "vw";
    //         console.log("myImg.width  ", myImg.width, "  myImg.height  ", myImg.height)
    //         console.log("@@" + size + "@@")
    //         document.documentElement.style.setProperty('--image-width', size);

    //     }


    // }

    const [showing, setShowing] = useState(false);
    async function beforeSubscribe() {
        setErrorsForm('')
        debugger
        const obj = {
            email: email,
            name: name,
            phone: phone,
            address: adress
        };
        let valid = true
        // subscribe();
        if (subscribesettings.name && name === '') {
            valid = false;
            setErrorsForm(...errorsForm, 'name')

            console.log(errorsForm)
        }
        if (subscribesettings.email && email === '') {
            valid = false;
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'email')
        }
        if (subscribesettings.phone && phone === '') {
            valid = false;
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'phone')

        }
        if (subscribesettings.adress && adress === '') {
            valid = false;
            // formIsValid = false;
            // setErrorsForm("name","Cannot be empty")
            // setErrorsForm({...errorsForm, name: 'email',error:"Cannot be empty"})
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'adress')

        }
        if (valid === false) {
            setErrorsForm('Fill in all the details')
        }
        else {
            let resSub = await props.subscribe(obj)
            handleShow()
            setShowing(false)

        }
        setPlaceHolderEmail("email");
        setPlaceHolderName("name");
        setPlaceHolderPhone("phone");
        setPlaceHolderAdress("adress");


        console.log(obj)
    }
    // useEffect(() => {

    //     if (events && events.length != 0) {
    //         addMoreEvents();
    //         setHeightAndWidth();

    //     }
    // }, [events])
    return (
        <>
            {events.length !== 0 ? <>
                <div className="detailsContainer">
                    <div className="container-fluid">
                        <div className="row imgTitleDetails">
                            <img src={img[mainColor]} height="100%" width="100%" style={{ padding: 0, borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}></img>
                            <div className="col-7 eventDetailsTitle">
                                <div className="eventTitle" >
                                    <textarea
                                        className="adminEventTitletitleH1"
                                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                                        onChange={(e) => changeTitleEvent(e.target.value)}
                                        value={newEvent.title}
                                        maxLength="20"
                                        placeholder='title'
                                    >
                                    </textarea>
                                    <div className="eventDetails">
                                        {/* <br /><a href={events[index].registrationURL} target="_blank" className="btn ticketsButton"  >Tickets</a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-5 picTitle"><img src={newEvent.image} id="ti" height="100%" width="100%"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 subscribeArea">
                                {/* <input type="text" value="subscribe" className="subscribe"></input> */}
                                <button type="button" className="subscribe" onClick={() => setShowing(!showing)}>subscribe</button>

                                {/* <button className="btn btn-primary subscribe" value="subscribe" ></button> */}
                                {showing && (subscribesettings.name === true || subscribesettings.email === true || subscribesettings.phone === true || subscribesettings.address === true) ?
                                    <div>
                                        <img className="arrow_" src={arrow}></img>
                                        <div className="dropDown">
                                            <form className="formSubscribe">
                                                <br></br>
                                                {/* const[placeHolderAdress,setPlaceHolderAdress]=useState("adress"); */}
                                                {subscribesettings.name === true ? <input class="form-control form-control-sm " id="name" type="text" placeholder={placeHolderName} onChange={(e) => setName(e.target.value)} /> : <></>}
                                                {subscribesettings.email === true ? <input class="form-control form-control-sm " id="emailField" type="text" placeholder={placeHolderEmail} onChange={(e) => setEmail(e.target.value)} /> : <></>}
                                                {subscribesettings.phone === true ? <input class="form-control form-control-sm " id="PhoneField!" type="text" placeholder={placeHolderPhone} onChange={(e) => setPhone(e.target.value)} /> : <></>}
                                                {subscribesettings.address === true ? <input class="form-control form-control-sm " id="emailField!" type="text" placeholder={placeHolderAdress} onChange={(e) => setAdress(e.target.value)} /> : <></>}
                                                <span style={{ color: "red" }}>{errorsForm}</span>
                                                <br></br><br></br>
                                                <input type="button" class="form-control" id="subscribeInside" value="subscribe" onClick={beforeSubscribe}></input>


                                            </form>

                                        </div></div> :
                                    <div></div>
                                }
                            </div>

                        </div>
                        <div className="row">
                            <div className="at col-7">
                                <div className="eventDetailsAboutTitle">About The Event
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi eds bi-share" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi edh bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg></div>
                                <div className="eventDetailsDescription"  > <p>your descripition</p></div>
                            </div>
                            <div className="eventDetailsSide col-5">
                                <span className="col-sm-12 col-md-6 col-lg-3 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock biTime" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg> </span>
                                <br></br>
                                <span className="time"> </span>
                                <br></br>
                                <span className="time"> </span>
                                <br></br>
                                <span className="col-sm-6 col-md-6 col-lg-6 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt biTime" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg> <br></br></span>
                                <br></br>
                                <span className="timeText">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person biTime" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg><span>Participants</span>
                                </span>

                                <p className="priceText">'Free' </p>
                                {/* <br /><a href={events[index].registrationURL} target="_blank" className="btn ticketsButton"  >Tickets</a> */}

                            </div>
                        </div>
                        <div class="moreEvents">
                            <h1 className="more">more events on </h1>
                            <div className="row">
                                {moreEvents && moreEvents.map(item => <div class="col-3" ><MiniEvent img={item.image} title={item.title} mainColor={mainColor}></MiniEvent> </div>)}
                            </div>
                        </div>
                        <FooterEventsGallery style={{ marginTop: "5%" }} />
                    </div>

                </div>


            </> : ''}

        </>

    )
}))



