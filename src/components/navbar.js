import React, { Component } from "react";
import '../assets/css/style.css';
class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  switchTheme=()=>{
    if(document.body.getAttribute("data-theme")==="light"){
      document.body.setAttribute("data-theme","dark");
    }
    else{
      document.body.setAttribute("data-theme","light");
    }
  }
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <div className="nav-con">
          <div className="nav">
              <li id="nav_home">
                <a href="/">Home</a>
              </li>
              <li id="nav_calculator">
                <a href="/calci">Calculator</a>
              </li>
              <li id="nav_hoc">
                <a href="/hoc">HOC</a>
              </li>
              <li id="nav_employee">
                <a href="/employee">Employees</a>
              </li>

          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
