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
    const numCols = "col-" + 4;
    var arrow = ["<", ">"];
    const [prevMonth, setPrevMonth] = useState(0);
    useEffect(() => {

        console.log(events)
    }, [])

    var e1 = [];
    function filterByMonth(e) {
        console.log("m " + e.target.value);
        var d, m;
        e1 = [];
        m = e.target.value;
        document.getElementById(prevMonth).setAttribute('class', 'bt');
        if (m == "next" && prevMonth < 12) {
            console.log("pm" + prevMonth)
            m = prevMonth * 1 + 1;
            console.log("next " + document.getElementById(m).innerHTML);
            document.getElementById(m).setAttribute('class', 'f_bt');
            document.getElementById(m-1).setAttribute('class', 'bt');

        }
        else if (m == "prev" && prevMonth > 0) {
            m = prevMonth - 1;
            console.log("prev" + document.getElementById(m).innerHTML);
            // document.querySelector('#'+m).classList.toggle('f_bt');
            document.getElementById(m).setAttribute('class', 'f_bt');
            document.getElementById(m+1).setAttribute('class', 'bt');

            console.log("the  "+ document.getElementsByClassName('f_bt').innerHTML);

        }
        else if ((m == "next" || m == "prev") && (prevMonth == 12 || prevMonth == 0)) {
            m = prevMonth;
            document.getElementById(m).setAttribute('class', 'bt');

        }
        var date = new Date("1-1-1900");
        for (var i = 0; i < events.length; i++) {
            d = i < 10 ? events[i].start.slice(6, 7) : events[i].start.slice(5, 7)
            console.log("d=" + d);
            console.log("pp  " + date.toISOString())
            if (d == m && events[i].start > date.toISOString()) { e1.push(events[i]) }
        }
        if (m == 0) {
            e1=events.filter(item=>item.start>date.toISOString())
            setEventsByMonth(e1)
        }
        else { setEventsByMonth(e1); }

        if (!eventsByMonth) { console.log("אין אירועים"); }
        if (m >= 0 || m <= 12) { setPrevMonth(m); }
    }








    return (
        <>

            <div class="container-fluid">
                <div class="row title"><h2>our upcoming events</h2></div>
                <div ><button class="bt" value="prev" onClick={filterByMonth}>{arrow[0]}</button>
                    {month.map((item, index) => <button value={index} id={index} class="bt" onClick={filterByMonth}>{item}</button>)}
                    <button class="bt" value="next" onClick={filterByMonth}>{arrow[1]}</button></div>
                <div class="row">
                    {eventsByMonth.map((item, index) => <div class={numCols} ><DisplayEvent index={index} events={eventsByMonth}></DisplayEvent> </div>)}
                </div>
            </div>

        </>


    )



})
