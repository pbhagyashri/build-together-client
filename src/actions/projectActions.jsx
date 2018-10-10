
//const API_URL = "http://192.168.1.190:3001/api"
const API_URL = "https://build-together-server.herokuapp.com/api"

const fetchProjectSuccess = (projects) => {
  
  return {
    type: 'ADD_ALL_PROJECTS',
    projects: projects
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