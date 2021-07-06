import createReducer from '../reducerUtils';
import produce from 'immer';
import EventPageSetings from '../../../models/eventsPageSettngs'


const initialState = {
    subscribe:EventPageSetings
 
};

const editSubscriptionConfigurator = {
    initialEditSubscribtionConfiguration(state, action) {
        //todo: 
        state.subscribe.name = action.payload.name;
        state.subscribe.email = action.payload.email;
        state.subscribe.phone = action.payload.phone;
        state.subscribe.adress = action.payload.address;
    },
    settingFields(state, action) {
       
        state.subscribe[action.payload.filedName]=action.payload.value;
    },

    addAllSettings(state, action) {
      
        state.subscribe.name = action.payload.settings.name;
        state.subscribe.phone = action.payload.settings.phone;
        state.subscribe.email = action.payload.settings.email;
        state.subscribe.address = action.payload.settings.address;
        console.log("subscibe  " + state.subscribe.name)
    }
}
export default produce((state, action) => createReducer(state, action, editSubscriptionConfigurator), initialState)