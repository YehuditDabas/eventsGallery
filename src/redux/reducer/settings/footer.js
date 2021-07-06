import createReducer from '../reducerUtils';
import produce from 'immer';
import EventPageSetings from '../../../models/eventsPageSettngs'


const initialState = {
    footer:EventPageSetings
}

const editFooter = {
   
    footerFields(state, action) {

        state.footer[action.payload.filedName] = action.payload.value;
    },
    setFacebookLink(state, action) {
        state.footer.facebookLink = action.payload;
    
    },
    setTwitterLink(state, action) {
        state.footer.twitterLink = action.payload;
        console.log( state.footer.twitterLink)
    },
    setInstagramLink(state, action) {
        state.footer.instagramLink = action.payload;
    },
    setYoutubeLink(state, action) {
        state.footer.youtubeLink = action.payload;
    },
    addAllSettings(state, action) {
  
        state.footer.facebook = action.payload.settings.facebook;
        state.footer.facebookLink = action.payload.settings.facebookLink;
        state.footer.twitter = action.payload.settings.twitter;
        state.footer.twitterLink = action.payload.settings.twitterLink;
        state.footer.instagram = action.payload.settings.instagram;
        state.footer.instagramLink = action.payload.settings.instagramLink;
        state.footer.youtube = action.payload.settings.youtube;
        state.footer.youtubeLink = action.payload.settings.youtubeLink
        console.log("footer  "+ state.footer.facebook)
    },

}
export default produce((state, action) => createReducer(state, action, editFooter), initialState)