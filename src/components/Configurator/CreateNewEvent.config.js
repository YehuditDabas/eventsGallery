
import React from 'react'
import './ConfigComp.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';
import { actionsStore } from '../../redux/actions';
import { TextField, createMuiTheme, Hidden } from '@material-ui/core';
import './createEvent.css'

function CreateNewEvent(props) {


    return (

        <div className="container-fluid">

            <FormControl component="fieldset" className="" >
          <div className="row ml-1">
              <div className="col"> 
                    <FormGroup role="form" className="" >
                        <FormLabel className="createNewFormLabel " >
                            Event subject
                         </FormLabel>
                    </FormGroup>
                    </div>
          </div>
     <div className="row ml-1">
         <div className='col-4'>
                <textarea
                    className="inputEvent row"
                    onChange={(e) => props.changeTitleEvent(e.target.value)}
                    onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                    value={props.currentEvent.title ? props.currentEvent.title : ""}
                    rows="1"
                    maxLength="20"
                    placeholder="subject" id="standard-basic" type="text"
                ></textarea>
                </div>
                </div>
            </FormControl>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        currentEvent: state.createEvent

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTitleEvent: (e) => { dispatch(actionsStore.setTitleEvent(e)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewEvent);