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
import { useDispatch, useSelector } from "react-redux";


function EditFooter(props) {

  const filedFooter = useSelector(state => state.editFooter)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(actionsStore.footerFields({ "filedName": [event.target.name], "value": event.target.checked }));

  };

  return (
    <FormControl component="fieldset" className="FormControlW">
      {/* <FormLabel component="legend">Subscription Fields</FormLabel> */}
      <div >
        <FormGroup className="d-flex justify-content-between">
          <div className="iconFooter">
            <FormControlLabel className="d-flex justify-content-between"
              control={<Switch checked={filedFooter.facebook} onChange={handleChange} name="facebook" />}
              label=" facebook" />
            <span className="icon"><FontAwesomeIcon icon={['fab', 'facebook-square']}  ></FontAwesomeIcon></span>
          </div>
          {/* <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" /> */}
       
          <div className="row ml-1 mb-1 mr-1">
                    <textarea
                        className="inputLinkIcon"
                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTitleText(e.target.value)}
                        value={props.editFooter.facebookLink}
                        rows="1"
                        maxLength="50"
                        style={{ height: '45px'}}
                        placeholder="Attach Link"
                    />
                </div>

                {/* facebook: false,
        facebookLink: "",
        twitter: false,
        twitterLink: "",
        instagram: false,
        instagramLink: "",
        youtube: false,
        youtubeLink: "", */}



          <div className="iconFooter">

            <FormControlLabel className="d-flex justify-content-between"
              control={<Switch checked={filedFooter.twitter} onChange={handleChange} name="twitter" />}
              label="twitter" />
            <span className="icon"><FontAwesomeIcon icon={['fab', 'twitter']}  ></FontAwesomeIcon></span>
          </div>
          <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" 
          onChange={(e) => props.changeTwitterLink(e.target.value)}/>

          <div className="iconFooter">
            <FormControlLabel className="switch d-flex justify-content-between"
              control={<Switch checked={filedFooter.instagram} onChange={handleChange} name="instagram" />}
              label="instagram"
            />
            <span className="icon"><FontAwesomeIcon icon={['fab', 'instagram']}  ></FontAwesomeIcon></span>
          </div>
          <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" />

          <div className="iconFooter">
            <FormControlLabel
              className="switch d-flex justify-content-between"
              control={<Switch checked={filedFooter.youtube} onChange={handleChange} name="youtube" />}
              label="youtube" />
            <span className="icon"><FontAwesomeIcon icon={['fab', 'youtube']}  ></FontAwesomeIcon></span>
          </div>
          <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" />
        
        </FormGroup>
      </div>
    </FormControl>
  )
}
const mapStateToProps = (state) => {
  return {
    editFooter: state.editFooter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTwitterLink: (e) => dispatch(actionsStore.setTwitterLink(e)),
    changeFacebookLink: (e) => { dispatch(actionsStore.setFacebookLink(e)) },
    changeInstagramLink: (e) => { dispatch(actionsStore.setInstagramLink(e)) },
    changeYiutubeLink: (e) => { dispatch(actionsStore.setYoutubeLink(e)) },
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);