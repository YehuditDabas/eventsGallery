import createReducer from './reducerUtils';
import produce from 'immer';

const initialState = {
facebook:false,
facebookLink:"",
twitter:false,
twitterLink:"",
instagram:false,
instagramLink:"",
youtube:false,
youtubeLink:"",


}

const editFooterConfigurator = {
    initialEditSubscribtionConfiguration(state, action) {
        //todo: 
        state.facebook = action.payload.facebook;
        state.facebookLink = action.payload.facebookLink;
        state.twitter = action.payload.twitter;
        state.twitterLink = action.payload.twitterLink;
        
        state.instagram = action.payload.instagram;
        state.instagramLink = action.payload.instagramLink;
        state.youtube = action.payload.youtube;
        state.youtubeLink = action.payload.youtubeLink;
        
    },
    
}
export default produce((state, action) => createReducer(state, action, editFooterConfigurator), initialState)