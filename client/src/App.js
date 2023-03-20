import './App.css';
import Navbar from './components/Navbar'
import "./App.css";
import Products from './pages/Products';

import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
function App() {
  return (
    <Router>
    <div>
      <Navbar/>

     <div id='content' > 
      <Switch>
        <Route path="/" exact component={Products}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>

        
      </Switch>
      </div>
    </div>
  </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;
