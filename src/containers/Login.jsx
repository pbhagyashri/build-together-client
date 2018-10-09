import React, {Component} from 'react';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state, this.props.history)
    this.setState({
      email: "",
      password: "",
      errors: this.props.errors
    })
  }

  render() {
    
    const errors = this.state.errors
    
    return (
      <section className="form-section">
        <div className="form-section__login-error-div"></div>
        <h1 className="form-section__title">Please login to get started</h1>

        <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group">

            <label className="form-section__label">Email</label>
            <input

            name="email"
            className="form-section__input"
            type="email" placeholder="please enter email"
            onChange={(event) => this.onInput(event)}
            value={this.state.email}
            required
            />

            <label className="form-section__label">Password</label>
            <input
            name="password"
            className="form-section__input"
            type="password" placeholder="please enter password"
            onChange={(event) => this.onInput(event)}
            value={this.state.password}
            required
            />

            <button type="submit" className="form-section__button">Submit</button>
          </div>
        </form>
        <div><span className="form-section__span">Not registered? </span><a className="form-section__links" href="/signup">Signup</a></div>
      </section>
    )
  }

}

const mapStateToProps = ({auth}) => {
  
  return {
    errors: auth.login_errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
