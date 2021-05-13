import React from 'react'
import '../../assets/css/style.css'
import UpdatedCounter from './updatedCounter'
class Counter1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div>
        <div className="counter-con">
          <div className="counter">
            <div className="count bg-gradient">
              <button className="btn btn1" onClick={this.props.dcr}>-</button>
              {this.props.count}
              <button className="btn btn2" onClick={this.props.incr}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UpdatedCounter(Counter1)
