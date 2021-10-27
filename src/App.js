
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './Shares/Header/Header';
import Donation from './pages/Donation/Donation';
import Events from './pages/Events/Events';
import Blog from './pages/Blog/Blog';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/donation'>
          <Donation></Donation>
        </Route>
        <Route path='/events'>
          <Events></Events>
        </Route>
        <Route path='blog'>
          <Blog></Blog>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
