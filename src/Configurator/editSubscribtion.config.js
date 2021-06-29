import React from 'react';
import { actionsStore } from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './ConfigComp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditSubscribtion(props) {
  debugger
  const fieldSubscription = useSelector(state => state.editSubscription)
  const dispatch = useDispatch()
  const handleChange = (event) => {

    dispatch(actionsStore.settingFields({ "filedName": [event.target.name], "value": event.target.checked }));

  };
  

  return (
    <FormControl component="fieldset" className="FormControlW">
      <FormLabel component="legend"  className="editSubscribtionFileds">Subscription Fields</FormLabel>
      <div >
        <FormGroup className="d-flex justify-content-between">
          <FormControlLabel className="d-flex justify-content-between  editSubscribtionFileds " 
            control={<Switch checked={fieldSubscription.subscribe.name} onChange={handleChange} name="name"  />}
            label="Name"
          />
          {/* checked={true} disabled={true} */}
          <FormControlLabel className="d-flex justify-content-between editSubscribtionFileds" 
            control={<Switch  onChange={handleChange} name="email" checked={true} disabled={true} />}
            label="Email"
          />
          <FormControlLabel className="switch d-flex justify-content-between editSubscribtionFileds"
            control={<Switch checked={fieldSubscription.subscribe.phone} onChange={handleChange} name="phone" />}
            label="Phone"
          />
          <FormControlLabel
            className="switch d-flex justify-content-between editSubscribtionFileds"
            control={<Switch checked={fieldSubscription.subscribe.address} onChange={handleChange} name="address" />}
            label="Address"
          />
        </FormGroup>
      </div>
    </FormControl>
  );
}