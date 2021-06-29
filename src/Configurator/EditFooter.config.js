import React from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../redux/actions';
import { connect } from 'react-redux';
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
      
      <div >

        <FormGroup >

        <div className="iconFooter">     
            <FormControlLabel className=" iconName" 
              control={<Switch checked={filedFooter.facebook} onChange={handleChange} name="facebook" id="firstLabel"  />}
              label={
                <span className="icon" id="firstIcon"  > 
                 facebook<FontAwesomeIcon icon={['fab', 'facebook-square']} style={{ width:"3vw" , height: "3vh"}}
                ></FontAwesomeIcon> </span> 

              } />
          </div> 
          {/* <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" /> */}      
                    <textarea
                        className="inputLinkIcon"
                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTwitterLink(e.target.value)}
                        value={props.editFooter.facebookLink}
                        rows="1"
                        maxLength="50"                     
                        placeholder="Attach Link"
                    />
          <div className="iconFooter">

            <FormControlLabel className="d-flex justify-content-between"
              control={<Switch checked={filedFooter.twitter} onChange={handleChange} name="twitter" />}
              label={ <span className="icon" id="secondIcon">
              twitter  <FontAwesomeIcon icon={['fab', 'twitter']} style={{ width:"3vw" , height: "3vh"}} ></FontAwesomeIcon></span>} />
           
          </div>
      
                    <textarea
                        className="inputLinkIcon"
                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTwitterLink(e.target.value)}
                        value={props.editFooter.facebookLink}
                        rows="1"
                        maxLength="50"                     
                        placeholder="Attach Link"
                    />
      
          <div className="iconFooter">
            <FormControlLabel className=""
              control={<Switch checked={filedFooter.instagram} onChange={handleChange} name="instagram" />}
              label={<span className="icon" id="secondIcon">
              instagram  <FontAwesomeIcon icon={['fab', 'instagram']} style={{ width:"3vw" , height: "3vh"}} ></FontAwesomeIcon></span>} />
          
          </div>
          
                    <textarea
                        className="inputLinkIcon"
                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTwitterLink(e.target.value)}
                        value={props.editFooter.facebookLink}
                        rows="1"
                        maxLength="50"                     
                        placeholder="Attach Link"
                    />
              

          <div className="iconFooter">
            <FormControlLabel
              className="switch d-flex justify-content-between"
              control={<Switch checked={filedFooter.youtube} onChange={handleChange} name="youtube" />}
              label={  <span className="icon" id="fourthIcon">
               youtube <FontAwesomeIcon icon={['fab', 'youtube']} style={{ width:"3vw" , height: "3vh"}} ></FontAwesomeIcon></span> } />
          
          </div>
          
                    <textarea
                        className="inputLinkIcon"
                        // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
                        onChange={(e) => props.changeTwitterLink(e.target.value)}
                        value={props.editFooter.facebookLink}
                        rows="1"
                        maxLength="50"                     
                        placeholder="Attach Link"
                        ltr
                    />              
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