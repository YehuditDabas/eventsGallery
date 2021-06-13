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
      .then(res =>


        res.json())
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
      .then(res => res.json())
      .then(resJson => dispatch(actionsStore.addAllSettings(resJson)))
      .catch(err => {
        console.log(err)
      })


  }
  return next(action)
}


// export const updateOrCreateSettings = ({ dispatch, getState }) => next => action => {
//   // const devJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJZMlVSTVp0dWhTZlY3S2I0ZG1zc1VZU0FqQ2UyIiwiZW1haWwiOiJjaGF5YWJsYXVAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIyNjIyNzA2fQ.qvLWECleqZ-cFiIyhzQAOjKlSU2J1IM_5U3iYwQ69mY"
//   const devJwt='1234'

//   let date = new Date(Date.now() + 86400e3);
//   date = date.toUTCString();
//   var expires = "expires=" + date;

//   document.cookie = "devJwt" + "=" + devJwt + ";" + expires + ";path=/";
//   if (action.type === "UPDATE_OR_CREATE_SETTINGS") {

//     const TokenToString = document.cookie && document.cookie.includes('devJwt')
//       ? document.cookie
//         .split(';')
//         .filter(s => s.includes('devJwt'))[0]
//         .split('=')
//         .pop()
//       : null
//     const userName = window.location.pathname.split('/')[1]
//     dispatch(actionsStore.addUserName(userName))
//     dispatch(actionsStore.addDevJwt(TokenToString))

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("authorization", TokenToString)//cookies;

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: JSON.stringify(action.payload)
//     }

//     // console.log(action.payload)
//     fetch(API_URL + userName + "/createOrUpadteEventsPageSettings", requestOptions)
//       .then(res => res.json()).then(res => console.log("settings come back" + res))
//       .then(resJson => dispatch(actionsStore.updateOrCreateSettingsAgain(resJson)))
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   return next(action)

// }
