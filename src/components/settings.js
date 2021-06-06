
import React, { Component, useState, useRef } from 'react';
import { actionsStore } from '../redux/actions'
import { connect } from 'react-redux';

import { Form, Control } from 'react-redux-form';
import Input from "react-validation/build/input";
import { updateOrCreateSettings } from '../redux/middlweare/crud'

export default connect(mapStateToProps, mapDispatchToProps)(function SettingsEvents(props) {

    const { settings, onChangeLogoHeader, onChangeTitleHeader, onChangeEventsGalleryDescriptionHeader,
        onChangeImageHeader, onChangeAmountEventsInRowHeader, OnSubmitupdateOrCreateSettingsHeader } = props
    //  const form = useRef();
    //   const checkBtn = useRef();
    const [logo, setLogo] = useState("");
    const [title, setTitle] = useState("leader title");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("leadet description");
    const [eventsInRow, setEventsInRow] = useState("66");

    function onChangeLogo(e) {
        
        onChangeLogoHeader(e);
        setLogo(e)
    }
    function onChangeTitle(e) {
        
        onChangeTitleHeader(e);
        setTitle(e)
    }
    function onChangeEventsGalleryDescription(e) {
        onChangeEventsGalleryDescriptionHeader(e)
        setDescription(e)
    }
    function onChangeAmountEventsInRow(e) {
        onChangeAmountEventsInRowHeader(e)
        setEventsInRow(e)
        
    }
    function onChangeImage(e) {
        onChangeImageHeader(e)
        setImage(e)
        
    }



    const handleUpdateSettings = (e) => {
        debugger;
        e.preventDefault();
const newr= {  eventsPagelogo: logo,
    eventsGalleryTitle: title,
    eventsGalleryDescription: description,
    amountEventsInRow: eventsInRow,
    eventsGalleryImage: image}
        OnSubmitupdateOrCreateSettingsHeader(
           newr
        )

    }
    return (
        <div>
            <form onSubmit={handleUpdateSettings}>
                <label htmlFor='logo'>Logo</label>
                <input
                    type='image'
                    className=''
                    name='logo'
                    onChange={(e) => onChangeLogo(e.target.value)}
                /><br></br>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    className=''
                    name='title'
                    onChange={(e) => onChangeTitle(e.target.value)}
                /><br></br>
                <label htmlFor='description'>Descriprion</label>
                <input
                    type='text'
                    className=''
                    name='description'
                    onChange={(e) => onChangeEventsGalleryDescription(e.target.value)}
                /><br></br>
                <label htmlFor='image'>Image Or Vidio</label>
                <input
                    type='image'
                    className=''
                    name='image'
                    onChange={(e) => onChangeImage(e.target.value)}
                /><br></br>
                <label htmlFor='eventsInRow'>events In Row</label>
                <input
                    type='text'
                    className=''
                    name='eventsInRow'
                    onChange={(e) => onChangeAmountEventsInRow(e.target.value)}
                />
                <br></br>
                <input type='submit' ></input>

            </form>
        </div>
    )
});

function mapDispatchToProps(dispatch) {
    return {
        onChangeLogoHeader: (logo) => dispatch(actionsStore.updateLogo(logo)),
        onChangeTitleHeader: (title) => dispatch(actionsStore.updateTitle(title)),
        onChangeEventsGalleryDescriptionHeader: (description) => dispatch(actionsStore.updateDescription(description)),
        onChangeImageHeader: (image) => dispatch(actionsStore.updateImage(image)),
        onChangeAmountEventsInRowHeader: (eventsinrow) => dispatch(actionsStore.updateMountInRow(eventsinrow)),
        OnSubmitupdateOrCreateSettingsHeader: (g) => dispatch(actionsStore.updateOrCreateSettings(g))
    }
}
// .then(resJson =>dispatch(actionsStore.addAllEvents(resJson)))
function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}



// No need to connect()!
