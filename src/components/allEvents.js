import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import './allEvents.css'
import DisplayEvent from './displayEvent';
function mapStateToProps(state) {
    return {
        events: state.events
    }
}
const mapDispatchToProps = (dispatch) => ({

    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function AllEvents(props) {
    const { events } = props;
    // const [settings, setSettings] = useState({ eventsPageTitle: 'opop', picteventsPageImageure: '', eventsPageDescription: 'opppppppppppp', amountEventsInRow: '3' });//יקבל עדכון נתוני הגדרות מהשרת
    const [eventsByMonth, setEventsByMonth] = useState(events);
    const month = ["all", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dateRef = useRef(null);
    var e1 = [];



    function filterByMonth(e) {
        console.log(e.target.value);
        var d, m;
        m = e.target.value;
        e1 = [];
        for (var i = 0; i < events.length; i++) {
            d = i < 10 ? events[i].start.slice(6, 7) : events[i].start.slice(5, 7)
            console.log(d);
            if (d == m) { e1.push(events[i]) }

        }
        if (m == 0) { setEventsByMonth(events) }
        else { setEventsByMonth(e1); }

        if (!eventsByMonth) { }
        console.log("אין אירועים");

    }








    return (
        <div class="container-fluid">
            <div class="title"><h2>our upcoming events</h2></div>

            <div >
                {month.map((item, index) => <button value={index} id={index} class="btn" onClick={filterByMonth}>{item}</button>)}</div>

            <div class="row">
                {eventsByMonth.map((item, index) => <div class="col-4" ><DisplayEvent index={index} events={eventsByMonth}></DisplayEvent> </div>)}</div>
        </div>

    )



})
