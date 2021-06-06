import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './event.css';
import { actionsStore } from '../redux/actions';
import DisplayEvent from './displayEvent'
import PreviousEvents from './previousEvents'
function mapStateToProps(state) {
    console.log("event", state.events)
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
    const TokenToString = document.cookie && document.cookie.includes('devJwt')
        ? document.cookie
            .split(';')
            .filter(s => s.includes('devJwt'))[0]
            .split('=')
            .pop()
        : null
    const userName = window.location.pathname.split('/')[1]


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    // useEffect(() => {
    //     fetch('https://calendar.dev.leader.codes/api/' + userName, requestOptions)
    //         .then(res => res.json())
    //         .then(resJson => {
    //             addAllEvents(resJson)
    //             console.log('events', events)

    //         }

    //         )
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     addUserName(userName)
    //     addDevJwt(TokenToString)
    // }, [])

    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
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
                <PreviousEvents/>
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
