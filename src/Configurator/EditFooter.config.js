import React from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
//import logo from './../../../assets/logo.svg';
//import dropper from '../../../assets/dropper.svg';
import UploadImageFromConfigurator from './uploadImageFromConfigurator';
import './ConfigComp.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';

  function EditFooter(props){
return(
    <FormControl component="fieldset" className="FormControlW">
      {/* <FormLabel component="legend">Subscription Fields</FormLabel> */}
      <div >
        <FormGroup className="d-flex justify-content-between">
          <FormControlLabel className="d-flex justify-content-between" 
            // control={<Switch checked={fieldSubscription.name} onChange={handleChange} name="name" />}
            // label="Name"
          />
          {/* checked={true} disabled={true} */}
          <FormControlLabel className="d-flex justify-content-between" 
            // control={<Switch checked={fieldSubscription.email} onChange={handleChange} name="email" />}
            // label="Email"
          />
          <FormControlLabel className="switch d-flex justify-content-between"
            // control={<Switch checked={fieldSubscription.phone} onChange={handleChange} name="phone" />}
            // label="Phone"
          />
          <FormControlLabel
            className="switch d-flex justify-content-between"
            // control={<Switch checked={fieldSubscription.adress} onChange={handleChange} name="adress" />}
            // label="Adress"
          />
        </FormGroup>
      </div>
    </FormControl>
)
}
const mapStateToProps = (state) => {
    return {
        // editHeader: state.editHeader
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // changeAlignment: (e) => dispatch(actionsStore.setAlignment(e)),
        // changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)) },
        // changeTitleColor: (e) => { dispatch(actionsStore.setTitleTextColor(e)) },
        // changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) },
        // changeBodyColor: (e) => { dispatch(actionsStore.setBodyTextColor(e)) },

        // // onChangeLogoHeader: (logo) => dispatch(actionsStore.updateLogo(logo)),

        // onChangeTitle: (title) => dispatch(actionsStore.updateTitle(title)),
        // onChangeEventsGalleryDescription: (description) => dispatch(actionsStore.updateDescription(description))
        // onChangeImageHeader: (image) => dispatch(actionsStore.updateImage(image)),
        // onChangeAmountEventsInRowHeader: (eventsinrow) => dispatch(actionsStore.updateMountInRow(eventsinrow)),
        // OnSubmitupdateOrCreateSettingsHeader: (g) => dispatch(actionsStore.updateOrCreateSettings(g))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);