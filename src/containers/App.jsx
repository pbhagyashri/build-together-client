import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import Footer from '../components/Footer'
import people from '../people.jpg'

class App extends Component {
  render() {
    return (
      <section className="main-section">
        
        <Header />
  
        <Footer />
      </section>
    );
  }
}

export default App;
