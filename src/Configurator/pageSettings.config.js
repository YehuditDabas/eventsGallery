

import React from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
import dropper from '../assets/dropper.svg';
import { GithubPicker } from 'react-color';
// import StopIcon from '@material-ui/icons/Stop';

import './ConfigComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function pageSettings(props) {
    let color = ['#CCCCCC', '#44D7B6', '#6DD41F', '#BFD41F', '#F0D923', '#F8B520', '#F88C20', '#40D9ED', '#3598F4', '#8580FD', '#6236FC', '#B620E0', '#F13B7F', '#F84A20']
    return (
        <div >
            <div className="ml-1">
                <b> <Form.Label >Main Color</Form.Label></b>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker colors={color} onChange={(e) => props.changeMainColor(e.hex)} /></div>
            <div className="ml-1">
                <b> <Form.Label >Botton Color</Form.Label></b>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker colors={color} onChange={(e) => props.changeMainColor(e.hex)} /></div>
           
            {/* <br /> */}
           
            <div className="row m-1">
                <Form.Label className="textField">Show In Page</Form.Label>
                <select
                    className="textField SelectChanel"
                    name="showInPage"
                    id="showInPage"
                    style={{ backgroundColor: "#F0F0F0" }}
                    onChange={(e) => props.changeShowInPage(e.target.value)}
                    value={props.showInPage}
                >
                    <option value="3">3</option>
                    <option value="4">4</option>
                    
                </select>
            </div>       
            <div>
                <FormGroup className="d-flex justify-content-between">
                    <FormControlLabel className="d-flex justify-content-between"
                        control={<Switch name="name" />}
                        label="Watch previous events"
                    />

                </FormGroup>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // editGrid: state.channelSettings.editGrid,
        // mainColor: state.configImage.mainColor,
        // showInPage: state.configImage.showInPage,
        // buttonStyle: state.configImage.buttonStyle
    };
};

const mapDispatchToProps = (dispatch) => ({
    // changeEditGrid: (e) => dispatch(actionsStore.setEditGrid(e)),
    changeShowInPage: (e) => dispatch(actionsStore.setShowInPage(e)),
    // changeColumns: (e) => dispatch(actionsStore.setColumns(e)),
    changeMainColor: (e) => dispatch(actionsStore.setMainColor(e)),
    changeButtonStyle: (e) => dispatch(actionsStore.setButtonStyle(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(pageSettings);

// 3 צורות
 {/* <div className="ml-1">
                <b><Form.Label className="textField">Button Style</Form.Label></b>
            </div> */}
            {/* <div className="row ml-1 mb-2">
                <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 ChnnelSettingsColor" >
                    <FontAwesomeIcon
                        id='square'
                        icon={['fas', 'square']}
                        className={ props.buttonStyle === 25 ? 'BoldIconColor textField ChannelColorIcn m-1' : 'textField ChannelColorIcn m-1'}
                        onClick={() => props.changeButtonStyle(25)}
                    ></FontAwesomeIcon>
                </div>
                <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 ChnnelSettingsColor" >
                    <FontAwesomeIcon
                        className={ props.buttonStyle === 0 ? 'BoldIconColor textField ChannelColorIcn m-1' : 'textField ChannelColorIcn m-1'}
                        id='square-full'
                        icon={['fas', 'square-full']}
                        onClick={() => props.changeButtonStyle(0)}
                    ></FontAwesomeIcon>
                </div>
                <div className="d-inline-flex d-flex justify-content-center align-items-center m-1 p-1 ChnnelSettingsColor" >
                    <FontAwesomeIcon
                        className={ props.buttonStyle === 50 ? 'BoldIconColor textField ChannelColorIcn m-1' : 'textField ChannelColorIcn m-1'}
                        id='circle'
                        icon={['fas', 'circle']}
                        onClick={() => props.changeButtonStyle(50)}
                    ></FontAwesomeIcon>
                </div>
            </div> */}

        //     <div className="ml-1">
        //     <b><Form.Label className="textField" >Podcasts View</Form.Label></b>
        // </div>
        // <div className="row m-1" >
        //     <Form.Check inline label="List" type="radio" name="editGrid" value="list" checked={props.editGrid == "list"} onChange={() => props.changeEditGrid("list")} />
        //     <Form.Check inline label="Grid" type="radio" name="editGrid" value="grid" checked={props.editGrid == "grid"} onChange={() => props.changeEditGrid("grid")} />
        //     {/* checked  */}
        // </div>

          {/* {props.editGrid === 'grid' &&
                <div className="row m-1">
                    <Form.Label className="textField">Columns</Form.Label>
                    <select
                        className="textField SelectChanel"
                        name="columns"
                        id="columns"
                        style={{ backgroundColor: "#F0F0F0" }}
                        onChange={(e) => props.changeColumns(e.target.value)}
                    >
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            } */}