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
        eventsPageImageOrVideo:''

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
        debugger
        state.settings.eventsPageTitle =action.payload.settings.eventsPageTitle;
        state.settings.eventsPageDescription =action.payload.settings.eventsPageDescription;
        state.settings.eventsPageImageOrVideo =action.payload.settings.eventsPageImageOrVideo;
        state.settings.eventsPageLogo =action.payload.settings.eventsPageLogo;
        state.settings.name=action.payload.settings.name;
        state.settings.phone=action.payload.settings.phone;
        state.settings.email=action.payload.settings.email;
        state.settings.address=action.payload.settings.address;
 


        console.log("GET_SETTINGS" +  action.payload.settings.eventsPageDescription);
;    },

}
export default produce((state, action) => createReducer(state, action, settings), intioanalState);
