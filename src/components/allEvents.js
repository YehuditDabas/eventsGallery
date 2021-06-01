import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
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
    const [settings,setSettings]=useState({eventsPageTitle:'opop', picteventsPageImageure:'', eventsPageDescription:'opppppppppppp',amountEventsInRow:'3'});//יקבל עדכון נתוני הגדרות מהשרת


   
    return (
        <>       
        <h1>my title:   {settings.eventsPageTitle}</h1>
        {/* <img src={settings.picteventsPageImageure} /> */}      
        <p>my description:   {settings.eventsPageDescription}</p>    
        </>
    )

})
