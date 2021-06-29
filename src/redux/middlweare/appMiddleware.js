import thunk from "redux-thunk";
import { getEvents } from './eventsMiddleware'
import { getSettings, updateOrCreateSettings } from './settingsMiddleware'
import { subscribe , createSystemWave} from './subscribeMiddleware'
// import { createSystemWave } from './crud'

const appMiddleware = [
    thunk,
    getEvents,
    getSettings,
    updateOrCreateSettings,
    subscribe,
    createSystemWave
]

export default appMiddleware;