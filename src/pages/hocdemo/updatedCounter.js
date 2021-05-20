import React from 'react'

const UpdatedCounter = (Counter) => {
  class NewCounter extends React.Component{
    constructor(props){
      super(props)
      this.state={
        count: 0
      }
    }
    incr = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    dcr = () => {
      this.setState({
        count: this.state.count-1
      })
    }
    render(){
      return(
          <Counter count={this.state.count} incr={this.incr} dcr={this.dcr}/>
      )
    }
  }
  return NewCounter
}
export default UpdatedCounter
