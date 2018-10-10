import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { createProject } from '../actions/project_actions'

class ProjectForm extends Component {
  
  constructor(props) {

    super(props);
    
    this.state = {
      name: "",
      technology: "",
      description: "",
      duration: "",
      github_link: "",
      user_id: this.props.user_id,
      user_name: this.props.user_name 
    }
  }//constructor

  componentDidMount() {
    
    window.scroll({
      top: 650,
      behavior: "smooth"
    })
   
    const token = sessionStorage.Token
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleProjectSubmit(event) {
    event.preventDefault()
    //this.props.createProject(this.state, this.props.history)
  }

  render() {
 
    return (
      <section className="form-section">
        
          <h1 className="form-section__title">Create a new Project</h1>

          <form onSubmit={(event) => this.handleProjectSubmit(event)}>
           
            <label className="form-section__label">Name:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="name"
            className="form-section__input"
            type="text" 
            placeholder="Please Choose a name"
            value={this.state.name}
            required
            />

            <label className="form-section__label">Technology:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            className="form-section__input"
            name="technology"
            type="text" 
            placeholder="Please enter the technologies used in your project"
            value={this.state.technology}
            required
            />
            
            <label className="form-section__label">Description:</label>
            <textarea
             
            onChange={(event) => this.handleChange(event)}
            name="description"
            className="form-section__input" 
            placeholder="Please enter a descriptiong of your project."
            value={this.state.value}
            />

            <label className="form-section__label">Duration:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="duration"
            className="form-section__input"
            type="text" 
            placeholder="Please enter the duration of your project"
            value={this.props.duration}
            />
            
            <label className="form-section__label">Github Link:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="github_link"
            className="form-section__input"
            type="text" 
            placeholder="Please add the link to your project on Github"
            value={this.props.github}
            required
            />

            <button type="submit" className="form-section__button">Submit</button>
        
          </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

    
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProjectForm);