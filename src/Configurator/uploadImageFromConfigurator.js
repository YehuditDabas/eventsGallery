import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
import './ConfigComp.css';
import $ from 'jquery'
import ReactPlayer from 'react-player'

function UploadImageFromConfigurator(props) {

    const changeImage = (e) => {
        const TokenToString = document.cookie && document.cookie.includes('devJwt')
            ? document.cookie
                .split(';')
                .filter(s => s.includes('devJwt'))[0]
                .split('=')
                .pop()
            : null
        const userName = window.location.pathname.split('/')[1]
        debugger;
        const file = e.target.files[0];
        // var url = URL.createObjectURL(file);
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
                alert("upload success");
                console.log(data)
                props.changeImage(props.kind, data.data.url);
            },
            error: function (err) {
                alert('please try again later');

            },

        });
    }
    let currentImage = (props.kind === "Logo") ? props.imgSrc.eventsPageLogo : props.imgSrc.eventsPageImageOrVideo;
    function checkImg() {
      
       if(props.kind==="Logo") {
           return true;
       }
       else if (props.imgSrc.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center divOnHover ml-1 mr-1 mb-3  divUploadImage divOnHover" >
            <input type="file" name="file" accept="image/*" id={`${props.kind}file`} className="inputfile"  onChange={changeImage} />
            <label htmlFor={`${props.kind}file`}>
                {checkImg() === true ?
                    <img className="myImg" src={currentImage} style={{ width: "13vw", height: "16vh" }} ></img>
                    : <ReactPlayer style={{ width: "13vw", height: "16vh" }}
                         className="video_or_picture" url={currentImage} controls={true} />
                }

                <div className="iconDiv">
                    <FontAwesomeIcon
                        id='angle-right'
                        className='iconCloudUpload'
                        icon={['fas', 'cloud-upload-alt']}
                    ></FontAwesomeIcon>
                </div>
            </label>
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        imgSrc: state.editHeader.header
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;

    return {

        changeImage: (key, url) => {
            debugger;
            if (key === "Image")
                dispatch(actionsStore.setImage({ key: key, url: url }))
            else dispatch(actionsStore.setLogo({ key: key, url: url }))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageFromConfigurator);
//קומפוננטה שעושה העלאת קובץ דרך הוקנפיגורטור