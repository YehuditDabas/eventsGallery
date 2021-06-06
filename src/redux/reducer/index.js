import { combineReducers } from 'redux'
import allEvents from './allEvents'

import settings from './settings'
import site from './site'
import pageSettings from './pageSettings.reducer'
import editHeader from './editHeader.reducer'
import editSubscription from './editSubscription.reducer'

export default combineReducers({ allEvents, settings, site, pageSettings, editHeader,editSubscription })