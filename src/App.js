import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Admin from './components/admin'
import Signup from './components/signup'
import Login from './components/login'
import Rankadd from './components/rankadd'
import View from './components/view'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import Userview from './components/userview'
import Welcome from './components/welcome'
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
       <Landing/>
    </Route>
    <Route  path="/login">
       <Login/>
    </Route>
    <Route  path="/admin">
       <Admin/>
    </Route>
    <Route  path="/signup">
       <Signup/>
    </Route>
    
    <Route  path="/add-hacker">
       <Rankadd/>
    </Route>
    <Route  path="/view-hacker">
       <View/>
    </Route>
    <Route  path="/dashboard">
       <Dashboard/>
    </Route>
    <Route  path="/userview">
       <Userview/>
    </Route>
    <Route  path="/welcome">
       <Welcome/>
    </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
