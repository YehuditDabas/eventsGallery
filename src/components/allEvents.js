import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actionsStore } from '../redux/actions'
function mapStateToProps(state) {
    return {
        events: state.events
    }
}
const mapDispatchToProps = (dispatch) => ({

    addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function AllEvents(props) {
    const { events, addAllEvents } = props;

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




    useEffect(() => {
        debugger
        fetch('https://calendar.dev.leader.codes/api/' + userName, requestOptions)
            .then(res => res.json())
            .then(resJson => {
                debugger;
                addAllEvents(resJson)

            }

            )
            .catch(err => {
                console.log(err)
            })

    }, [])


    return (

        <>

          
        </>
    )

})
