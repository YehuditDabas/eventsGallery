import produce from 'immer'
import createReducer from './reducerUtils'

const intioanalState = {
    settings:
    {
        eventsPagelogo:"",
        eventsGalleryTitle:"",
        eventsGalleryTitle:"",
        eventsGalleryDescription:"",
        // ShowHistoricalEvents:true,
        amountEventsInRow:"",
        eventsGalleryImage:''
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
      
        state.settings = action.payload;
        console.log("GET_SETTINGS" + state.events);
    },

}
export default produce((state, action) => createReducer(state, action, settings), intioanalState);
