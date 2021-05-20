import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Calci from './pages/calci'
import Hocmain from  './pages/hocdemo/hocmain'
function App() {
  return (
    <div>
    <NavBar/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/calci" component={Calci}/>
        <Route exact path="/hoc" component={Hocmain}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
