import { actionsStore } from '../actions'
const API_URL = "https://calendar.dev.leader.codes/api/"

export const getEvents = ({ dispatch, getState }) => next => action => {

  if (action.type === 'GET_DATA') {
    const TokenToString = document.cookie && document.cookie.includes('devJwt')
      ? document.cookie
        .split(';')
        .filter(s => s.includes('devJwt'))[0]
        .split('=')
        .pop()
      : null
    const userName = window.location.pathname.split('/')[1]
    dispatch(actionsStore.addUserName(userName))
    dispatch(actionsStore.addDevJwt(TokenToString))

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch('https://calendar.dev.leader.codes/api/' + userName + "/getCalendarEventsCategory", requestOptions)
      .then(res => res.json())
      .then(resJson => dispatch(actionsStore.addAllEvents(resJson)))
      .catch(err => {
        console.log(err)
      })
  }
  return next(action)
}

export const getSettings = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_SETTINGS') {
    const TokenToString = document.cookie && document.cookie.includes('devJwt')
      ? document.cookie
        .split(';')
        .filter(s => s.includes('devJwt'))[0]
        .split('=')
        .pop()
      : null;
    const userName = window.location.pathname.split('/')[1]
    dispatch(actionsStore.addUserName(userName))
    dispatch(actionsStore.addDevJwt(TokenToString))


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    };

    fetch(API_URL + userName + "/getEventsPageSettings", requestOptions)

      .then(res =>

        res.json()
      )
      .then(resJson => {
        dispatch(actionsStore.addAllSettings(resJson))
      }
      )
      .catch(err => {
        console.log(err)
      })


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    };

    return fetch('https://events.calendar.dev.leader.codes/api' + userName + "/getEventsPageSettings", requestOptions)
      .then(res => res.json())
      .then(resJson => dispatch(actionsStore.addAllSettings(resJson)))
      .catch(err => {
        console.log(err)
      })

  }
  return next(action)
}
export const updateOrCreateSettings = ({ dispatch, getState }) => next => action => {

  if (action.type === "UPDATE_OR_CREATE_SETTINGS") {

    const TokenToString = document.cookie && document.cookie.includes('devJwt')
      ? document.cookie
        .split(';')
        .filter(s => s.includes('devJwt'))[0]
        .split('=')
        .pop()
      : null;
    const userName = window.location.pathname.split('/')[1]
    dispatch(actionsStore.addUserName(userName))
    dispatch(actionsStore.addDevJwt(TokenToString))


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: JSON.stringify(action.payload.newr)
    }


    console.log(action.payload)

    fetch('https://events.calendar.dev.leader.codes/api' + userName + "/createOrUpadteEventsPageSettings", requestOptions)
      .then(res => {
        res.json()
      }

      )
      .then(resJson => dispatch(actionsStore.updateOrCreateSettings(resJson)))
      .catch(err => {
        console.log(err)
      })
  }
  return next(action)


}



export const subscribe = (obj) => {

  const TokenToString = document.cookie && document.cookie.includes('devJwt')
    ? document.cookie
      .split(';')
      .filter(s => s.includes('devJwt'))[0]
      .split('=')
      .pop()
    : null
  const userName = window.location.pathname.split('/')[1]

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", TokenToString)//cookies;
  var requestOptions = {
    method: 'post',
    headers: myHeaders,
    body: JSON.stringify(obj)
  };
console.log(requestOptions.body,"body");
  // fetch('https://calendar.dev.leader.codes/api/' + userName + '/subscribeNewEventsNotification', requestOptions)
  //   .then(res =>
  //     res.json())
  //   .catch(err => {
  //     console.log(err)
  //   })

}

