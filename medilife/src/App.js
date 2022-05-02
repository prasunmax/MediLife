import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import LoginComponent from './component/LoginComponent';

// import AdminLoginComponent from './component/AdminLoginComponent';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import SignupComponent from './component/SignupComponent';
import MedicineListComponent from './component/MedicineListComponent';


class App extends Component {
  constructor(props) {
    super(props)
    this.state={}

   
   }
   
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent></HeaderComponent>
          <Switch>
            
            <Route path="/" exact component={HomeComponent} />
            <Route path="/about" component={AboutComponent}></Route>
            <Route path="/contact" component={ContactComponent} ></Route>
            <Route path="/medicine-list" component={MedicineListComponent}></Route>

            <Route path="/user-login" component={LoginComponent}></Route>
            {/* <Route path="/admin-login" component={AdminLoginComponent}></Route> */}
            <Route path="/user-signup" component={SignupComponent}></Route>
          </Switch>
          <FooterComponent />
        </Router>
      </div>


    );
  }
}

export default App;
