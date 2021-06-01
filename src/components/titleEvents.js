import React, { useEffect, useState } from 'react'
import './title.css'
import title from '../assets/Artboard – 1@2x (1).png';
import logo from '../assets/logo.jpg'
import arrow from '../assets/Polygon 24@2x.png'
import ReactPlayer from 'react-player'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'


function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}
const mapDispatchToProps = (dispatch) => ({
    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function TitleEvent(props) {
    const display = true;//ימלא נתונים בפרופס מהרידאקס אם מעונין שיציג כותרת
    const [settings, setSettings] = useState({ eventsPageTitle: 'welcome to leader event', picteventsPageImageure: '', eventsPageDescription: 'Don’t Act So Surprised, Your Highness. You Weren’t On Any Mercy Mission This Time. Seve…', amountEventsInRow: '3' });//ימלא נתונים מהפרופס מהרידאקס את ההגדרות..
    const [showing, setShowing] = useState(false);
    return (
        <>
            {display == true ? <div className="container-fluid" >


                <div className="row title" >
                    <img className="myImg" src={title}></img>
                    <img className="mylogo" src={logo}></img>
                    <div className="col-5">
                        <h1> {settings.eventsPageTitle}</h1>
                        <p> {settings.eventsPageDescription}</p>

                    </div>
                    <div className="col-4">
                        {/* להוסיף תנאי אם הגיע תמונה ו סרטון */}
                        {/* <img className="myImg" src={picture} width='100%' height='100%' className="video_or_picture"></img> */}
                        <ReactPlayer width='100%'
                            height='100%' className="video_or_picture" url='https://youtu.be/goCN79SruQU' />

                    </div>
                    <div className="row">
                        <div className="col-3">
                            {/* <input type="text" value="subscribe" className="subscribe"></input> */}
                            <button type="button" className="subscribe" onClick={() => setShowing(!showing)}>subscribe</button>

                            {/* <button className="btn btn-primary subscribe" value="subscribe" ></button> */}
                            {showing ?
                                <div>
                                    <img className="arrow" src={arrow}></img>
                                    <div className="dropDown">
                                        <form className="formSubscribe">
                                            <br></br>
                                            {/* <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                                            <input class="form-control" type="text" placeholder="Default input" /> */}
                                            <input class="form-control form-control-sm " id="fullNameField" type="text" placeholder="full name" />
                                            <input class="form-control form-control-sm "id="emailField" type="text" placeholder="email" /><br></br>
                                            {/* <button type="button" className="subscribeInside" >subscribe</button> */}

                                            <input type="button" class="form-control" id="subscribeInside" value="subscribe"></input>

                                            {/* <div class="form-group">
                                                <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control submitInput" id="exampleInputPassword1 " placeholder="subscribe" />                           </div> */}

                                        </form>

                                    </div></div> :
                                <div></div>
                            }



                        </div>

                    </div>

                </div>

            </div> : <div></div>}

        </>
    )

})
