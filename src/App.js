import React, { Component } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  static defaultProps = {
    country: 'in',
    category:'general',
  }
  constructor() {
    super();
    this.state = {mode:'dark'};
  }
  render() {
    return (
      <Router>
        <div> 
        <Navbar mode={this.state.mode}/>  
      <Routes>
    <Route exact path="/" element={<News key="general" country='in' category='general' />} />
    <Route exact path="/sports" element={<News key="sports" country='in' category='sports' />} />
    <Route exact path="/science" element={<News key="science" country='in' category='science' />} />
    <Route exact path="/business" element={<News key="business" country='in' category='business' />} />
    <Route exact path="/technology" element={<News key="technolog" country='in' category='technology' />} />
    <Route exact path="/entertainment" element={<News key="entertainment" country='in' category='entertainment' />} />
    <Route exact path="/health" element={<News key="health" country='in' category='health' />} />
      </Routes>
      </div>
      </Router>)
  }
}

