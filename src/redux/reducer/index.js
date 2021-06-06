import { combineReducers } from 'redux'
import allEvents from './allEvents'

import settings from './settings'
import site from './site'
import channelSettings from './channelSettings.reducer'
import editHeader from './editHeader.reducer'
import subscription from './editSubscription.reducer'

export default combineReducers({ allEvents, settings, site, channelSettings, editHeader,subscription })