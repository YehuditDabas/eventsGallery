import Http from '../../config/axios'
import { actionsStore } from '../actions'

export const getSettings = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_SETTINGS') {

        Http.get("/getEventsPageSettings")
            .then(res => {
                dispatch(actionsStore.addAllSettings(res.data))
            }
            )
            .catch(err => {
                console.log(err)
            })
    }
    return next(action)
}

export const updateOrCreateSettings = ({ dispatch, getState }) => next => action => {

    if (action.type === "UPDATE_OR_CREATE_SETTINGS") {
  
      Http.post("/createOrUpadteEventsPageSettings",action.payload)
        .then(res => {
          dispatch(actionsStore.addAllSettings(res.data))
        })
        .catch(err =>
          console.log(err)
        )
    }
  
  
    return next(action)
  }