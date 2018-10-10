import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../App.css';
import Header from './Header';
import Footer from '../components/Footer';
import Projects from './Projects';
import ProjectForm from './ProjectForm';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <section className="main-section">
        <Router>
          <div>
            <Header />
            <Route path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/new" component={ProjectForm} />
            <Footer />
          </div>
        </Router>
      </section>
    );
  }
}

export default App;
