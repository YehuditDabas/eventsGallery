import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
import './ConfigComp.css';
import $ from 'jquery'
import ReactPlayer from 'react-player'
import Loader from './Loader'
import upload from '../../assets/upload.png';
import './UploadImg.css'


function UpLoadLogoFormConfigurator(props) {

    const changeLogoImage = (e) => {
        props.setLoaderUploadShow(true,"logo");
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
                     
                props.changeLogo( data.data.url);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }
    function ScrollGeneric (value,color)  {
   
        document.getElementById(value).scrollIntoView({ block: "end", behavior: 'smooth' })
    }
    let currentImage = props.imgSrc.eventsPageLogo;

    return (
        <div className="d-flex justify-content-center align-items-center  ml-1 mr-1 mb-3  divUploadLogo divOnHover" >

            <label htmlFor={`filelogo`}>

                {props.loaderupload ?
                    <div style={{ width: '4vw', height: '30%', position: 'relative', bottom: '0vh', left: '0.5vw' }}>
                        <Loader type={'loaderupload'} />
                    </div>
                    :
                    currentImage ?
                        <img className="myImg" src={currentImage} className="uploadLogoImage"></img>
                        :
                        <>
                            <div className="ULiconDiv">
                                <FontAwesomeIcon
                                    id='angle-right'
                                    className='iconCloudUpload'
                                    icon={['fas', 'cloud-upload-alt']}
                                ></FontAwesomeIcon>
                            </div>
                        </>}

                <div className="ULiconDiv">
                    <FontAwesomeIcon
                        id='angle-right'
                        className='iconCloudUpload'
                        icon={['fas', 'cloud-upload-alt']}
                    ></FontAwesomeIcon>
                </div>

            </label>
            <input type="file" name="file" accept="image/*" id="filelogo"
                className="inputfile" onChange={changeLogoImage} onClick={()=>ScrollGeneric('showHeader')} />

        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        imgSrc: state.editHeader.header,
        loaderupload: state.editHeader.loaderuploadLogo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        setLoaderUploadShow: (bool, imageOrLogo) => dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),
        changeLogo: (url) => dispatch(actionsStore.setLogo(url))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpLoadLogoFormConfigurator);

//קומפוננטה שעושה העלאת קובץ דרך הוקנפיגורטור