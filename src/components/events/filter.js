import React, { useState, useEffect, useRef } from 'react';

export default function Filter() {

    const events = [{
        name: "1",
        date: new Date("02/25/2019")
    },
    {
        name: "er",
        date: new Date("02/19/2019")
    }, {
        name: "gsfhfh",
        date: new Date("01/13/2020")
    }]
    const [eventsByMonth, setEventsByMonth] = useState(events)
    const dateRef = useRef(null)
    function filterByMonth() {
        console.log(events[1].date.getMonth());
        console.log(dateRef.current.value);
        setEventsByMonth(events.filter(item => item.date.getMonth() == dateRef.current.value)
        )
    }
    return (
        <div>
            <input type="month" ref={dateRef} onChange={filterByMonth}/>
            {/* <input type="number"  min="1" max="12"  ></input> */}
            <ul>
                {events.map(item => <li>{item.name + " " + item.date.getMonth()}</li>)}
            </ul>
            <h2>the events:</h2>
            <ul>
                {eventsByMonth.map(item => <li>{item.name + " " + item.date.getMonth()}</li>)}
            </ul>
        </div>
    );
}
