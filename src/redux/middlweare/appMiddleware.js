import thunk from "redux-thunk";
import { getEvents,getPageEventsGallery } from './eventsMiddleware'
import { getSettings, updateOrCreateSettings } from './settingsMiddleware'
import { subscribe , createSystemWave} from './subscribeMiddleware'

const appMiddleware = [
    thunk,
    getEvents,
    getSettings,
    updateOrCreateSettings,
    subscribe,
    createSystemWave,
    getPageEventsGallery
]

export default appMiddleware;