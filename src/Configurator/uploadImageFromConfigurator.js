import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
import './ConfigComp.css';
import $ from 'jquery'
import ReactPlayer from 'react-player'
import Loader from './Loader'
import upload from '../assets/upload.png';

function UploadImageFromConfigurator(props) {

    const changeImage = (e) => {
     debugger;  
        props.setLoaderUploadShow(true,'image');
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
               
                props.changeImage( data.data.url);

            },
            error: function (err) {
                alert('please try again later');
            },

        });
    }
    function checkImg() {  
        if (props.imgSrc.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
            return true;
        } else {
            return false;
        }
    }
   
    let currentImage =   props.imgSrc.eventsPageImageOrVideo;
   
    return (
        <div className="d-flex justify-content-center align-items-center divOnHover ml-1 mr-1 mb-3  divUploadImage divOnHover" >

            <label htmlFor='file'>

                <input type="file" name="file" accept="image/*"  id="file"
                className="inputfile" onChange={changeImage} />

                {props.loaderupload ? 
                <div style={{ width: '4vw', height: '30%', position: 'relative', bottom: '0vh', left: '0.5vw'}}>
                    <Loader type={'loaderupload'} />
                </div>
                :
                currentImage && checkImg()===true?
                
                <>
                <img className="myImg" src={currentImage} style={{ width: "13vw", height: "16vh" }} ></img>
                <div className="UIiconDiv">
                    <FontAwesomeIcon
                        id='angle-right'
                        className='iconCloudUpload'
                        icon={['fas', 'cloud-upload-alt']}
                    ></FontAwesomeIcon>
                </div> 
                </>
                :
                currentImage?
               <video src={currentImage}></video>
                // <ReactPlayer width="13vw"
                // height="16vh" className="video_or_picture" url={currentImage}  />
                :
                <>
                <img className="UIiconUploadEvent" alt="image" src={upload} />
                <p className="UIp">Upload</p>
                </>}

                 
                </label>
        </div >
    );
}
//


const mapStateToProps = (state, ownProps) => {
    return {
        imgSrc: state.editHeader.header,
        loaderupload: state.editHeader.loaderuploadImage
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {

        setLoaderUploadShow: (bool,imageOrLogo )=> dispatch(actionsStore.setLoaderUploadShow({ bool: bool, imageOrLogo: imageOrLogo })),

        changeImage: ( url) => dispatch(actionsStore.setImage(url))
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageFromConfigurator);

//קומפוננטה שעושה העלאת קובץ דרך הוקנפיגורטור