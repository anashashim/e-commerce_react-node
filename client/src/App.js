import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>              
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
