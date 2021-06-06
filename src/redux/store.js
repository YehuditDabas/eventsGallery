import {createStore,applyMiddleware} from 'redux'
// import events from './reducer/allEvents'
import {getEvents,updateOrCreateSettings,getSettings} from './middlweare/crud'
import rootReducer from './reducer/index'


// const eventsReducer = events;
const store = createStore(rootReducer,applyMiddleware(getEvents,updateOrCreateSettings,getSettings));
window.store = store;
store.dispatch({ type: 'GET_DATA'});
store.dispatch({ type: 'GET_SETTINGS'});
export default store;
