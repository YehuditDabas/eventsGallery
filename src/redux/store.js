import {createStore,applyMiddleware} from 'redux'
import events from './reducer/allEvents'
import {getEvents} from './middlweare/crud'

const eventsReducer = events;
const store = createStore(eventsReducer,applyMiddleware(getEvents));
window.store = store;
store.dispatch({ type: 'GET_DATA'});
export default store;
