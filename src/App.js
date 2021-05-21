import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Calci from './pages/calci'
import Hocmain from  './pages/hocdemo/hocmain'
import Employee from './pages/employee/'
function App() {
  return (
    <div>
    <NavBar/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/calci" component={Calci}/>
        <Route exact path="/hoc" component={Hocmain}/>
        <Route exact path="/employee" component={Employee}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
