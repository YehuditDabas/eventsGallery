import createReducer from '../reducerUtils';
import produce from 'immer';

const initialState = {
    subscribe:{
        name: true,
        email: true,
        phone: true,
        adress: false,}
 
};

const editSubscriptionConfigurator = {
    initialEditSubscribtionConfiguration(state, action) {
        //todo: 
        state.subscribe.name = action.payload.name;
        state.subscribe.email = action.payload.email;
        state.subscribe.phone = action.payload.phone;
        state.subscribe.adress = action.payload.adress;
    },
    settingFields(state, action) {
        state[action.payload.filedName] = action.payload.value;
    },
    addAllSettings(state, action){
        state.subscribe.name=action.payload.settings.name;
        state.subscribe.phone=action.payload.settings.phone;
        state.subscribe.email=action.payload.settings.email;
        state.subscribe.address=action.payload.settings.address;
 
    }
}
export default produce((state, action) => createReducer(state, action, editSubscriptionConfigurator), initialState)