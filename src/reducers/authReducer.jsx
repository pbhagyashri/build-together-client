const INITIAL_STATE = {
  authenticated: false,
  current_user: {
    id: null,
    username: "",
    email: "",
  },
  login_errors: [],
  signup_errors: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      debugger
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

    default:
      return  state
        
    }
}
