import createReducer from '../reducerUtils';
import produce from 'immer';

import logoImage from '../../../assets/Group 21405.svg'

const initialState = {
    header: {
        eventsPageAlignment: "",
        eventsPageImageOrVideo: "",
        eventsPageLogo: logoImage,
        eventsPageTitle: "",
        eventsPageDescription: " ",
        displayHeader: true
    },
    loaderuploadImage: false,
    loaderuploadLogo: false
};
const editHeader = {
    initialEditHeaderConfiguration(state, action) {
        // state = { ...action.payload };
        // state = action.payload;
        //todo: 
        state.eventsPageAlignment = action.payload.eventsPageAlignment;
        state.eventsPageImageOrVideo = action.payload.eventsPageImageOrVideo;
        state.eventsPageLogo = action.payload.eventsPageLogo;
        state.eventsPageTitle = action.payload.eventsPageTitle;
        state.eventsPageDescription = action.payload.eventsPageDescription;
        state.displayHeader = action.payload.displayHeader;

    },
    setAlignment(state, action) {

        state.header.eventsPageAlignment = action.payload;
        console.log(state.header.eventsPageAlignment)
    },

    setImage(state, action) {
        debugger

        state.header.eventsPageImageOrVideo = action.payload;
        state.loaderuploadImage = false;
        console.log(state.header.eventsPageImageOrVideo)
    },
    setLogo(state, action) {
        debugger
        state.header.eventsPageLogo = action.payload;
        state.loaderuploadLogo = false;
        console.log(state.header.eventsPageLogo)
    },


    setTitleText(state, action) {
        state.header.eventsPageTitle = action.payload;
        console.log(state.header.eventsPageTitle)
    },

    setBodyText(state, action) {
        state.header.eventsPageDescription = action.payload;
        console.log(state.header.eventsPageDescription)
    },
    setLoaderUploadShow(state, action) {
        if (action.payload.imageOrLogo === "logo") {
            state.loaderuploadLogo = action.payload.bool;
        }
        else state.loaderuploadImage = action.payload.bool;
    },

    addAllSettings(state, action) {
        state.header.eventsPageTitle = action.payload.settings.eventsPageTitle;
        state.header.eventsPageDescription = action.payload.settings.eventsPageDescription;
        state.header.eventsPageImageOrVideo = action.payload.settings.eventsPageImageOrVideo;
        console.log("image " + state.header.eventsPageImageOrVideo);
        state.header.eventsPageLogo = action.payload.settings.eventsPageLogo;
        state.header.eventsPageAlignment = action.payload.settings.eventsPageAlignment;
        state.header.displayHeader = action.payload.settings.displayHeader;
        console.log("header  " + state.header.eventsPageTitle + "description " + state.header.eventsPageDescription + " alinment " + state.header.eventsPageAlignment)

        console.log("GET_SETTINGS" + action.payload.settings.eventsPageDescription);
        ;
    },
}

export default produce((state, action) => createReducer(state, action, editHeader), initialState);
