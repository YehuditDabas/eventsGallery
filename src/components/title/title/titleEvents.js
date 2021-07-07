import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Modal, Button } from 'react-bootstrap'
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
    const [errorsForm, setErrorsForm] = useState('')
    const [errorsEmail, setErrorsEmail] = useState('')
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [placeHolderEmail, setPlaceHolderEmail] = useState("email");
    const [placeHolderName, setPlaceHolderName] = useState("name");
    const [placeHolderPhone, setPlaceHolderPhone] = useState("phone");
    const [placeHolderAdress, setPlaceHolderAdress] = useState("adress");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setMessage('')
    };
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
    const isAdmin = false;
    // const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    // const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
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
            if (errorsEmail !== '') {
                valid = false
            }
            else {
                let resSub = await props.subscribe(obj)
                handleShow()
                setShowing(false)
            }


        }
        setPlaceHolderEmail("email");
        setPlaceHolderName("name");
        setPlaceHolderPhone("phone");
        setPlaceHolderAdress("adress");


        console.log(obj)
    }
    function checkEmailValid(e) {
        debugger
        setEmail(e.target.value)
        if (e.keyCode == 13) {
            if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(email)) {
                setErrorsEmail('')
            }
            else {
                setErrorsEmail('email not valid')
            }
        }
    }
    function checkImg() {
        if (headersettings.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
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
    useEffect(() => {
        if (headersettings) {
            setHeightAndWidth()
        }
    }, [headersettings])
    return (
        <>
            <div className="container-fluid userEventsTitle" >

                <div className="row" style={{ height: "75vh" }}>
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
                                         className="video_or_picture" url={headersettings.eventsPageImageOrVideo} controls={true} />
                                }

                            </div></div>
                    </div>
                    {isAdmin == false ?
                        <div className="row">
                            <div className="col-3 subscribeArea">
                                <button type="button" className="subscribe" onClick={() => setShowing(!showing)}>subscribe</button>

                                {showing ?
                                    <div>
                                        <img className="arrow_" src={arrow}></img>
                                        <div className="dropDown">
                                            <form className="formSubscribe">
                                                <br></br>
                                                {subscribesettings.name === true ? <input class="form-control form-control-sm " id="name" type="text" placeholder={placeHolderName} onChange={(e) => setName(e.target.value)} /> : <></>}
                                                {subscribesettings.email === true ? <input class="form-control form-control-sm " id="emailField" type="text" placeholder={placeHolderEmail}onKeyDown={(e) => checkEmailValid(e)} onChange={(e) => checkEmailValid(e)}/> : <></>}
                                                <span style={{ color: "red" }}>{errorsEmail}</span>
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

                        </div> : ''}

                </div>
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



            </div>
            <div className="container-fluid evnetsUnderFilter">
                <div className="row">
                    <AllEvents style={{ zIndex: 1 }} sentBy={"titleEvent"}></AllEvents>
                    {/* <div className="col-3 createEventArea">
                        <CreateEvent></CreateEvent>
                    </div> */}
                </div>
                <FooterEventsGallery />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button >
                        Close
                    </Button> */}
                    <Button variant="secondary" onClick={handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

})
