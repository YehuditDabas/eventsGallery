import React, { useEffect } from 'react';
import './createEvent.css'


export default function CreateEvent(props) {
    const { color } = props;
    // לקבל בפרופס eventsPageColor
    useEffect(() => {
        document.documentElement.style.setProperty('--Backgound-color', color)
        // document.documentElement.style.setProperty('--Backgound-color', props.eventsPageColor)

    }, [color])
    function newPage() {
        window.open("https://calendar.dev.leader.codes/gilalorents");
        console.log("hi")
        return true;

    }

    return (
        <>
            <div className="container createNewComponent" onClick={newPage}>
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