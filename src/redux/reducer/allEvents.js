
import produce from 'immer'
import createReducer from './reducerUtils'

const intioanalState = {
    events: [],
    userName: {},
    devJwt: {},
    message: ''
}
const events = {
    addAllEvents(state, action) {
        debugger;
        state.events = action.payload;
        console.log("allevents" + state.events);
    },
    addUserName(state, action) {
        state.userName = action.payload;
    },
    addDevJwt(state, action) {
        state.devJwt = action.payload
    },
    setMessage(state, action) {
        state.message = action.payload
    }

}
export default produce((state, action) => createReducer(state, action, events), intioanalState);


