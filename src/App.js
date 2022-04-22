import React, { Component } from "react";
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {mode:'light'};
  }
  toggleMode = () =>{
    if(this.state.mode==='light'){
      this.setState({mode:'dark'})
    }else{
      this.setState({mode:'light'})
    }
  }
  render() {
    return <div>
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
      <News />
    </div>;
  }
}

