import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import './miniEventMobile.css';

export default function MiniEventMobile(props) {
    const {img,title,mainColor} = props;
    const [isShown, setIsShown] = useState(false)
    console.log("color  ", mainColor );
    document.documentElement.style.setProperty('--main-color',mainColor);


   
    return (
        <>
            <Card className="miniEventCard" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <div className="row divMiniEvent">
                    <img src={img} className="imgMiniEvent" />
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

