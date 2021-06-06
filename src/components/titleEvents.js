import React, { useEffect, useState } from 'react'
import './title.css'
import title from '../assets/Artboard – 1@2x (1).png';
import logo from '../assets/logo.jpg'
import arrow from '../assets/Polygon 24@2x.png'
import ReactPlayer from 'react-player'
import { Dropdown } from 'react-bootstrap'
import CreateEvent from './createEvent'
import { connect } from 'react-redux'
function mapStateToProps(state) {
    console.log(state.settings.settings)
    return {
        settings: state.settings.settings
    }
}
const mapDispatchToProps = (dispatch) => ({
    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function TitleEvent(props) {
    const { settings } = props;
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[adress,setAdress]=useState("");
    const [placeHolderEmail,setPlaceHolderEmail]=useState("email");
    const[placeHolderName,setPlaceHolderName]=useState("name");
    const[placeHolderPhone,setPlaceHolderPhone]=useState("phone");
    const[placeHolderAdress,setPlaceHolderAdress]=useState("adress");




    // const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    // const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
    const [showing, setShowing] = useState(false);
    function subscribe(){
        debugger
        const obj={    
            objEmail:email,
            objName:name,
            objPhone:phone,
            objAdress:adress
        };
        setEmail("");
        setName("");
        setPhone("");
        setAdress("");

        console.log(obj)
    }
   
    function checkImg() {
        if (settings.eventsPageImageOrVideo.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            {settings.eventsPageTitle !== "" ? <div className="container-fluid" >


                <div className="row title" >
                    <img className="myImg" src={title}></img>
                    <img className="mylogo" src={settings.eventsPageLogo}></img>
                    <div className="col-5 titleAndDescription">
                        <h1 className="titleH1"> {settings.eventsPageTitle}</h1>
                        <p className="descriptionP"> {settings.eventsPageDescription}</p>

                    </div>
                    <div className="imgOrVieo">
                        {checkImg() === true ?
                            <img className="myImg" src={settings.eventsPageImageOrVideo}></img>
                            : <ReactPlayer width='100%'
                                height='100%' className="video_or_picture" url={settings.eventsPageImageOrVideo} />
                        }

                    </div>
                    <div className="row">
                        <div className="col-3 subscribeArea">
                            {/* <input type="text" value="subscribe" className="subscribe"></input> */}
                            <button type="button" className="subscribe" onClick={() => setShowing(!showing)}>subscribe</button>

                            {/* <button className="btn btn-primary subscribe" value="subscribe" ></button> */}
                            {showing ?
                                <div>
                                    <img className="arrow" src={arrow}></img>
                                    <div className="dropDown">
                                        <form className="formSubscribe">
                                            <br></br>
    {/* const[placeHolderAdress,setPlaceHolderAdress]=useState("adress"); */}
                                           {settings.name===true?<input class="form-control form-control-sm " id="name" type="text" placeholder={placeHolderName} onChange={(e)=>setName(e.target.value)} />:<></>} 
                                           {settings.email===true? <input class="form-control form-control-sm " id="emailField" type="text" placeholder={placeHolderEmail} onChange={(e)=>setEmail(e.target.value)} />:<></>}
                                           {settings.phone===true?<input class="form-control form-control-sm " id="PhoneField!" type="text" placeholder={placeHolderPhone}  onChange={(e)=>setPhone(e.target.value)} />:<></>}
                                           {settings.address===true?<input class="form-control form-control-sm " id="emailField!" type="text" placeholder={placeHolderAdress} onChange={(e)=>setAdress(e.target.value)} />:<></>}
                                            <br></br><br></br>
                                            <input type="button" class="form-control" id="subscribeInside" value="subscribe" onClick={subscribe}></input>


                                        </form>

                                    </div></div> :
                                <div></div>
                            }



                        </div>

                    </div>

                </div>

            </div> : <div></div>}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 createEventArea">
                        <CreateEvent></CreateEvent>
                    </div>
                </div>
            </div>

        </>
    )

})
