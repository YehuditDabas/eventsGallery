import React, {useEffect}from 'react';
import './createEvent.css'


export default function CreateEvent(props) {

    // לקבל בפרופס eventsPageColor
    useEffect(() => {
        document.documentElement.style.setProperty('--Backgound-color', 'red')
        // document.documentElement.style.setProperty('--Backgound-color', props.eventsPageColor)

    }, [])
    function newPage() {
        debugger;
        window.open("https://calendar.dev.leader.codes/gilalorents");
        console.log("hi")
        return true;

    }

    return (
        <>
            <div className="container" onClick={newPage}>
                <div className="row" >
                    <div className="col-12">
                        <h1 className="plus"> + </h1>
                    </div>
                    <div className="col-12">
                        <p className="create" >Create new</p>
                    </div>
                </div>

            </div>
        </>
    )
}