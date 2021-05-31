
import produce from 'immer'
import createReducer from './reducerUtils'

const intioanalState = {
    events:[],
    userName:{},
    devJwt:{}
}
const events = {
    addAllEvents(state, action) {
        state.events = action.payload;
        console.log("allevents" + state.events);
    },
    addUserName(state, action) {
        state.userName = action.payload;
    },
    addDevJwt(state, action) {
        state.devJwt = action.payload
    },
}
export default produce((state, action) => createReducer(state, action, events), intioanalState);


