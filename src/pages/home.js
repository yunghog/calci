import React, { Component } from "react";
import '../assets/css/style.css';
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
    document.getElementById("nav_home").classList.add("active");
  }
  render() {
    return (
      <div style={{textAlign:'center'}}>
        hello world
      </div>
    );
  }
}

export default Home;
