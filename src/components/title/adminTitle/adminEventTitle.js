import React, { useEffect, useState } from 'react'
import { actionsStore } from '../../../redux/actions'
import '../title/title.css'
import './adminEventTitle.css'
import $ from 'jquery'
import keys from '../../../config/env/keys'
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
import Subscribe from '../../subscribe/subscribe'



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
    changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)); },
    changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) },
    changeCurrentComponent: (e) => { dispatch(actionsStore.setCurrentComponent(e)) },
    setLoaderUploadShow: (bool, imageOrLogo) => dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),

    changeImage: (url) => { dispatch(actionsStore.setImage(url)) },
    setLoaderUploadShow: (bool, imageOrLogo) => dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),
    changeLogo: (url) => dispatch(actionsStore.setLogo(url))

    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function AdminEventTitle(props) {
    const { pagesettings, headersettings, subscribesettings, changeTitleText, changeBodyText, changeCurrentComponent } = props;
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
    var myImg = new Image();
    function setHeightAndWidth() {

        var size;
        myImg.src = headersettings.eventsPageImageOrVideo;

        console.log("@@" + myImg.width / myImg.height + "@@")
        size = myImg.width / myImg.height < 1.5 ? myImg.width / myImg.height * 21 : myImg.width / myImg.height < 2 ? myImg.width / myImg.height * 17 : myImg.width / myImg.height * 12;
        size += "vw";
        var inputHeight = myImg.width / myImg.height < 1.5 ? 24 : myImg.width / myImg.height < 2 ? 20 : 16;
        inputHeight += "vh";
        console.log("myImg.width  ", myImg.width, "  myImg.height  ", myImg.height)
        console.log("@@" + size + "@@")
        if (size == "NaNvw") { size = "30vw" }

        document.documentElement.style.setProperty('--image-width', size);
        document.documentElement.style.setProperty('--input-height', inputHeight);



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
            url: `${keys.API_FILE}/${userName}/upload`,
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
            url: `${keys.API_FILE}/${userName}/upload`,
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
            setFontsize()
        }
    }, [headersettings])

    function checkImg() {
        let x = headersettings.eventsPageImageOrVideo.replace(/[{()}]/g, '');
        if (x.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/)) {
            return true;
        } else {
            return false;
        }
    }

    function ScrollGeneric(value) {
        debugger
        document.getElementById(value).scrollIntoView({ block: "end", behavior: 'smooth' })
        let element = document.getElementById(value);
        element.classList.add("addBorder");

    }

    function changeToHeaderComponent() {

        changeCurrentComponent('Edit Header')
        // if (value.currentTarget.className === 'adminTitleAndDescription')
        //     ScrollGeneric('idTitleText')
    }

    function changeToHeader(value) {
        debugger
        changeCurrentComponent('Edit Header')
        if (value === 'adminEventTitletitleH1')
            ScrollGeneric('idTitleText')
    }
    function changeToPageSettingsComponent() {

        changeCurrentComponent('Page Settings')
    }

    function setUpload() {
        setUploadImg(!uploadImg)
    }
    function setFontsize() {
        debugger
        var height, len = headersettings.eventsPageTitle.length;
        height = Math.ceil(len / 15) * 7;
        if (height < 25) {
            height += "vh";
            console.log("-- ", height, " --");
            document.documentElement.style.setProperty('--title-height', height);
        }
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
        document.documentElement.style.setProperty('--font-size-title-admin', `${textSize}vw`);

    }
    return (
        <>
            <div className="container-fluid adminEventTitle" >

                {/* <div className="row adminTitleDiv" id='showHeader'> */}
                <div className="row" style={{ height: "58vh" }} id="showHeader">
                    <img className="myImg titleImgColor" src={img[pagesettings.eventsPageColor]} onClick={changeToPageSettingsComponent}></img>
                    <label htmlFor='filelogo' className="adminLogoLabel">
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
                            onClick={() => changeToHeader('adminEventTitletitleH1')}
                            value={headersettings.eventsPageTitle}
                            // rows="2"
                            // size="14"

                            maxLength="90"
                            // style={{ textAlign: 'left' }}
                            placeholder={headersettings.eventsPageTitle}
                            onFocus={(e) => e.target.select()}
                        >{headersettings.eventsPageTitle}
                        </textarea>
                        <textarea
                            className="adminEventDescription"
                            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                            onChange={(e) => changeBodyText(e.target.value)}
                            onClick={changeToHeaderComponent}
                            value={headersettings.eventsPageDescription}
                            rows="5"
                            cols="35"
                            maxLength="140"
                            // style={{ textAlign: 'left' }}
                            placeholder={headersettings.eventsPageDescription}
                            onFocus={(e) => e.target.select()}
                        >{headersettings.eventsPageTitle}
                        </textarea>
                        <div className="subscribeDivfromAdminTitle">
                            <Subscribe />
                        </div>
                    </div>
                    <div className="wrapAdminImgOrVieo col-5 d-flex justify-content-center">
                        <label htmlFor='file' className="adminImgLabel">
                            <div className="adminImgOrVieo d-flex justify-content-center" align="center" onClick={changeToHeaderComponent}>
                                {/* <img src={uploadIcon} height="100%" width="100%" class="adminUpload"></img>    */}

                                {checkImg() === true ?
                                    <img className="myImg" id="imageInTitle" src={headersettings.eventsPageImageOrVideo} heigt="100%" width="100%" ></img>
                                    : <ReactPlayer width='100%'
                                        height='45vh' className="video_or_picture" url={headersettings.eventsPageImageOrVideo} controls={true} />
                                }

                                <div className="UIiconDivAdmin d-flex justify-content-center">
                                    <FontAwesomeIcon
                                        id='angle-right'
                                        className='iconCloudUpload uploadImgAdmin'
                                        icon={['fas', 'cloud-upload-alt']}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                        </label>
                        <input type="file" name="file" accept="image/*" id="file"
                            className="adminInputfile" onChange={changeImage}
                            onClick={changeToHeaderComponent}
                        />
                    </div>


                </div>
            </div>
            <div className="container-fluid adminEvnetsUnderFilter">
                {/* <div className="row" >
                    <AllEvents style={{ zIndex: 1 }} sentBy={"admin"}></AllEvents>
                </div> */}

                <div className="row" style={{ width: "75vw", marginLeft: "4vw", marginRight: "4vw" ,marginTop:"8vh"}}>
                    <AllEvents style={{ zIndex: 1 }} sentBy={"admin"}></AllEvents>
                </div>
                <div >
                    <FooterEventsGallery /></div>
            </div>
        </>


    )

})
