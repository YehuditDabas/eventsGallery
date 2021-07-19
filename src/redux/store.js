import { createStore, applyMiddleware, compose } from 'redux'
// import events from './reducer/allEvents'
import { updateOrCreateSettings, getSettings } from './middlweare/crud'
import rootReducer from './reducer/index'
import appMiddleware from './middlweare/appMiddleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(appReducers,  composeEnhancers(applyMiddleware(...appMiddleware)));

// const eventsReducer = events;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...appMiddleware)));
// const store = createStore(rootReducer,applyMiddleware(updateOrCreateSettings,getSettings));
window.store = store;
// store.dispatch({ type: 'GET_DATA_G' });
store.dispatch({ type: 'GET_DATA' });
store.dispatch({ type: 'GET_SETTINGS' });
// store.dispatch({ type: 'GET_DATA_G' });
export default store;


