const API_URL = "http://192.168.1.190:3001/api"

const loginSuccess = (user) => {
  return {
    type: 'LOGIN',
    user: user
  }
}

const loginFailure = (errors) => {
  return {
    type: 'LOGIN_FAILURE',
    errors: errors.message
  }
}

export const login = (user, history) => {
  debugger
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then((response) => {
          debugger
          if (response.errors) {

            throw Error(response.errors);

          } else{
            sessionStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.user))
          }
        })
        .catch( errors => {

          sessionStorage.clear()
          dispatch(loginFailure(errors))
        })
  }
}