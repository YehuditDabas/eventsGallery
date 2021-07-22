import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
import './ConfigComp.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from "react-redux";


function EditFooter(props) {

  const filedFooter = useSelector(state => state.editFooter.footer)
  const dispatch = useDispatch()
  const handleChange = (event) => {
   
    dispatch(actionsStore.footerFields({ "filedName": [event.target.name], "value": event.target.checked }));

  };

  return (
    <FormControl component="fieldset" className="FormControlW">

      <div >

        <FormGroup >

          {/* facebook */}
          <div className="iconFooter">
            <FormControlLabel className=" iconName iconInMobile"
              control={<Switch checked={filedFooter.facebook} onChange={handleChange} name="facebook" id="firstLabel" />}
              label={
                <span className="icon" id="firstIcon"  >
                  facebook<FontAwesomeIcon icon={['fab', 'facebook-square']} className="iconSize"
                  ></FontAwesomeIcon> </span>

              } />
          </div>
          {/* <Form.Control size="sm" type="text" placeholder="Attach Link" className="inputLinkIcon" /> */}
          <textarea
            className="inputLinkIcon"
            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
            onChange={(e) => props.changeFacebookLink(e.target.value)}
            value={filedFooter.facebookLink}
            rows="1"
            maxLength="50"
            placeholder="Attach Link"
          />
{/* twitter */}
          <div className="iconFooter">
            <FormControlLabel className="d-flex justify-content-between"
              control={<Switch checked={filedFooter.twitter} onChange={handleChange} name="twitter" />}
              label={<span className="icon" id="secondIcon">
                twitter  <FontAwesomeIcon icon={['fab', 'twitter']} className="iconSize" ></FontAwesomeIcon></span>} />
          </div>

          <textarea
            className="inputLinkIcon"
            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
            onChange={(e) => props.changeTwitterLink(e.target.value)}
            value={filedFooter.twitterLink}
            rows="1"
            maxLength="50"
            placeholder="Attach Link"
          />
{/* instagram */}
          <div className="iconFooter">
            <FormControlLabel className=""
              control={<Switch checked={filedFooter.instagram} onChange={handleChange} name="instagram" />}
              label={<span className="icon" id="thirdIcon">
                instagram  <FontAwesomeIcon icon={['fab', 'instagram']} className="iconSize" ></FontAwesomeIcon></span>} />

          </div>

          <textarea
            className="inputLinkIcon"
            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
            onChange={(e) => props.changeInstagramLink(e.target.value)}
            value={filedFooter.instagramLink}
            rows="1"
            maxLength="50"
            placeholder="Attach Link"
          />

{/* youtube */}
          <div className="iconFooter">
            <FormControlLabel
              className="switch d-flex justify-content-between"
              control={<Switch checked={filedFooter.youtube} onChange={handleChange} name="youtube" />}
              label={<span className="icon" id="fourthIcon">
                youtube <FontAwesomeIcon icon={['fab', 'youtube']} className="iconSize" ></FontAwesomeIcon></span>} />

          </div>

          <textarea
            className="inputLinkIcon"
            // onKeyPress={(e) => e.key == 'Enter' && e.target.value.includes('\n') && e.preventDefault()}
            onChange={(e) => props.changeYiutubeLink(e.target.value)}
            value={filedFooter.youtubeLink}
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

const mapDispatchToProps = (dispatch) => {
  return {

    changeTwitterLink: (e) => dispatch(actionsStore.setTwitterLink(e)),
    changeFacebookLink: (e) => { dispatch(actionsStore.setFacebookLink(e)) },
    changeInstagramLink: (e) => { dispatch(actionsStore.setInstagramLink(e)) },
    changeYiutubeLink: (e) => { dispatch(actionsStore.setYoutubeLink(e)) },

  }
}
export default connect( mapDispatchToProps)(EditFooter);
