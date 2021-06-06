

import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
//import logo from './../../../assets/logo.svg';
//import dropper from '../../../assets/dropper.svg';
import UploadImageFromConfigurator from './uploadImageFromConfigurator';
import './ConfigComp.css';

function EditHeader(props) {
    const [alignment, setAlignment] = useState('left');

    function changeAlignment(align) {
        props.changeAlignment(align)
        setAlignment(align)
    }

    return (
        <div >

            <div>
                <div className="row ml-1">
                    <Form.Label className="textField"><b>Title Text</b></Form.Label>
                </div>
                <div className="row ml-1 mb-3 mr-1">
                    <textarea
                        className="divWidth configuratorTextarea"
                        onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTitleText(e.target.value)}
                        value={props.editHeader.text.title}
                        rows="1"
                        maxLength="50"
                        style={{ height: '45px', textAlign: alignment }}
                        placeholder="Welcome to&#13;&#10;your channel"
                    />
                </div>
            </div>
            <div className="marginTop">
                <div className="row ml-1  mr-1 mt-1 d-flex justify-content-between">
                    <div>  <Form.Label ><b>Title Color</b></Form.Label></div>
                    {/* className="textField" */}
                    <div className="d-flex align-items-center">
                        {/* <img src={dropper} id="img_dropper" alt="dropper"></img> */}
                        <input
                            type="color"
                            className="ImgEditHeaderStyle"
                            onChange={(e) => props.changeTitleColor(e.target.value)}
                            value={props.editHeader.textColor.title}
                        />
                    </div>
                </div>
            </div>
            <div >

                <div>
                    <div className="row ml-1">
                        <Form.Label className="textField"><b>Body Text</b></Form.Label>
                    </div>
                    <div className="row ml-1 mb-3 mr-1">
                        <textarea
                            className="divWidth configuratorTextarea"
                            onKeyPress={(e) => { e.key == 'Enter' && (e.target.value.match(/\n/g) || []).length == 2 && e.preventDefault() }}
                            onChange={(e) => props.changeBodyText(e.target.value)}
                            value={props.editHeader.text.body}
                            rows="1"
                            maxLength="250"
                            style={{ height: '60px', textAlign: alignment }}
                            placeholder="don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy&#13;&#10;Mission This Time. Seve…"

                        />
                    </div>
                </div>
                <div className="marginTop">
                    <div className="row ml-1 mr-1 d-flex justify-content-between">
                        <div>  <Form.Label ><b>Body Color</b></Form.Label></div>
                        {/* className="textField" */}
                        <div className="d-flex align-items-center">
                            {/* <img src={dropper} id="img_dropper" alt="dropper"></img> */}
                            <input
                                type="color"
                                className="ImgEditHeaderStyle"
                                onChange={(e) => props.changeBodyColor(e.target.value)}
                                value={props.editHeader.textColor.body}
                            />
                        </div>


                    </div></div>
                <div>
                    <div className="row ml-1">
                        <Form.Label className="textField"><b>Channel Logo</b></Form.Label>
                    </div>
                    <div className="row ml-1 mr-1">
                        <UploadImageFromConfigurator kind={'channelLogo'} />
                    </div>
                </div>
                <div>
                    <div className="row ml-1">
                        <Form.Label className="textField"><b>Channel Image</b></Form.Label>
                    </div>
                    <div className="row ml-1 mr-1">
                        <UploadImageFromConfigurator kind={'channelImage'} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row ml-1">
                        <Form.Label className="textField"><b>Alignment</b></Form.Label>
                    </div>
                    <div className="row ml-1 mb-2">
                        <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 DivEditHeader">
                            <FontAwesomeIcon
                                className={"textField ChannelColorIcn m-1", alignment === 'left' ? ' BoldIconColor' : 'IconColor'}
                                id='align-left-solid'
                                icon={['fas', 'align-left']}
                                onClick={() => changeAlignment('left')}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 DivEditHeader" >
                            <FontAwesomeIcon
                                className={"textField m-1 ChannelColorIcn", alignment === 'center' ? ' BoldIconColor' : 'IconColor'}
                                id='align-center'
                                icon={['fas', 'align-center']}
                                onClick={() => changeAlignment('center')}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 DivEditHeader" >
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
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        editHeader: state.editHeader
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeAlignment: (e) => dispatch(actionsStore.setAlignment(e)),
    changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)) },
    changeTitleColor: (e) => { dispatch(actionsStore.setTitleTextColor(e)) },
    changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) },
    changeBodyColor: (e) => { dispatch(actionsStore.setBodyTextColor(e)) }

})
export default connect(mapStateToProps, mapDispatchToProps)(EditHeader);




