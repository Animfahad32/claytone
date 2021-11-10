import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Home from './components/Home/Home';
import NotFound404 from './components/NotFound404/NotFound404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/allproducts">
            <AllProducts></AllProducts>
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
