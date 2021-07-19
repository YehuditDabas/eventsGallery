import createReducer from './reducerUtils';
import produce from 'immer';
import EventPageSetings from '../../models/eventsPageSettngs'
import Event from '../../models/event'

const initialState = {
    newEvent:  Event
};
const createEvent={

    setTitleEvent(state, action) {   
          debugger  
        console.log('title new') 
        state.newEvent.title = action.payload;    
        
    },
    

}

export default produce((state, action) => createReducer(state, action, createEvent), initialState);