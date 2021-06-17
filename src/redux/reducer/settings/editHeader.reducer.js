import createReducer from '../reducerUtils';
import produce from 'immer';

const initialState = {
    header:{
        eventsPageAlignment: "",
        eventsPageImageOrVideo: "",
        eventsPageLogo:"",
        eventsPageTitle: "",
        eventsPageDescription: "",
        displayHeader: true

    }  
};
const editHeader = {
    initialEditHeaderConfiguration(state, action) {
        // state = { ...action.payload };
        // state = action.payload;
        //todo: 
        state.eventsPageAlignment = action.payload. eventsPageAlignment;
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
    // image: {
    //     channel: homeImage,
    //     logo: logo
    // },
    // setImage(state, action) {
    //     if (action.payload.file) {
    //         var imgUrl = URL.createObjectURL(action.payload.file);
    //         state.header.eventsPageImageOrVideo[action.payload.key] = imgUrl;
    //     }
    //     else {
    //         state.header.eventsPageImageOrVideo[action.payload.key] = action.payload.imgUrl;
    //     }
    //     console.log(state.image[action.payload.key] )
    // },

    setTitleText(state, action) {
        state.header.eventsPageTitle = action.payload;
        console.log( state.header.eventsPageTitle)
    },
   
    setBodyText(state, action) {
        state.header.eventsPageDescription = action.payload;
        console.log( state.header.eventsPageDescription)
    },
    addAllSettings(state, action) {
        state.header.eventsPageTitle =action.payload.settings.eventsPageTitle;
        state.header.eventsPageDescription =action.payload.settings.eventsPageDescription;
        state.header.eventsPageImageOrVideo =action.payload.settings.eventsPageImageOrVideo;
        state.header.eventsPageLogo =action.payload.settings.eventsPageLogo;
        state.header.displayHeader =action.payload.settings.displayHeader;
       


        console.log("GET_SETTINGS" +  action.payload.settings.eventsPageDescription);
;    },

    
};

export default produce((state, action) => createReducer(state, action, editHeader), initialState);
