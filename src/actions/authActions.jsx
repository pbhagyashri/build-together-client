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

const fetchProjectSuccess = (projects) => {
  
  return {
    type: 'ADD_ALL_PROJECTS',
    projects: projects
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
            
          }
        })
        .catch( errors => {
          const loginerrorDiv = document.getElementsByClassName("form-section__login-error-div")[0]
          
          loginerrorDiv.innerHTML = errors
          loginerrorDiv.style.padding = '7px'
          sessionStorage.clear()
        })
  }
}

export const logout = (history) => {
  return dispatch => {
      sessionStorage.clear();
      history.push("/")
      return dispatch({type: 'LOGGEDOUT'});
  }
}

export const fetchProjects = () => {
  return dispatch => {
    return fetch(`${API_URL}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then((response) => {
      if (response.errors) { 
        throw Error(response.errors);
      } else{
        dispatch(fetchProjectSuccess(response))
      }
    })
    .catch (errors => {
      console.log(errors)
    })
  }
}