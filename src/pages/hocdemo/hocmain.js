import React from 'react'
import '../../assets/css/style.css'

import Counter1 from './counter1'
import Counter2 from './counter2'

class Hocmain extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }

  }
  componentDidMount(){
    document.getElementById('nav_hoc').classList.add('active');
  }
  render(){
    return(
      <div>
        <div className="hoc-con">
          <h3>Higher Order Component demonstration</h3>
          <div className="hoc">
            <Counter1/>
            <Counter2/>
          </div>
        </div>
      </div>
    )
  }
}
export default Hocmain
