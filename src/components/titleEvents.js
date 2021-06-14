import React, { useEffect, useState } from 'react'
import './title.css'
import logo from '../assets/logo.jpg'
import arrow from '../assets/Polygon 24@2x.png'
import ReactPlayer from 'react-player'
import { Modal , Button } from 'react-bootstrap'
import CreateEvent from './createEvent'
import { connect } from 'react-redux'
import red from '../assets/red.png'
import yellow from '../assets/yellow.png'
import pink from '../assets/pink.png'
import black from '../assets/black.png'
import gray from '../assets/gray.png'
import lightBlue from '../assets/lightBlue.png'
import lightBlue2 from '../assets/lightBlue2.png'
import orange from '../assets/orange.png'
import pink2 from '../assets/pink2.png'
import purple1 from '../assets/purple1.png'
import purple2 from '../assets/purple2.png'
import turquoise from '../assets/turquoise.png'
import { subscribe } from '../redux/middlweare/crud'
import AllEvents from './allEvents'

function mapStateToProps(state) {

    // red #86F3FF
    document.documentElement.style.setProperty('--Button-color', state.pageSettings.page.eventsButtonColor);
    // state.settings.settings.eventsButtonColor

    // document.documentElement.style.setProperty('--Page-color',state.settings.eventsPageColor);
    return {
        pagesettings: state.pageSettings.page,
        headersettings: state.editHeader.header,
        subscribesettings: state.editSubscription.subscribe,
        // (לחלק לכמה רדיוסרים)
        // text-align נתונים מהשרת................................
    }

}
const mapDispatchToProps = (dispatch) => ({
    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function TitleEvent(props) {
    const { pagesettings, headersettings, subscribesettings } = props;
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
        '#AD60FF': purple1,
        '#4F40D0': purple2,
        '#FF53F7': pink,
        '#FF62B2': pink2,
        '#FA5252': red,
        '#FF803F': orange,
        '#FAEE3A': yellow,
        '##424149': black,
        '#9F9CB5': gray,
        '#63F597': turquoise,
        '#54B9FF': lightBlue,
        '#51E7FB': lightBlue2
    }



    // const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    // const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
    const [showing, setShowing] = useState(false);
    function beforeSubscribe() {
        debugger
        const obj = {
            objEmail: email,
            objName: name,
            objPhone: phone,
            objAdress: adress
        };
        let valid = true
        // subscribe();
        if (subscribesettings.name && name === '') {
            valid = false;
            // formIsValid = false;
            // setErrorsForm("name","Cannot be empty")
            // setErrorsForm({...errorsForm, name: 'name',error:"Cannot be empty"})
            setErrorsForm(...errorsForm, 'name')

            console.log(errorsForm)
        }
        if (subscribesettings.email && email === '') {
            valid = false;
            // formIsValid = false;
            // setErrorsForm("name","Cannot be empty")
            // setErrorsForm({...errorsForm, name: 'email',error:"Cannot be empty"})
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'email')
        }
        if (subscribesettings.phone && phone === '') {
            valid = false;
            // formIsValid = false;
            // setErrorsForm("name","Cannot be empty")
            // setErrorsForm({...errorsForm, name: 'email',error:"Cannot be empty"})
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'phone')

            // errorsForm["email"] = "email Cannot be empty";
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
            setErrorsForm(...errorsForm, 'Fill in all the details')
        }
        else {
            subscribe(obj)
            setShowing(false)
            handleShow()
        }
        setPlaceHolderEmail("email");
        setPlaceHolderName("name");
        setPlaceHolderPhone("phone");
        setPlaceHolderAdress("adress");


        console.log(obj)
    }

    function checkImg() {
        if (headersettings.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            {headersettings.eventsPageTitle !== "" && headersettings.displayHeader == true ? <div className="container-fluid" >

                <div className="row" >
                    <img className="myImg" src={img[pagesettings.eventsPageColor]}></img>
                    <img className="mylogo" src={headersettings.eventsPageLogo}></img>
                    <div className="col-5 titleAndDescription">
                        <h1 className="titleH1"> {headersettings.eventsPageTitle}</h1>
                        <p className="descriptionP"> {headersettings.eventsPageDescription}</p>

                    </div>
                    <div className="imgOrVieo">
                        {checkImg() === true ?
                            <img className="myImg" src={headersettings.eventsPageImageOrVideo}></img>
                            : <ReactPlayer width='100%'
                                height='100%' className="video_or_picture" url={headersettings.eventsPageImageOrVideo} />
                        }

                    </div>
                    <div className="row">
                        <div className="col-3 subscribeArea">
                            {/* <input type="text" value="subscribe" className="subscribe"></input> */}
                            <button type="button" className="subscribe" onClick={() => setShowing(!showing)}>subscribe</button>

                            {/* <button className="btn btn-primary subscribe" value="subscribe" ></button> */}
                            {showing ?
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

                </div>

            </div> : <div></div>}
            <div className="container-fluid evnetsUnderFilter">
                <div className="row">
                    <AllEvents style={{ zIndex: 1 }}></AllEvents>
                    {/* <div className="col-3 createEventArea">
                        <CreateEvent></CreateEvent>
                    </div> */}
                </div>
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
                    your deatails send success
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
