import React, {Component} from 'react';
import { fetchProjects } from '../actions/projectActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Project from '../components/Project';

class Projects extends Component {

  componentDidMount() {

    this.props.fetchProjects()

    window.scroll({
      top: 650,
      behavior: "smooth"
    })
  }
  
  render() {
    const { projects } = this.props
   
    return (
      <section className="project-section">
        { projects.length > 0 ?
          projects.map((project) => <Project project={project} key={project.id} />) : <p>Not Found</p>
        }
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchProjects:  fetchProjects,
  }, dispatch);
};


const mapStateToProps = ({auth}) => {
  return {
    projects: auth.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

