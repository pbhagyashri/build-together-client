import React, {Component} from 'react';
import { signup } from '../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signup extends Component {

    constructor(props) {
      super(props);

      this.state = {
          username: "",
          email: "",
          password: "",
          passwordError: "",
          passwordConfirmation: "",
          passwordConfirmationError: "",
          authErrors: "",
          errors: ""
      }

    }

    componentDidMount() {
      window.scroll({
        top: 450,
        behavior: "smooth"
      })
    }

    onInput = event => {
        this.setState({
            authErrors: "",
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
      let isError = false;
      const errors = {
        passwordError: "",
        passwordConfirmationError: ""
      }

      if(this.state.password.length < 6) {
        isError = true
        errors.passwordError = "Must be 6 characters long"
      }

      if(this.state.passwordConfirmation !== this.state.password) {
        isError = true
        errors.passwordConfirmationError = "Password doesn't match"
      }

      this.setState({
        ...this.state,
        ...errors
      })
      
      return isError
    }

    handleSubmit = event => {
    
      event.preventDefault();
      //validate form fields
    
      const err = this.validate()

      if (!err) {
        this.props.signup(this.state, this.props.history)
        this.setState({
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        })
      }
    }
          
  render() {
    
    return(
      <section className="form-section">
          
        <div className="form-section__signup-error-div"></div>
        <h1 className="form-section__title">Please Signup to get started</h1>

        <form onSubmit={(event) => this.handleSubmit(event)}>

          <label className="form-section__label">Username</label>
          <input 
            name="username"
            className="form-section__input" 
            type="text" placeholder="please enter your username"
            onChange={(event) => this.onInput(event)}
            value={this.state.username}
            required
          />
            
          <label className="form-section__label">Email</label>
          <input 
            name="email"
            className="form-section__input" 
            type="email" placeholder="please enter your email"
            onChange={(event) => this.onInput(event)}
            value={this.state.email}
            required
          />

          <label className="form-section__label">Password</label>
          <input 
            name="password"
            className="form-section__input" 
            type="password" placeholder="please enter your password"
            onChange={(event) => this.onInput(event)}
            value={this.state.password}
            errortext={this.state.passwordError}
            required
          />
          <span className="form-section__error">{this.state.passwordError}</span>

          <label className="form-section__label">Confirm Password</label>
          <input 
            name="passwordConfirmation"
            className="form-section__input" 
            type="password" placeholder="please confirm your password"
            onChange={(event) => this.onInput(event)}
            value={this.state.passwordConfirmation}
            outertext={this.state.passwordConfirmationError}
            required
          />
          <span className="form-section__error">{this.state.passwordConfirmationError}</span>
          <button type="submit" className="form-section__button">Submit</button>
    
        </form>

      </section>
    )
  } 

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      signup:  signup,
  }, dispatch);
};

export default connect( null, mapDispatchToProps)(Signup);