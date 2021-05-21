import React  from 'react'
import Axios from 'axios'
import '../../assets/css/style.css'
import {FaUser,FaPhone,FaEnvelope,FaMapMarkerAlt,FaTrash} from 'react-icons/fa'
class Employee extends React.Component{
  constructor(props){
    super(props)
    this.state={
      allEmployees:'',
      selectedEmployee: '',
      name: '',
      email: '',
      phno: '',
      designation: '',
      address:''
    }
  }
  getEmployees=()=>{
    Axios.get('https://rest-sample-75a7b-default-rtdb.firebaseio.com/employees.json').then(res=>{
      const fetchedData = []
      for(let key in res.data){
        fetchedData.push({...res.data[key],_id:key})
      }
      this.setState({
        allEmployees: fetchedData,
        selectedEmployee: fetchedData[0]
      })
    })
  }
  insertEmployee=()=>{
    var data = JSON.stringify({
      "id": "-",
      "address": this.state.address,
      "designation": this.state.designation,
      "email": this.state.email,
      "name": this.state.name,
      "phno": this.state.phno
    });
      const url = 'https://rest-sample-75a7b-default-rtdb.firebaseio.com/employees.json'
    Axios.post(url,data)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  displayEmployee=(id)=>{
    const all = this.state.allEmployees;
    const emp = all.filter(function(x){return x._id===id})[0];
    this.setState({
      selectedEmployee: emp
    })
  }
  deleteEmployee=(id)=>{
    const url = "https://rest-sample-75a7b-default-rtdb.firebaseio.com/employees/"+id+".json".replace(' ','')
      Axios.delete(url).then(res=>{
        console.log(res);
    });
    this.getEmployees();
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidMount(){
    document.getElementById('nav_employee').classList.add('active')
    this.getEmployees()
  }
  render(){
    const allEmployees = this.state.allEmployees
    const selectedEmployee = this.state.selectedEmployee
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>Employee Management</h2>
        <div className="employee-con container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
              <div className="display bg-gradient box">
                <div className="row">
                  <div  className="col-3">
                    <FaUser style={{color:"#ddd",backgroundColor:"#eee",padding:"5px",borderRadius:"5px",marginRight:"10px",height:"120px",width:"90px"}}/>
                  </div>
                  <div className="col-8">
                    <h3>{selectedEmployee.name}</h3>
                    <p className="desig">{selectedEmployee.designation}</p>
                    <p><FaPhone/> {selectedEmployee.phno}</p>
                    <p><FaEnvelope/> {selectedEmployee.email}</p>
                    <p><FaMapMarkerAlt/> {selectedEmployee.address}</p>
                  </div>
                </div>
              </div>
              <div className="list box">
                <h3>All Employees</h3>
                {allEmployees && allEmployees.map(e=>
                  <li key={e._id} onClick={(evt) => this.displayEmployee(e._id,evt)}>
                    <FaUser style={{color:"#ddd",backgroundColor:"#eee",padding:"5px",borderRadius:"25px",marginRight:"10px"}} size="30"/>  {e.name}
                      <button className="btn btn-delete" onClick={(d)=>this.deleteEmployee(e._id,d)}><FaTrash/></button>
                  </li>
                )}
              </div>
            </div>
            <div className="col-4">
              <div className="form box">
                <h3>Add new Employee</h3>
                <form>
                  <label>Name</label>
                  <input name="name" onChange={this.handleChange} placeholder="Employee Name" required/>
                  <label>Phone</label>
                  <input name="phno" onChange={this.handleChange} placeholder="Phone Number" required/>
                  <label>Email</label>
                  <input name="email" type="email" onChange={this.handleChange} placeholder="Email ID" required/>
                  <label>Address</label>
                  <input name="address" onChange={this.handleChange} placeholder="Address" required/>
                  <label>Designation</label>
                  <input name="designation" onChange={this.handleChange} placeholder="Designation" required/>
                  <div className="btn-grp">
                    <button className="btn btn-1" onClick={this.insertEmployee}>Submit</button>
                    <button className="btn btn-2" type="reset">Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Employee
