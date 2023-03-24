import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './common/AppHeader';
// import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import AllUserComponent from './components/AllUserComponent';

import ProfileComponent from './components/ProfileComponent';


import AddUserComponent from './components/AddUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import AppFooter from './common/AppFooter';


function App() {
  return (
    <div className='app'>
      <Router>
        <div className='app-top-box'>
        <AppHeader />
        <br></br>
        </div>
        <div className= "app-body" >
          <br></br>
          <Switch>
              <Route exact path = "/" component = {ListUserComponent}></Route>
              <Route path = "/users" component = {ListUserComponent}></Route>
              <Route path = "/allusers" component = {AllUserComponent}></Route>

              <Route path = "/profile" component = {ProfileComponent}></Route>


              <Route path = "/add-user" component = {AddUserComponent} ></Route>
              <Route path = "/edit-user/:id" component = {AddUserComponent}></Route>
              <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
            </Switch>
            <br></br>
        </div>

        <AppFooter />
        </Router>
    </div>
  );
}

export default App;
