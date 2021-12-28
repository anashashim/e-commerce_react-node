import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>              
          <Route path="/" exact component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/orders" component={Orders}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
