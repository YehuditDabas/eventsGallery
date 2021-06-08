import { combineReducers } from 'redux'
import allEvents from './allEvents'

import settings from './settings'
import site from './site'
import pageSettings from './settings/pageSettings.reducer'
import editHeader from './settings/editHeader.reducer'
import editSubscription from './settings/editSubscription.reducer'
import editFooter from './settings/footer'
export default combineReducers({ allEvents, settings, site, pageSettings, editHeader,editSubscription ,editFooter})