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
            <Card className="miniEventCardMobile" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <div className="row divMiniEventMobile">
                    <img src={img} className="imgMiniEventMobile" />
                </div>
                <div className="miniEventDescriptionMobile">
                    <div className="container-fluid miniEventMobileCon">
                        <div className="row">
                            <br></br>
                            <div >
                                <span className="col-sm-12 miniEventTitleMobile" >{title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>

    )
}

