import React from 'react';
import loadercreate from '../../assets/Preloader_2.gif'
import loaderupload from '../../assets/image-loader.gif';

export default function Loader(props) {
debugger
    if (props.type === 'loadercreate') {
        return (
            <img src={loadercreate} alt="loading..." style={{ color: "white", width: '90%', borderRadius: '190px',marginTop: '-4vh' }} />

        )
    }
    else
        if (props.type === 'loaderupload') {
            return (
                <img src={loaderupload} alt="loading..." style={{ color: "white", width: '90%', borderRadius: '190px' }} />
            )
        }
    return null
}
