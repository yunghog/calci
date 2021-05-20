import React, { Component } from "react";
import '../assets/css/style.css';
class Calci extends Component {
  constructor(props){
    super(props);
    this.state={
      res:"",
      exp:""
    }
    this.setres = this.setres.bind(this);
    this.myfunc = this.myfunc.bind(this);
    this.disp = this.disp.bind(this);
    this.allClear = this.allClear.bind(this);
    this.check = this.check.bind(this);
  }
  setres(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  componentDidMount(){
    document.getElementById("nav_calculator").classList.add("active");
  }
  myfunc(){
    try{
      var ans=eval(this.state.res);
      this.setState({
        exp:this.state.res,
        res:ans
      })
    }
    catch(e){
      // alert(e);
      this.setState({
        exp:e.message
      })
      // setInterval(function (){} , 2000);
      // this.allClear();
    }}
  disp(x){
    var exp=this.state.res+x;
    this.setState({
      res:exp
    })
  }
  allClear(){
    this.setState({
      res:"",
      exp:""
    })
  }
  check(){
    var exp=this.state.res.slice(0,-1);
      this.setState({
        res:exp
      })
  }
  render() {
    return (
      <div style={{textAlign:'center'}}>
      <div className="calc-con">
        <h1>Calculator</h1>
        <div className="calc">
          <div className="display">
            <input className="bg-gradient in-exp" name="exp" value={this.state.exp} readOnly></input>
            <input className="bg-gradient in-res" name="res" onChange={this.setres} value={this.state.res}></input>
          </div>
          <div className="buttons-con">
            <div className="buttons-row">
              <button className="btn btn-calc-op" style={{color:'rgba(242,147,113,1)'}} onClick={this.allClear}>AC</button>
              <button className="btn btn-calc-op" onClick={this.check}>DEL</button>
              <button className="btn btn-calc-op" onClick={(e) => this.disp('%', e)}>%</button>
              <button className="btn btn-calc-op"  onClick={(e) => this.disp('/', e)}>/</button>
            </div>
            <div className="buttons-row">
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('7', e)}>7</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('8', e)}>8</button>
              <button className="btn btn-calc-num" onClick={(e) => this.disp('9', e)}>9</button>
              <button className="btn btn-calc-op"  onClick={(e) => this.disp('*', e)}>*</button>
            </div>
            <div className="buttons-row">
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('4', e)}>4</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('5', e)}>5</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('6', e)}>6</button>
              <button className="btn btn-calc-op"  onClick={(e) => this.disp('-', e)}>-</button>
            </div>
            <div className="buttons-row">
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('1', e)}>1</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('2', e)}>2</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('3', e)}>3</button>
              <button className="btn btn-calc-op plus"  onClick={(e) => this.disp('+', e)}>+</button>
            </div>
            <div className="buttons-row">
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('0', e)}>0</button>
              <button className="btn btn-calc-num"  onClick={(e) => this.disp('.', e)}>.</button>
              <button className="btn btn-calc-op bg-gradient" onClick={this.myfunc}>=</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Calci;
