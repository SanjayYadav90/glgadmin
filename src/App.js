import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/styles/index.scss';
import './assets/scripts/index'

import Header from './Pages/Common/Header';
import Footer from './Pages/Common/Footer';
import SideNav from './Pages/Common/SideNav';
import Home from './Pages/Statics/Home';
import About from './Pages/Statics/About';
import Contact from './Pages/Statics/Contact';
import User from './Pages/users/user';
import Show from './Pages/users/show';
import Edit from './Pages/users/Edit';
import New from './Pages/users/new';

const Routing = props => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={User} />
      <Route path="/user/new" component={New} />
      <Route path="/user/:id/edit" component={Edit} />
      <Route path="/user/:id" component={Show} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <SideNav/>
        <div className="page-container">
          <Header />
          <Routing/>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
