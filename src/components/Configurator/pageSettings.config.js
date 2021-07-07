
import React,{useEffect} from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
import dropper from '../../assets/dropper.svg';
import { GithubPicker, CirclePicker } from 'react-color';
// import StopIcon from '@material-ui/icons/Stop';
import $ from 'jquery'; 

import './ConfigComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function PageSettings(props) {
    const [currentColor,setCurrentColor]=useState('#FF53F7')


    let color = ['#ad60ff', '#ff53f7', '#ff62b2', '#fa5252', '#ff803f', '#faee3a',
        '#424149', '#9f9cb5', '#4f40d0', '#54b9ff', '#51e7fb', '#63f597']
        

    function addcss(myColor) {
        debugger;
      setCurrentColor(myColor)
     const index= color.indexOf(myColor)
     $(color).addClass('bg');
     var divs = document.getElementsByClassName("bg");

    //  divs[index].style.backgroundColor = 'red'


    // color[index].addClass('selected');
    // color.eq(currentColor).css("color", "black");
    props.changeMainColor(myColor)
    }

    // useEffect(() => {
    //     function changeColor() {
    //         // newColor
    //         document.getElementById("overlay").style.backgroundColor = newColor;
    //     }
    // }, [])


 
        // useEffect(()=>{

        // },[])

    return (
        <div >
            <div className="ml-1 mt-3">
                <span className="titleSettings"> Main Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker colors={color} onChange={(e) => props.changeMainColor(e.hex)} className="colorSelected" /></div>
            <div className="ml-1 mt-3">
                <span className="titleSettings"> Button Color</span>
            </div >
            <div className="d-flex justify-content-center ChannelColorwidth" >
                <GithubPicker icker colors={color} onChange={(e) => props.changeButtonStyle(e.hex)} /></div>

            {/* <br /> */}

            <div className="row m-2 mt-3">
                <div className="col-7   showinpageRow">Show In Row</div>
                <div className="col-5 " ><select
                    className="textField SelectChanel"
                    name="showInPage"
                    id="showInPage"
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
        showInPage: state.pageSettings.amountEventsInRow,
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeShowHistoricalEvents: (e) => dispatch(actionsStore.setShowHistoricalEvents(e)),
    changeShowInPage: (e) => dispatch(actionsStore.setShowInPage(e)),
    changeMainColor: (e) => dispatch(actionsStore.setMainColor(e)),
    changeButtonStyle: (e) => dispatch(actionsStore.setButtonStyle(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(PageSettings);
