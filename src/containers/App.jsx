import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../App.css';
import Header from './Header';
import Footer from '../components/Footer';
import people from '../people.jpg';
import Projects from './Projects';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <section className="main-section">
        <Router>
          <div>
            <Header />
            <Route path="/projects" component={Projects} />
            <Route path="/login" component={Login} />
            
            <Footer />
          </div>
        </Router>
      </section>
    );
  }
}

export default App;
