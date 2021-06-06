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

<<<<<<< HEAD
    fetch('https://calendar.dev.leader.codes/api/' + userName+ requestOptions)
      .then(res => {
        
        res.json()})
      .then(resJson =>dispatch(actionsStore.addAllEvents(resJson)))
=======
    fetch('https://calendar.dev.leader.codes/api/' + userName, requestOptions)
      .then(res =>
        res.json()

      )
      .then(resJson => dispatch(actionsStore.addAllEvents(resJson)))
>>>>>>> eventsGalleryDev
      .catch(err => {
        console.log(err)
      })
  }
  return next(action)
}

export const getSettings = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_SETTINGS') {
    const TokenToString = document.cookie && document.cookie.includes('devJwt')
<<<<<<< HEAD
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

   fetch(API_URL+userName+"/getEventsPageSettings" , requestOptions )
    .then(res => res.json())
    .then(  resJson =>  dispatch(actionsStore.addAllSettings(resJson)))
    .catch(err => {
      console.log(err)
    })
=======
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
      .then(resJson => dispatch(actionsStore.addAllSettings(resJson)))
      .catch(err => {
        console.log(err)
      })
>>>>>>> eventsGalleryDev


  }
  return next(action)
}


export const updateOrCreateSettings = ({ dispatch, getState }) => next => action => {
   const devJwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJZMlVSTVp0dWhTZlY3S2I0ZG1zc1VZU0FqQ2UyIiwiZW1haWwiOiJjaGF5YWJsYXVAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIyNjIyNzA2fQ.qvLWECleqZ-cFiIyhzQAOjKlSU2J1IM_5U3iYwQ69mY"

     
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
var expires = "expires=" + date;

<<<<<<< HEAD
  document.cookie = "devJwt" + "=" + devJwt + ";" + expires + ";path=/";
  debugger;
  if(action.type==="UPDATE_OR_CREATE_SETTINGS"){
  
=======
  if (action.type === "UPDATE_OR_CREATE_SETTINGS") {

>>>>>>> eventsGalleryDev
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
      method: 'POST',
      headers: myHeaders,
<<<<<<< HEAD
      body:JSON.stringify(action.payload)
    }
     
    // console.log(action.payload)
    debugger;
     fetch(API_URL+userName+"/createOrUpadteEventsPageSettings" , requestOptions )
      .then(res =>res.json()).then(res=>console.log("settings come back"+res))
      .then(resJson =>dispatch(actionsStore.updateOrCreateSettingsAgain(resJson)))
=======
      body: JSON.stringify(action.payload.newr)
    }


    console.log(action.payload)

    debugger;
    fetch(API_URL + userName + "/createOrUpadteEventsPageSettings", requestOptions)
      .then(res => {
        debugger
        res.json()
      }

      )
      .then(resJson => dispatch(actionsStore.updateOrCreateSettings(resJson)))
>>>>>>> eventsGalleryDev
      .catch(err => {
        console.log(err)
      })
  }
  return next(action)

}
