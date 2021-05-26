
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
        state.events = action.payload;
        console.log("allevents"+state.events[2].title);
    },


}
export default produce((state, action) => createReducer(state, action, events), intioanalState);


