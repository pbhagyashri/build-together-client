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
      <div className="row create-project-container">
        <div className="col-sm-6">
          <h2>Create a new Project</h2>
          <form onSubmit={(event) => this.handleProjectSubmit(event)}>
           <div className="form-group">
            <label>Name:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="name"
            className="form-control"
            type="text" 
            placeholder="Please Choose a name"
            value={this.state.name}
            />

            <label>Technology:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            className="form-control"
            name="technology"
            type="text" 
            placeholder="Please enter the technologies used in your project"
            value={this.state.technology}
            />
            
            <label>Description:</label>
            <textarea
             
            onChange={(event) => this.handleChange(event)}
            name="description"
            className="form-control" 
            placeholder="Please enter a descriptiong of your project."
            value={this.state.value}
            />

            <label>Duration:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="duration"
            className="form-control"
            type="text" 
            placeholder="Please enter the duration of your project"
            value={this.props.duration}
            />
            
            <label>Github Link:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="github_link"
            className="form-control"
            type="text" 
            placeholder="Please add the link to your project on Github"
            value={this.props.github}
            />

            <button type="submit" className="btn custom-btn">Submit</button>
          </div>
          </form>
        </div>
        <div className="col-sm-6"></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

    
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProjectForm);