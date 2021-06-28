import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
import './ConfigComp.css';
import $ from 'jquery'
import ReactPlayer from 'react-player'
import Loader from './Loader'
import upload from '../assets/upload.png';

function UpLoadLogoFormConfigurator(props) {

    const changeLogoImage = (e) => {
        debugger
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
                debugger     
                props.changeLogo( data.data.url);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }
   
    let currentImage =   props.imgSrc.eventsPageLogo;
   
    return (
        <div className="d-flex justify-content-center align-items-center divOnHover ml-1 mr-1 mb-3  divUploadImage divOnHover" >

            <label htmlFor={`filelogo`}>
             
                {props.loaderupload ? 
                <div style={{ width: '4vw', height: '30%', position: 'relative', bottom: '0vh', left: '0.5vw'}}>
                    <Loader type={'loaderupload'} />
                </div>
                :
                currentImage?
                <img className="myImg" src={currentImage} style={{ width: "13vw", height: "16vh" }} ></img>
                :
                <>
                <img className="iconUploadEvent" alt="image" src={upload} />
                <p>Upload</p>
                </>}
                        
                </label>
                <input type="file" name="file" accept="image/*"  id="filelogo"
                className="inputfile" onChange={changeLogoImage} />
            
        </div >
    );
}

// id={`${props.kind}file`}


const mapStateToProps = (state, ownProps) => {
    return {
        imgSrc: state.editHeader.header,
        loaderupload: state.editHeader.loaderuploadLogo
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {

        setLoaderUploadShow: (bool,imageOrLogo )=> dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),
        changeLogo: ( url) => dispatch(actionsStore.setLogo(url))
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpLoadLogoFormConfigurator);

//קומפוננטה שעושה העלאת קובץ דרך הוקנפיגורטור