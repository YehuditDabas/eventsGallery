import { actionsStore } from '../actions'
export const getEvents = ({ dispatch, getState }) => next => action => {
  debugger;
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

    fetch('https://calendar.dev.leader.codes/api/' + userName, requestOptions)
      .then(res => res.json())
      .then(resJson =>dispatch(actionsStore.addAllEvents(resJson)))
      .catch(err => {
        console.log(err)
      })
  }
  return next(action)
}




