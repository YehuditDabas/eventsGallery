import Http from '../../config/axios'
import { actionsStore } from '../actions'

export const getEvents = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_DATA') {
        Http.get(`/getCalendarEventsCategory`)
            .then(res => dispatch(actionsStore.addAllEvents(res.data)))
            .catch(err => {
                console.log(err)
            })
    }
    return next(action)
}

export const getPageEventsGallery = ({ dispatch, getState }) => next => action => {
    debugger; if (action.type === 'GET_DATA_G') {
        Http.get(`/getPageEventsGallery`).then(res => {
             window.open(res.data)})
    } return next(action)
}


