import produce from 'immer'
import createReducer from './reducerUtils'

const intioanalState = {
    settings:
    {
        name:"",
        email:"",
        phone:"",
        address:"",
        eventsPageLogo:"",
        eventsPageTitle:"",
        eventsPageDescription:"",
        // ShowHistoricalEvents:true,
        amountEventsInRow:"",
        eventsGalleryImage:'',
        facebook:'',
        facebookLink:'',
        twitter:'',
        twitterLink:'',
        instagram:'',
        instagramLink:'',
        youtube:'',
        youtubeLink:''
    },
    userName:{},
    devJwt:{}
}
const settings = {
    updateLogo(state, action) {
        state.settings.eventsPagelogo = action.payload;
        // console.log("allevents"+state.events[2].title);
    },
    updateTitle(state, action) {
        
                state.settings.eventsGalleryTitle = action.payload;
                console.log("updateTitle"+state.settings.eventsGalleryTitle)
       
    },
    updateDescription(state, action) {
        
        state.settings.eventsGalleryDescription= action.payload;
        
    },
    updateImage(state, action) {
  
        state.settings.eventsGalleryImage= action.payload;
        
    },
    updateMountInRow(state, action) {
       
        state.settings.amountEventsInRow= action.payload;
        
    },
    addUserName(state, action) {
      
        state.userName = action.payload;
    },
    addDevJwt(state, action) {
        
        state.devJwt = action.payload
    },
    // updateOrCreateSettings(state,action){
    //     // state.action.settings=action.payload;
    //     state.settings.eventsGalleryTitle = action.payload;
    //     state.settings.eventsGalleryDescription= action.payload;
    //     state.settings.amountEventsInRow= action.payload;
    // },
    addAllSettings(state, action) {
        debugger;
        state.settings.facebook = action.payload.settings.facebook;
        state.settings.facebookLink = action.payload.settings.facebookLink;
        state.settings.twitter = action.payload.settings.twitter;
        state.settings.twitterLink = action.payload.settings.twitterLink;
        state.settings.instagram = action.payload.settings.instagram;
        state.settings.instagramLink = action.payload.settings.instagramLink;
        state.settings.youtube = action.payload.settings.youtube;
        state.settings.youtubeLink = action.payload.settings.youtubeLink;
        state.settings.eventsButtonColor = action.payload.settings.eventsButtonColor;
        state.settings.eventsPageColor = action.payload.settings.eventsPageColor;
        console.log("GET_SETTINGS" + state.settings);
    },

}
export default produce((state, action) => createReducer(state, action, settings), intioanalState);
