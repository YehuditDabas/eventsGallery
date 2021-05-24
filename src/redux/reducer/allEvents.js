
import produce from 'immer'
import createReducer from './reducerUtils'

const intioanalState = {
    events:
    {
       
    }
}
const events = {
    addAllEvents(state, action) {
        debugger;
        state.events = action.payload[0];
        console.log("allevents"+state.events.title);
    },


}
export default produce((state, action) => createReducer(state, action, events), intioanalState);


