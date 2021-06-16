import { actionsStore } from '../actions'
import imageCompression from 'browser-image-compression';
import $ from "jquery";
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

    fetch('https://calendar.dev.leader.codes/api/' + userName + requestOptions)
      .then(res => {

        res.json()
      })
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
   
    fetch("https://events.calendar.dev.leader.codes/api/" + userName + "/getEventsPageSettings", requestOptions)
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
      : null
    const userName = window.location.pathname.split('/')[1]
    dispatch(actionsStore.addUserName(userName))
    dispatch(actionsStore.addDevJwt(TokenToString))

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", TokenToString)//cookies;
    debugger

    
    debugger;
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(action.payload)
  }

  fetch("https://events.calendar.dev.leader.codes/api/" + userName + "/createOrUpadteEventsPageSettings", requestOptions)
    .then(res => res.json())
    .then(res => {
      debugger;
      dispatch(actionsStore.addAllSettings(res))
    })
    .catch(err =>
      console.log(err)
    )
  }

  
    return next(action)
}



 //    fetch(newFile).then(r => {
  //     return r.blob();
  //   }).then(blobFile => {
  //     let name = `${newFile.split("/")[3]}.png`;
  //     let fileToUpload = new File([blobFile], name, {
  //       lastModified: new Date().getTime(),
  //       type: blobFile.type,
  //     });
  //     const options = {
  //       maxSizeMB: 1,
  //       maxWidthOrHeight: 1920,
  //       useWebWorker: true,
  //     };
  //     const compressedFile = imageCompression(fileToUpload, options);
  //     return compressedFile;
  //   }).then((compressedFile) => {
  //     newAudio.append('img', compressedFile, compressedFile.name);
  // console.log("compressedFile  "+compressedFile)
  //    })



  //   const devJwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJZMlVSTVp0dWhTZlY3S2I0ZG1zc1VZU0FqQ2UyIiwiZW1haWwiOiJjaGF5YWJsYXVAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIyNjIyNzA2fQ.qvLWECleqZ-cFiIyhzQAOjKlSU2J1IM_5U3iYwQ69mY"
//    const TokenToString = document.cookie && document.cookie.includes('devJwt')
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// var expires = "expires=" + date;

  // document.cookie = "devJwt" + "=" + devJwt + ";" + expires + ";path=/";
