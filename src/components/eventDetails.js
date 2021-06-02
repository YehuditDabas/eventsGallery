import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './eventDetails.css';
import { withRouter } from 'react-router-dom'
import SimpleImg from '../assets/simpleImg.png'
import user from '../assets/user.svg'
import title from '../assets/title.png';
import MiniEvent from '../components/miniEvent';

function mapStateToProps(state) {
    return {
        events: state.events,
    }
}

export default withRouter(connect(mapStateToProps)(function EventDetails(props) {
    const index = window.location.pathname.split('/')[3]

    const { events } = props;
    const [moreEvents, setMoreEvents] = useState();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let e1 = [];
    console.log(events[index])
    console.log('index', index)
    console.log("tickets ", events[index].registrationURL)
    function day() {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let str = events[index].start.slice(0, 10).split('-')
        var mydate = new Date(str[0], str[1] - 1, str[2]);
        console.log(mydate.toDateString())
        return weekday[mydate.getDay()];
    }
    function month() {
        let str = events[index].start.slice(0, 10).split('-')
        let mydate = new Date(str[0], str[1], str[2]);
        console.log(mydate.toDateString())
        let date = events[index].start.slice(8, 10).split('-');
        console.log("date  " + date)
        let month = date + " " + months[mydate.getMonth() - 1];
        return month
    }
    function hour() {
        let hour = events[index].start.slice(11, 16)
        return hour

    }
    function city() {
        let city = events[index].place.split(',')[2];
        console.log("city " + city);
        return city
    }
    function setMore(e1) {
        setMoreEvents(e1);

    }
    async function addMoreEvents() {
        let mon = await month().slice(3, 10);
        let numMonth = await months.indexOf(mon) < 10 ? "0" + (months.indexOf(mon) * 1 + 1) : (months.indexOf(mon) * 1) + 1;
        console.log("moreE " + numMonth)
        e1 = await events.filter((item, indexM) => item.start.indexOf(numMonth) == 5 && indexM != index);
        setMore(e1);
        console.log(moreEvents != undefined ? moreEvents[0] : "no more")
    }
    useEffect(() => {
        if (events.length != 0) {
            addMoreEvents()
        }
    }, [])
    return (
        <>
            {events.length !== 0 ? <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="rtitle">
                            <img src={title} height="100%" width="100%"></img>
                            <div className="eventTitle">{events[index].title}
                                <div className="eventDetails">{month()} | {city()} | {events[index].price === undefined ? 'Free' : events[index].price}
                                    <br /><a href={events[index].registrationURL} target="_blank" className="btn ticketsButton"  >Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <div className="aboutTitle">About The Event
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg></div>
                            <div className="description"  >{events[index].description != '' ? events[index].description : <p>Which is the most effective therapeutic approach, if any? Are the ‘core conditions’, like empathy really necessary for therapeutic personality change? Which clients seem to get the most out of person-centred therapy, or CBT? In this workshop, participants will have an opportunity to look at these questions and many more, learning about the latest research findings in the counselling and psychotherapy field. This workshop has been developed for counsellors and psychotherapists of all orientations, both in training and in practice. It will specifically look at how research findings can be used to enhance therapeutic work, with a range of take-away messages on what seems to ‘work’ and ‘not work’. The workshop will have a substantial taught component, but there will also be opportunity for discussion, exercises, questions, and dialogue. Knowing the evidence base for counselling and psychotherapy is becoming an increasingly important competence for therapy professionals. While there are many other important sources of knowledge and guidance on effective practice, this workshop will help practitioners and trainees develop in this area. the workshop will have a substantial taught component, but there will also be opportunity for discussion, exercises, questions, and dialogue.</p>}</div>
                        </div>
                        <div className="col-5">
                            <span className="col-sm-12 col-md-6 col-lg-3 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock biTime" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg> </span>
                            <br></br>
                            <span className="time"> {day()} | {month()}</span>
                            <br></br>
                            <span className="time"> {hour()}</span>
                            <br></br>
                            <span className="col-sm-6 col-md-6 col-lg-6 time padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt biTime" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> <br></br>{events[index].place}</span>
                            <br></br>
                            <span className="timeText">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person biTime" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>{events[index].participants[0]}<span>Participants</span>
                            </span>

                            <p className="priceText">{events[index].price === undefined ? 'Free' : events[index].price}</p>
                            <br /><a href={events[index].registrationURL} target="_blank" className="btn ticketsButton"  >Tickets</a>

                        </div>
                    </div>
                    <div class="moreEvents">
                        <h1>more events on {month().slice(3, 10)}</h1>
                        <div className="row">
                            {moreEvents && moreEvents.map(item => <div class="col-3" ><MiniEvent img={item.image} title={item.title}></MiniEvent> </div>)}
                        </div>
                    </div>
                </div>


            </> : ''}

        </>

    )
}))



