import React from 'react';
import { actionsStore } from '../../redux/actions';
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
  function ScrollGeneric (value,color)  {
   
    document.getElementById(value).scrollIntoView({ block: "end", behavior: 'smooth' })
}
  function changeComponent(){
    // changeCurrentComponent('Edit Subscription')
    dispatch(actionsStore.changeCurrentComponent('Edit Subscription'))
}

  return (
    <div className="container-fluid">
      
    <FormControl component="fieldset" className="FormControlW" >
      <div className='row'>
      <FormLabel component="legend"  className="editSubscribtionFileds">Subscription Fields</FormLabel>
      </div>
      <div onClick={changeComponent}>
        
        <FormGroup className="d-flex justify-content-between">
          <div className='row'>
          <FormControlLabel className="d-flex justify-content-between  editSubscribtionFileds " 
            onClick={()=>ScrollGeneric('showHeader')}
            control= {<Switch checked={fieldSubscription.subscribe.name} onChange={handleChange} name="name"  />}
            label="Name"

          /></div>
         <div className='row'>
          <FormControlLabel className="d-flex justify-content-between editSubscribtionFileds" 
          onClick={()=>ScrollGeneric('showHeader')}
            control={<Switch  onChange={handleChange} name="email" checked={true} disabled={true} />}
            label="Email" 
          /></div>
            <div className='row'>
          <FormControlLabel className="switch d-flex justify-content-between editSubscribtionFileds"
          onClick={()=>ScrollGeneric('showHeader')}
            control={<Switch checked={fieldSubscription.subscribe.phone} onChange={handleChange} name="phone" />}
            label="Phone"
          /></div>
            <div className='row'>
          <FormControlLabel
            className="switch d-flex justify-content-between editSubscribtionFileds"
            onClick={()=>ScrollGeneric('showHeader')}
            control={<Switch checked={fieldSubscription.subscribe.address} onChange={handleChange} name="address" />}
            label="Address"
          /></div>
        </FormGroup>
      </div>
    </FormControl>
    </div>
  );
}