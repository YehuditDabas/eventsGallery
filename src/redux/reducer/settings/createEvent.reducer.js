import createReducer from '../reducerUtils';
import produce from 'immer';
import EventPageSetings from '../../../models/eventsPageSettngs'


const initialState = {
    newEvent:  Event
};
const createEvent={

    setTitleEvent(state, action) {
     
        state.newEvent.title = action.payload;
        
    },

}

export default produce((state, action) => createReducer(state, action, createEvent), initialState);