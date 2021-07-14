// import { actionsStore } from '../actions';
// import axios from 'axios'
// import $ from 'jquery'

// const API_URL = 'https://events.calendar.dev.leader.codes/api/'

// function getJwtFormCookie() {
//   
//   return document.cookie && document.cookie.includes('devJwt')
//     ? document.cookie
//       .split(';')
//       .filter(s => s.includes('devJwt'))[0]
//       .split('=')
//       .pop()
//     : null

// }
// const userName = window.location.pathname.split('/')[1]
// const Http = axios.create({
//   baseURL: `${API_URL}/${userName}`,
//   headers: {
//     "Content-Type": "application/json",
//     "authorization": getJwtFormCookie()
//   }
// })

// export const getEvents = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_DATA') {
//     dispatch(actionsStore.addUserName(userName))
//     
//     Http.interceptors.request.use((config) => { console.log(config); return config })
//     Http.get('/getCalendarEventsCategory')
//       .then(res => res.json())
//       .then(resJson => dispatch(actionsStore.addAllEvents(resJson)))
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   return next(action)
// }
// export const getEvents1 = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_DATA') {
//     dispatch(actionsStore.addUserName(userName))
//     
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("authorization", getJwtFormCookie())//cookies;


//     var requestOptions = {
//       headers: myHeaders,
//     };

//     axios.get(API_URL + userName + "/getCalendarEventsCategory", requestOptions)
//       .then(res => res.json())
//       .then(resJson => dispatch(actionsStore.addAllEvents(resJson)))
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   return next(action)
// }

// export const getSettings = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_SETTINGS') {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("authorization", getJwtFormCookie())//cookies;

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,

//     };

//     fetch(API_URL + userName + "/getEventsPageSettings", requestOptions)
//       .then(res =>
//         res.json()
//       )
//       .then(resJson => {
//         dispatch(actionsStore.addAllSettings(resJson))
//       }
//       )
//       .catch(err => {
//         console.log(err)
//       })


//     // var myHeaders = new Headers();
//     // myHeaders.append("Content-Type", "application/json");
//     // myHeaders.append("authorization", TokenToString)//cookies;
//     // var requestOptions = {
//     //   method: 'GET',
//     //   headers: myHeaders,

//     // };

//     // return fetch(API_URL + userName + "/getEventsPageSettings", requestOptions)
//     //   .then(res => res.json())
//     //   .then(resJson => dispatch(actionsStore.addAllSettings(resJson)))
//     //   .catch(err => {
//     //     console.log(err)
//     //   })

//   }
//   return next(action)
// }

// export const updateOrCreateSettings = ({ dispatch, getState }) => next => action => {

//   if (action.type === "UPDATE_OR_CREATE_SETTINGS") {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("authorization", getJwtFormCookie())//cookies;
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: JSON.stringify(action.payload)
//     }

//     fetch("https://events.calendar.dev.leader.codes/api/" + userName + "/createOrUpadteEventsPageSettings", requestOptions)
//       .then(res => res.json())
//       .then(res => {
//         dispatch(actionsStore.addAllSettings(res))
//       })
//       .catch(err =>
//         console.log(err)
//       )
//   }


//   return next(action)
// }

// //    fetch(newFile).then(r => {
// //     return r.blob();
// //   }).then(blobFile => {
// //     let name = `${newFile.split("/")[3]}.png`;
// //     let fileToUpload = new File([blobFile], name, {
// //       lastModified: new Date().getTime(),
// //       type: blobFile.type,
// //     });
// //     const options = {
// //       maxSizeMB: 1,
// //       maxWidthOrHeight: 1920,
// //       useWebWorker: true,
// //     };
// //     const compressedFile = imageCompression(fileToUpload, options);
// //     return compressedFile;
// //   }).then((compressedFile) => {
// //     newAudio.append('img', compressedFile, compressedFile.name);
// // console.log("compressedFile  "+compressedFile)
// //    })
// export const subscribe = ({ dispatch, getState }) => next => action => {
//   if (action.type === "CREATE_SUBSCRIBE") {
//     
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("authorization", getJwtFormCookie())//cookies;
//     var requestOptions = {
//       method: 'post',
//       headers: myHeaders,
//       body: JSON.stringify(action.payload)
//     };
//     console.log(requestOptions.body, "body");
//     fetch('https://calendar.dev.leader.codes/api/' + userName + '/subscribeNewEventsNotification', requestOptions)
//       .then(res =>
//         res.json())
//       .then(resData => {
//         
//         if (resData.contact !== undefined) {
//           dispatch(actionsStore.createSystemWave(resData))
//           return resData
//         }
//       }).then(resData => {
//         dispatch(actionsStore.setMessage('you subscribe success!'))
//       })
//       .catch(err => {
//         dispatch(actionsStore.setMessage(String(err)))
//       })
//   }
//   return next(action)
// }

// export const createSystemWave = ({ dispatch, getState }) => next => action => {
//   
//   if (action.type === 'CREATE_SYSTEM_WAVE') {
//     let systemWave = {
//       subject: 'new subscribe',
//       body: `${action.payload.contact.name} is subscribe to get your new events`,
//       to: ['yehuditlaniado','ester','gila'],
//       from: '@eventsGallery',
//       source: 'EventsGallery',
//       files: null
//     }
//     console.log("createSystemWave", JSON.stringify(systemWave))
//     $.ajax({
//       url: "https://box.dev.leader.codes/api/createSystemWave",
//       type: 'POST',
//       // headers: { Authorization: getState().init.jwt },
//       data: systemWave,
//       success: function (data) {
//         console.log("send systemWave from middleware", data);
//       },
//       error: function (err) {
//         console.log("err send systemwave " + err);
//       }
//     })
//   }
//   return next(action)
// }

//   // document.cookie = "devJwt" + "=" + devJwt + ";" + expires + ";path=/";
