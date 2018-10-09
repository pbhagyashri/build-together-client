import React, { Component } from 'react'

class Projects extends Component {

  componentDidMount() {
    window.scroll({
      top: 450,
      behavior: "smooth"
    })
  }
  
  render() {
    return (
      <section className="project-section">
        All Projects Go here
      </section>
    )
  }
}

export default Projects;