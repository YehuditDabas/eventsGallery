import React from 'react'

export default function DisplayUrlJoin(props) {
    return(
        <iframe src={props.url} allowFullScreen height="500" width="400"></iframe>

    //     <iframe
    //     allowFullScreen
    //     frameborder="0"
    //     height="315"
    //     src={src}
    //     width="560"
    // />
    )
}