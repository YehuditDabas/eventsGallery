import { actionsStore } from '../actions';
import imageCompression from 'browser-image-compression';
import $ from "jquery";

const API_URL = 'https://events.calendar.dev.leader.codes/api/'


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

    fetch(API_URL + userName + '/getCalendarEventsCategory', requestOptions)
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


    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("authorization", TokenToString)//cookies;
    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,

    // };

    // return fetch(API_URL + userName + "/getEventsPageSettings", requestOptions)
    //   .then(res => res.json())
    //   .then(resJson => dispatch(actionsStore.addAllSettings(resJson)))
    //   .catch(err => {
    //     console.log(err)
    //   })

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
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(action.payload)
    }

    fetch("https://events.calendar.dev.leader.codes/api/" + userName + "/createOrUpadteEventsPageSettings", requestOptions)
      .then(res => res.json())
      .then(res => {
        dispatch(actionsStore.addAllSettings(res))
      },console.log("yrs"))
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



export const subscribe = async (obj) => {

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
  console.log(requestOptions.body, "body");
  return await fetch('https://calendar.dev.leader.codes/api/' + userName + '/subscribeNewEventsNotification', requestOptions)
    .then(res =>
      res.json())
    .then(resData => {
      if (resData.contacts !== null) {
        return true
      }
    })
    .catch(err => {
      return false
    })

}

  // document.cookie = "devJwt" + "=" + devJwt + ";" + expires + ";path=/";
