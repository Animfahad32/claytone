import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound404 from './components/NotFound404/NotFound404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/allproducts">
            <AllProducts></AllProducts>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound404></NotFound404>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
