import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import './miniEvent.css';
import SimpleImg from '../assets/simpleImg.png'

export default function MiniEvent(props) {
    const {img,title} = props;
    const [isShown, setIsShown] = useState(false)
    console.log("image!!!!!!!!!!!!!"+ img);

   
    return (
        <>
            <Card className="miniEventCard" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <div className="row pRow">
                    <img src={SimpleImg} className="imgMiniEvent" />
                </div>
                <div className="miniEventDescription">
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <div >
                                <span className="col-sm-12 miniEventTitle" >{title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>

    )
}

