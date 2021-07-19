import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
//import logo from './../../../assets/logo.svg';
//import dropper from '../../../assets/dropper.svg';
import logowhite from './../../assets/logowhite.png'
import UploadImageFromConfigurator from './uploadImageFromConfigurator';
import UploadLogoFromConfigurator from './upLoadLogoFormConfigurator'
import './ConfigComp.css';
import './EditHeader.css'

function EditHeader(props) {
    const {headersettings}= props;
    const [alignment, setAlignment] = useState('left');

    
    function ScrollGeneric (value)  {
   debugger
        document.getElementById(value).scrollIntoView({ block: "end", behavior: 'smooth' })
    }
    function changeAlignment(align) {
        props.changeAlignment(align)
        ScrollGeneric('showHeader');
        setAlignment(align)
    }

    return (
        <div >
            <div>
                
                <div className="mt-2 container-fluid ">
                    <div className="row  mt-4 mb-4 mt-2">
                        {/* titlesettings */}
                        <div className="col-5 one ">
                            {/* <Form.Label className="textField"><b>Alignment</b></Form.Label> */}
                            <span className="AlignmentSpan">Alignment</span>
                        </div>

                      <div className=" col-7 warpDivalignment  ">

                            <div className=" d-flex justify-content-start align-items-center  p-1  EditHeaderAlingment">
                                <FontAwesomeIcon
                                    className={"textField ChannelColorIcn m-1", alignment === 'left' ? ' BoldIconColor' : 'IconColor'}
                                    id='align-left-solid'
                                    icon={['fas', 'align-left']}
                                    onClick={() => changeAlignment('left')}
                                ></FontAwesomeIcon>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center  p-1  EditHeaderAlingment" >
                                <FontAwesomeIcon
                                    className={" textField m-1 ChannelColorIcn ", alignment === 'center' ? ' BoldIconColor' : 'IconColor'}
                                    id='align-center'
                                    icon={['fas', 'align-center']}
                                    onClick={() => changeAlignment('center')}
                                ></FontAwesomeIcon>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center  p-1  EditHeaderAlingment" >
                                <FontAwesomeIcon
                                    className={"textField m-1 ChannelColorIcn ", alignment === 'right' ? ' BoldIconColor' : 'IconColor'}
                                    id='align-right'
                                    icon={['fas', 'align-right']}
                                    onClick={() => changeAlignment('right')}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
              
 <div >
                    <div className="row ml-1 ">
                        <span className="SpanSettings mb-1">Upload Video/Image </span>
                    </div>             
                    <UploadImageFromConfigurator  />
                </div>

                <div>
                    <div className="row ml-1">
                        <span className="SpanSettings  mb-1">Logo </span>
                        
                    </div>
                     <UploadLogoFromConfigurator />      
                </div>
  
               

                <div className="row ml-1">
                    <span className="SpanSettings">Title Text </span>
                </div>
                <div className="row ml-1 mb-3 mr-1">
                    <div className="col">
                        <textarea
                            className="divWidth configuratorTextarea"
                            onClick={()=>ScrollGeneric('showHeader')}
                            onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                            onChange={(e) => props.changeTitleText(e.target.value)}
                            value={props.editHeader.eventsPageTitle}
                            rows="1"
                            maxLength="50"
                            style={{ textAlign: alignment }}
                            placeholder={props.editHeader.eventsPageTitle}
                            id='idTitleText'
                        />
                    </div>
                    </div>
            </div>

            <div >
                <div>
                    <div className="row ml-1">
                        <span className="SpanSettings">Body Text </span>
                    </div>
                    <div className="row ml-1 mb-3 mr-1">
                    <div className="col">
                        <textarea
                            className="divWidth configuratorTextarea"
                            onKeyPress={(e) => { e.key == 'Enter' && (e.target.value.match(/\n/g) || []).length == 2 && e.preventDefault() }}
                            onClick={()=>ScrollGeneric('showHeader')}
                            onChange={(e) => props.changeBodyText(e.target.value)}
                            // onChange={(e) => props.onChangeEventsGalleryDescription(e.target.value)}
                            value={props.editHeader.eventsPageDescription}
                            rows="1"
                            maxLength="250"
                            style={{ textAlign: alignment }}
                            placeholder={props.editHeader.eventsPageDescription}

                        />
                    </div>
                  </div>
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        editHeader: state.editHeader.header,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeAlignment: (e) => dispatch(actionsStore.setAlignment(e)),
        changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)) },
        changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) },
        // onChangeLogoHeader: (logo) => dispatch(actionsStore.updateLogo(logo)),
        // onChangeImageHeader: (image) => dispatch(actionsStore.updateImage(image)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditHeader);
