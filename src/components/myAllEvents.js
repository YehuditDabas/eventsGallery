import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './event.css';
import { actionsStore } from '../redux/actions';
import DisplayEvent from './displayEvent'
import PreviousEvents from './previousEvents'
function mapStateToProps(state) {
    debugger;
    console.log(state.allEvents.events)
    return {
        events: state.allEvents.events
    }
}
const mapDispatchToProps = (dispatch) => ({
    addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
    addUserName: (username) => dispatch(actionsStore.addUserName(username)),
    addDevJwt: (devJwt) => dispatch(actionsStore.addDevJwt(devJwt)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function AllEvents(props) {
    const [numCols, setNumCols] = useState('col-3')
    const { events, addAllEvents, addUserName, addDevJwt } = props

    return (
        <>
            {events.length === 0 ? <p>loading</p> :
                <div className="row">
                   {
                        events.map((item, key) => (
                            <div key={key} className="cardEvent" className={numCols}>
                                <DisplayEvent index={key} />
                            </div>
                        ))
                    }
                </div>}
                {/* <PreviousEvents/> */}
        </>
    )
})
// export default connect(mapStateToProps, mapDispatchToProps)(function AllEvents(props) {
//     const { events } = props;
//     const [settings,setSettings]=useState({eventsPageTitle:'opop', picteventsPageImageure:'', eventsPageDescription:'opppppppppppp',amountEventsInRow:'3'});//יקבל עדכון נתוני הגדרות מהשרת




//     return (
//         <>
//         <h1>my title:   {settings.eventsPageTitle}</h1>
//         {/* <img src={settings.picteventsPageImageure} /> */}      
//         <p>my description:   {settings.eventsPageDescription}</p>    
//         </>
//     )

// })
