

import React from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
import dropper from '../../assets/dropper.svg';
import { GithubPicker, CirclePicker } from 'react-color';
// import StopIcon from '@material-ui/icons/Stop';

import './ConfigComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function pageSettings(props) {

    //let color = ['#CCCCCC', '#44D7B6', '#6DD41F', '#BFD41F', '#F0D923', '#F8B520', '#F88C20', '#40D9ED', '#3598F4', '#8580FD', '#6236FC', '#B620E0', '#F13B7F', '#F84A20']
    let color = ['#AD60FF', '#FF53F7', '#FF62B2', '#FA5252', '#FF803F', '#FAEE3A',
        '#424149', '#9F9CB5', '#4F40D0', '#54B9FF', '#51E7FB', '#63F597']
    return (
        <div >
            <div className="ml-1">
                <span className="titleSettings"> Main Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker colors={color} onChange={(e) => props.changeMainColor(e.hex)} className="colorSelected" /></div>
            <div className="ml-1">
                <span className="titleSettings"> Button Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker icker colors={color} onChange={(e) => props.changeButtonStyle(e.hex)} /></div>

            {/* <br /> */}

            <div className="row m-2">
                <div className="col-7 showinpageRow">Show In Row</div>
                <div className="col-5 " ><select
                    className="textField SelectChanel"
                    name="showInPage"
                    id="showInPage"
                    style={{
                        background: "#505066 0% 0% no-repeat padding-box",
                        color: "white"
                    }}
                    onChange={(e) => props.changeShowInPage(e.target.value)}
                    value={props.showInPage}
                >
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select></div>
            </div>
            <div>
                <FormGroup className="d-flex justify-content-between">
                    <FormControlLabel className="d-flex justify-content-between "
                        control={<Switch onChange={(e) => { props.changeShowHistoricalEvents(e.target.checked) }} name="name" />}
                        label="Watch previous events"
                        style={{ marginLeft: "1.5vw" }}
                    />
                </FormGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // mainColor: state.configImage.mainColor,
        showInPage: state.pageSettings.amountEventsInRow,
        // buttonStyle: state.configImage.buttonStyle
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeShowHistoricalEvents: (e) => dispatch(actionsStore.setShowHistoricalEvents(e)),
    changeShowInPage: (e) => dispatch(actionsStore.setShowInPage(e)),
    changeMainColor: (e) => dispatch(actionsStore.setMainColor(e)),
    changeButtonStyle: (e) => dispatch(actionsStore.setButtonStyle(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(pageSettings);
