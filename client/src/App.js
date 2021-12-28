import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Router>
          <Switch>              
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/orders" component={Orders}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
