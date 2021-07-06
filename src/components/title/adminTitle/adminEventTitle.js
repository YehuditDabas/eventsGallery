import React, { useEffect, useState } from 'react'
import { actionsStore } from '../../../redux/actions'
import '../title/title.css'
import './adminEventTitle.css'
import $ from 'jquery'
// import logo from '../assets/logo.jpg'
import arrow from '../../../assets/Polygon 24@2x.png'
import ReactPlayer from 'react-player'
import { Modal, Button } from 'react-bootstrap'
import CreateEvent from '../../events/createEvent/createEvent'
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
import { subscribe } from '../../../redux/middlweare/crud'
import AllEvents from '../../events/allEvents/allEvents'
import FooterEventsGallery from '../../footer/footerEventsGallery';
import UploadImageFromConfigurator from '../../Configurator/uploadImageFromConfigurator';
import uploadIcon from '../../../assets/upload.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function mapStateToProps(state) {

    // red #86F3FF
    document.documentElement.style.setProperty('--Button-color', state.pageSettings.page.eventsButtonColor);
    document.documentElement.style.setProperty('--align-text', state.editHeader.header.eventsPageAlignment);

    // state.settings.settings.eventsButtonColor
    // document.documentElement.style.setProperty('--Page-color',state.settings.eventsPageColor);
    return {
        site: state.site,
        pagesettings: state.pageSettings.page,
        headersettings: state.editHeader.header,
        subscribesettings: state.editSubscription.subscribe,
        // (לחלק לכמה רדיוסרים)
        // text-align נתונים מהשרת................................
    }

}
const mapDispatchToProps = (dispatch) => ({
    changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)); var height, len = e.length; height = Math.ceil(len / 15) * 11; height += "vh"; console.log("-- ", height, " --"); document.documentElement.style.setProperty('--title-height', height); },
    changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) },
    changeCurrentComponent: (e) => { dispatch(actionsStore.setCurrentComponent(e)) },
    setLoaderUploadShow: (bool, imageOrLogo) => dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),

    changeImage: (url) => dispatch(actionsStore.setImage(url)),
    setLoaderUploadShow: (bool, imageOrLogo) => dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),
    changeLogo: (url) => dispatch(actionsStore.setLogo(url))

    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function AdminEventTitle(props) {
    const { pagesettings, headersettings, subscribesettings, changeTitleText, changeBodyText, changeCurrentComponent } = props;
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
    const [hoverImg, setHoverImg] = useState(false);

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


    // const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    // const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
    const [showing, setShowing] = useState(false);
    const [uploadImg, setUploadImg] = useState(false);
    function beforeSubscribe() {
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
    function setHeightAndWidth() {
        var myImg = new Image();
        var size;
        myImg.src = headersettings.eventsPageImageOrVideo;
        myImg.onload = function () {
            console.log("@@" + myImg.width / myImg.height + "@@")
            size = myImg.width / myImg.height < 2 ? myImg.width / myImg.height * 21 : myImg.width / myImg.height * 12;
            size += "vw";
            console.log("myImg.width  ", myImg.width, "  myImg.height  ", myImg.height)
            console.log("@@" + size + "@@")
            document.documentElement.style.setProperty('--image-width', size);

        }
    }
    const changeImage = (e) => {
        props.setLoaderUploadShow(true, 'image');
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

        $.ajax({

            type: "POST",
            url: "https://files.codes/api/" + userName + "/upload",
            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: (data) => {
                // alert("upload success");

                props.changeImage(data.data.url);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }
    const changeLogoImage = (e) => {
        props.setLoaderUploadShow(true, "logo");
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

        $.ajax({

            type: "POST",
            url: "https://files.codes/api/" + userName + "/upload",
            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: (data) => {
                // alert("upload success");
                
                props.changeLogo(data.data.url);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }
    useEffect(() => {
        if (headersettings) {
            setHeightAndWidth()
        }
    }, [headersettings])
    function checkImg() {
        if (headersettings.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
            return true;
        } else {
            return false;
        }
    }
    function changeToHeaderComponent() {
        changeCurrentComponent('Edit Header')
    }
    function changeToPageSettingsComponent() {
        changeCurrentComponent('Page Settings')
    }

    function setUpload() {
        setUploadImg(!uploadImg)
    }
    return (
        <>
            <div className="container-fluid adminEventTitle" >

                <div className="row" style={{ height: "75vh" }}>
                    <img className="myImg titleImgColor" src={img[pagesettings.eventsPageColor]} onClick={changeToPageSettingsComponent}></img>
                    <label htmlFor='file' className="adminLogoLabel">
                        <img className="adminMylogo" src={headersettings.eventsPageLogo} onClick={changeToHeaderComponent}></img>
                        <div className="adminLogoIconDiv" onClick={changeToHeaderComponent}>
                                <FontAwesomeIcon
                                    id='angle-right'
                                    className='iconCloudUpload uploadLogo'
                                    icon={['fas', 'cloud-upload-alt']}
                                ></FontAwesomeIcon>
                            </div>
                    </label>
                    <input type="file" name="file" accept="image/*" id="filelogo"
                        className="adminInputfileLogo" onChange={changeLogoImage} />
                    <div className="col-3 adminTitleAndDescription">
                        <textarea
                            className="adminEventTitletitleH1"
                            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                            onChange={(e) => changeTitleText(e.target.value)}
                            value={headersettings.eventsPageTitle}
                            // rows="2"
                            cols="14"
                            maxLength="40"
                            // style={{ textAlign: 'left' }}
                            placeholder={headersettings.eventsPageTitle}
                            onFocus={(e)=>e.target.select()}
                        >{headersettings.eventsPageTitle}
                        </textarea>
                        <textarea
                            className="adminEventDescription"
                            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                            onChange={(e) => changeBodyText(e.target.value)}
                            value={headersettings.eventsPageDescription}
                            rows="5"
                            cols="35"
                            maxLength="140"
                            // style={{ textAlign: 'left' }}
                            placeholder={headersettings.eventsPageTitle}
                            onFocus={(e) => e.target.select()}
                        >{headersettings.eventsPageTitle}
                        </textarea>
                    </div>
                    <div className="wrapAdminImgOrVieo col-5 d-flex justify-content-center">
                        <label htmlFor='file' width="41.6666666667%" className="adminImgLabel">
                            <div className="adminImgOrVieo d-flex justify-content-center" align="center" onClick={changeToHeaderComponent} >
                                {/* <img src={uploadIcon} height="100%" width="100%" class="adminUpload"></img>    */}

                                {checkImg() === true ?
                                    <img className="myImg" id="imageInTitle" src={headersettings.eventsPageImageOrVideo} heigt="100%" width="100%"></img>
                                    : <ReactPlayer width='100%'
                                        height='100%' className="video_or_picture" url={headersettings.eventsPageImageOrVideo} controls={true} />
                                }
                            </div>

                            <div className="UIiconDiv">
                                <FontAwesomeIcon
                                    id='angle-right'
                                    className='iconCloudUpload uploadImg'
                                    icon={['fas', 'cloud-upload-alt']}
                                ></FontAwesomeIcon>
                            </div></label>
                        <input type="file" name="file" accept="image/*" id="file"
                            className="adminInputfile" onChange={changeImage} />
                    </div>
                    <div className="row">
                        <div className="col-3 subscribeArea">

                            {/* <input type="text" value="subscribe" className="subscribe"></input> */}
                            <button type="button" className="adminSubscribe subscribe" onClick={() => { debugger; setShowing(!showing) }}>subscribe</button>

                            {/* <button className="btn btn-primary subscribe" value="subscribe" ></button> */}
                            {showing && (subscribesettings.name === true || subscribesettings.email === true || subscribesettings.phone === true || subscribesettings.address === true) ?
                                <div>
                                    <img className="arrow_" src={arrow}></img>
                                    <div className="dropDown">
                                        <form className="formSubscribe">
                                            <br></br>
                                            {/* const[placeHolderAdress,setPlaceHolderAdress]=useState("adress");  */}
                                            {subscribesettings.name === true ? <input class="form-control form-control-sm " id="name" type="text" placeholder={placeHolderName} onChange={(e) => setName(e.target.value)} /> : <></>}
                                            {subscribesettings.email === true ? <input class="form-control form-control-sm " id="emailField" type="text" placeholder={placeHolderEmail} onChange={(e) => setEmail(e.target.value)} /> : <></>}
                                            {subscribesettings.phone === true ? <input class="form-control form-control-sm " id="PhoneField!" type="text" placeholder={placeHolderPhone} onChange={(e) => setPhone(e.target.value)} /> : <></>}
                                            {subscribesettings.address === true ? <input class="form-control form-control-sm " id="emailField!" type="text" placeholder={placeHolderAdress} onChange={(e) => setAdress(e.target.value)} /> : <></>}
                                            <span style={{ color: "red" }}>{errorsForm}</span>
                                            <br></br><br></br>
                                            <input type="button" class="form-control" id="subscribeInside" value="subscribe" ></input>


                                        </form>

                                    </div></div> :
                                <div></div>
                            }



                        </div>

                    </div>

                </div>
            </div>
            <div className="container-fluid adminEvnetsUnderFilter">
                <div className="row">
                    <AllEvents style={{ zIndex: 1 }} sentBy={"admin"}></AllEvents>
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
