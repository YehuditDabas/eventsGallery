
import React,{useEffect} from 'react';
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

    let color = ['#AD60FF', '#FF53F7', '#FF62B2', '#FA5252', '#FF803F', '#FAEE3A',
        '#424149', '#9F9CB5', '#4F40D0', '#54B9FF', '#51E7FB', '#63F597']

        function ScrollGeneric (value,color)  {
            console.log('fffffffffff')
         debugger
         props.changeMainColor(color)
            document.getElementById(value).scrollIntoView({ block: "end", behavior: 'smooth' })
        }
        
        // useEffect(()=>{

        // },[])

    return (
        <div >
            <div className="ml-1 mt-3">
                <span className="titleSettings"> Main Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <CirclePicker colors={color}
                 onChange={(e)=>ScrollGeneric("scrolpagecolor",e.hex)}
                // onChange={(e) => props.changeMainColor(e.hex)}            
                  className="colorSelected" /></div>
            <div className="ml-1 mt-3">
                <span className="titleSettings"> Button Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <CirclePicker icker colors={color} onChange={(e) => props.changeButtonStyle(e.hex)} /></div>

            {/* <br /> */}

            <div className="row m-2 mt-3">
                <div className="col-7   showinpageRow">Show In Row</div>
                <div className="col-5 " ><select
                    className="textField SelectChanel"
                    name="showInPage"
                    id="showInPage"    
                    onClick={()=>ScrollGeneric('showTheEvents')}           
                    onChange={(e) => props.changeShowInPage(e.target.value)}
                   
                    value={props.showInPage}
                >
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select></div>
            </div>
            <div className='whtchPrviesEventLabel'>
                <FormGroup className="d-flex justify-content-between">
                    {/* <FormControlLabel className="d-flex justify-content-between  switchPageSettings"
                        control={<Switch onChange={(e) => { props.changeShowHistoricalEvents(e.target.checked) }} className="" />}
                        label="Watch previous events"
                        style={{ marginLeft: "1.5vw",marginRight:"2vw !important" }}
                    /> */}
                <span  className='whatcPrevousEventLabel'  >Watch previous events</span>
                <Switch onChange={(e) => { props.changeShowHistoricalEvents(e.target.checked) }} className="" />
                </FormGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showInPage: state.pageSettings.amountEventsInRow,
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeShowHistoricalEvents: (e) => dispatch(actionsStore.setShowHistoricalEvents(e)),
    changeShowInPage: (e) => dispatch(actionsStore.setShowInPage(e)),
    changeMainColor: (e) => dispatch(actionsStore.setMainColor(e)),
    changeButtonStyle: (e) => dispatch(actionsStore.setButtonStyle(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(pageSettings);
