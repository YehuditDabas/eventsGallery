import {HttpSub} from '../../config/axios'
import { actionsStore } from '../actions'
import $ from 'jquery'

export const subscribe = ({ dispatch, getState }) => next => action => {
  if (action.type === "CREATE_SUBSCRIBE") {
    HttpSub.post('/subscribeNewEventsNotification', action.payload)
      .then(res => {
        if (res.data.contact !== undefined) {
          dispatch(actionsStore.createSystemWave(res.data))
        }
      }).then(resData => {
        dispatch(actionsStore.setMessage('you subscribe success!'))
      })
      .catch(err => {
        dispatch(actionsStore.setMessage(String(err)))
      })
  }
  return next(action)
}
export const createSystemWave = ({ dispatch, getState }) => next => action => {
  if (action.type === 'CREATE_SYSTEM_WAVE') {
    let systemWave = {
      subject: 'new subscribe',
      body: `${action.payload.contact.name} is subscribe to get your new events`,
      to: ['yehuditlaniado','gila'],
      from: '@eventsGallery',
      source: 'EventsGallery',
      files: null
    }
    console.log("createSystemWave", JSON.stringify(systemWave))
    $.ajax({
      url: "https://box.dev.leader.codes/api/createSystemWave",
      type: 'POST',
      data: systemWave,
      success: function (data) {
        console.log("send systemWave from middleware", data);
      },
      error: function (err) {
        console.log("err send systemwave " + err);
      }
    })
  }
  return next(action)
}
