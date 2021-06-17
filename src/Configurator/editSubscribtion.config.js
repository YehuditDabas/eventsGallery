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

  const fieldSubscription = useSelector(state => state.editSubscription)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(actionsStore.settingFields({ "filedName": [event.target.name], "value": event.target.checked }));

  };
  

  return (
    <FormControl component="fieldset" className="FormControlW">
      <FormLabel component="legend" style={{color:'white',marginLeft:"1.5vw"}} className="FormControlW">Subscription Fields</FormLabel>
      <div >
        <FormGroup className="d-flex justify-content-between">
          <FormControlLabel className="d-flex justify-content-between  " 
            control={<Switch checked={fieldSubscription.name} onChange={handleChange} name="name" />}
            label="Name"
            style={{marginLeft:"1.5vw"}}
          />
          {/* checked={true} disabled={true} */}
          <FormControlLabel className="d-flex justify-content-between " 
            control={<Switch checked={fieldSubscription.email} onChange={handleChange} name="email" />}
            label="Email"
            style={{marginLeft:"1.5vw"}}
          />
          <FormControlLabel className="switch d-flex justify-content-between "
            control={<Switch checked={fieldSubscription.phone} onChange={handleChange} name="phone" />}
            label="Phone"
            style={{marginLeft:"1.5vw"}}
          />
          <FormControlLabel
            className="switch d-flex justify-content-between "
            control={<Switch checked={fieldSubscription.adress} onChange={handleChange} name="adress" />}
            label="Adress"
            style={{marginLeft:"1.5vw"}}
          />
        </FormGroup>
      </div>
    </FormControl>
  );
}