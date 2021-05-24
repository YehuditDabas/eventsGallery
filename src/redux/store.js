import {createStore} from 'redux'
import events from './reducer/allEvents'
const eventsReducer = events;
const store = createStore(eventsReducer);
window.store = store;
export default store;
