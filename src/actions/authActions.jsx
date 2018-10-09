//const API_URL = "http://192.168.1.190:3001/api"
const API_URL = "https://build-together-server.herokuapp.com/api"

const loginSuccess = (user) => {
  return {
    type: 'LOGIN',
    user: user
  }
}

const signupSuccess = (user) => {
  return {
    type: 'SIGNUP',
    user: user
  }
}

const loginFailure = (errors) => {
  return {
    type: 'LOGIN_FAILURE',
    errors: errors.message
  }
}

const signupFailure = (errors) => {
  return {
    type: 'SIGNUP_FAILURE',
    errors: errors.message
  }
}

export const signup = (user, history) => {

  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then((response) => {
          if (response.errors) {
           
            throw Error(response.errors);
          
          } else{
            sessionStorage.setItem('Token', response.token);
            dispatch(signupSuccess(response.user))
            history.push("/")
          }
        })
        .catch( errors => {
        
          const errorDiv = document.getElementsByClassName("form-section__signup-error-div")[0]
          
          errorDiv.innerHTML = errors
          errorDiv.style.padding = '7px'
          sessionStorage.clear()
          dispatch(signupFailure(errors))
        })
  }

}

export const login = (user, history) => {
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
          if (response.errors) {

            throw Error(response.errors);

          } else{
            sessionStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.user))
          }
        })
        .catch( errors => {
          const loginerrorDiv = document.getElementsByClassName("form-section__login-error-div")[0]
          
          loginerrorDiv.innerHTML = errors
          loginerrorDiv.style.padding = '7px'
          sessionStorage.clear()
          dispatch(loginFailure(errors))
        })
  }
}