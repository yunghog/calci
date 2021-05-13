import React from 'react'
import '../../assets/css/style.css'
import UpdatedCounter from './updatedCounter'

class Counter2 extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        <div className="counter-con">
          <div className="counter">
          <div className="count bg-gradient" onMouseOver={this.props.incr}>{this.props.count}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default UpdatedCounter(Counter2)
