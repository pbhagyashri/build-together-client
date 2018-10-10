const INITIAL_STATE = {
  authenticated: false,
  current_user: {
    id: null,
    username: "",
    email: "",
    user_projects: []
  },
  projects: [],
  errors: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        current_user: {...action.user},
        login_errors: []
      }
      
    case 'LOGIN_FAILURE':
    
      return {
        ...state,
        authenticated: false,
        current_user: {},
        login_errors: action.errors
      }

    case 'SIGNUP':
      return {
        ...state,
        authenticated: true,
        current_user: action.user,
        signup_errors: []
      }

    case 'SIGNUP_FAILURE':
      
      return {
        ...state,
        authenticated: false,
        current_user: {},
        signup_errors: action.errors
      }

    case 'LOGGEDOUT':
      return {
        ...state,
        authenticated: false,
        current_user: {},
      }
    
    case 'ADD_ALL_PROJECTS':
     
      return {
        ...state,
        projects: [...action.projects]
      }

    default:
      return  state
        
    }
}
