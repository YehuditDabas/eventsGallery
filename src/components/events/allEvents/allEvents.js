import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import './allEvents.css'
import DisplayEvent from '../displayEvent/displayEvent';
import PreviousEvents from '../previousEvents/previousEvents';
import CreateEvent from '../../events/createEvent/createEvent';
import {actionsStore} from '../../../redux/actions'

function mapStateToProps(state) {
    var year=new Date();
    year = year.getUTCFullYear();
    return {
        
        events: state.allEvents.events.filter(item=>item.start.slice(0,4)==year),
        mainColor: state.pageSettings.page.eventsPageColor,
        amountEventsInRow: state.pageSettings.page.amountEventsInRow,
        WatchPreviousEvents:state.pageSettings.page.WatchPreviousEvents
    }
}
const mapDispatchToProps = (dispatch) => ({
    addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function AllEvents(props) {
    const { events, mainColor, amountEventsInRow ,WatchPreviousEvents,addAllEvents,sentBy} = props;
    console.log("sentBy  ",sentBy)
    console.log("amountEventsInRow  ", amountEventsInRow);
    document.documentElement.style.setProperty('--main-color', mainColor);
    var year = new Date();
    year = year.getUTCFullYear();
    const [eventsByMonth, setEventsByMonth] = useState(events.sort( (a, b) => new Date(a.start) -new Date( b.start)));
    const [pastEvents, setPastEvents] = useState(true);
    const month = ["all", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var classCols = amountEventsInRow == 4 ? 3 : 4;
    const numCols = "col-" + classCols;
    const isAdmin=true;
    console.log("num cols  ", numCols);
    
    console.log("year  ", year);
    var arrow = ["<", ">"];
    var eventsHeight =eventsByMonth.length==0&&isAdmin==false?30: eventsByMonth.length < amountEventsInRow ? 90 : Math.ceil((eventsByMonth.length+1) / amountEventsInRow) * 75;
    document.documentElement.style.setProperty('--events-height', eventsHeight + "vh"); console.log("height ", eventsHeight)

    const [prevMonth, setPrevMonth] = useState(0);
    useEffect(() => {
        setEventsByMonth(events)
    }, [events])

    var e1 = [];


    function filterByMonth(e) {
        console.log("m " + e.target.value);
        var d, m, y;
        e1 = [];
        m = e.target.value;
        document.getElementById(prevMonth).setAttribute('class', 'allEventsBtns');
        if (m == "next" && prevMonth < 12) {
            console.log("pm" + prevMonth)
            m = prevMonth * 1 + 1;
            console.log("next " + document.getElementById(m).innerHTML);
            document.getElementById(m).setAttribute('class', 'f_bt');
            document.getElementById(m - 1).setAttribute('class', 'allEventsBtns');
        }
        else if (m == "prev" && prevMonth > 0) {
            m = prevMonth - 1;
            console.log("prev" + document.getElementById(m).innerHTML);
            // document.querySelector('#'+m).classList.toggle('f_bt');
            document.getElementById(m).setAttribute('class', 'f_bt');
            document.getElementById(m + 1).setAttribute('class', 'allEventsBtns');

            console.log("the  " + document.getElementsByClassName('f_bt').innerHTML);

        }
        else if ((m == "next" || m == "prev") && (prevMonth == 12 || prevMonth == 0)) {
            m = prevMonth;
            document.getElementById(m).setAttribute('class', 'allEventsBtns');

        }


        for (var i = 0; i < events.length; i++) {
            y = events[i].start.slice(0, 4);
            d = i < 10 ? events[i].start.slice(6, 7) : events[i].start.slice(5, 7)
            console.log("y=" + y);
            if (d == m &&y==year) { e1.push(events[i]) }
        }
        if (m == 0) {
            e1 = events.filter(item => item.start.slice(0, 4)==year)
            setEventsByMonth(e1)
        }


        else { setEventsByMonth(e1); }

        if (!eventsByMonth) { console.log("אין אירועים"); }
        if (m >= 0 || m <= 12) { setPrevMonth(m); }
        addAllEvents(eventsByMonth)
    }








    return (
        <>

            <div class="container-fluid">
                <div class="row AllEventTitle" ><p>our upcoming events</p></div>
                <div ><button class="allEventsBtns" value="prev" width="2%" onClick={filterByMonth}>{arrow[0]}</button>
                    {month.map((item, index) => <button value={index} id={index} class="allEventsBtns" onClick={filterByMonth}>{item}</button>)}
                    <button class="allEventsBtns" value="next" onClick={filterByMonth}>{arrow[1]}</button></div>
                <div class="row AEevents">
                    {isAdmin==true?<div className={numCols} id="createEventArea">
                        <CreateEvent color={mainColor}></CreateEvent>
                    </div>:''}
                    

                    {eventsByMonth && eventsByMonth.length ? eventsByMonth.map((item, index) => <div class={numCols} style={amountEventsInRow==3?{paddingRight:"2vw",paddingLeft:"2vw"}:{},sentBy=="titleEvent"&&amountEventsInRow=='3'?{paddingRight:"3.5vw",paddingLeft:"3.5vw"}:{}} ><DisplayEvent index={index} currentEvent={item} eventsByMonth={eventsByMonth}></DisplayEvent> </div>) : ''}

                </div>

            </div>

        </>


    )



})