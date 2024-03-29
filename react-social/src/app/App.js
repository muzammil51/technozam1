import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import Home from '../home/Home';

import Shortqs from '../home/Shortqs';
import Mcqsqs from '../home/Mcqsqs';
import Fillblankqs from '../home/Fillblankqs';
import Truefalseqs from '../home/Truefalseqs';
import Matchingqs from '../home/Matchingqs';
import Notesqs from '../home/Notesqs';


import Shortqsnew from '../home/Shortqsnew';
import Mcqsqsnew from '../home/Mcqsqsnew';
import Fillblankqsnew from '../home/Fillblankqsnew';
import Truefalseqsnew from '../home/Truefalseqsnew';
import Matchingqsnew from '../home/Matchingqsnew';
import Notesqsnew from '../home/Notesqsnew';

import Tutorialex from '../home/Tutorialex';


import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';

import Profile from '../user/profile/Profile';
import Profilenew from '../user/profile/Profilenew';

import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getAllUser, getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.loadAllUser = this.loadAllUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });


      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }


  loadAllUser() {
    getAllUser()
      .then(response => {
        this.setState({
          allUser: response,
          loading: false
        });

      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }



  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.warning("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
    this.loadAllUser();

  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated}  handleLogin={this.loadCurrentlyLoggedInUser} onLogout={this.handleLogout} currentUser={this.state.currentUser} />
          <br></br>
        </div>
        <div className="app-body">
          <br></br>
          <Switch>
          
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/" render={(props) => <Home handleLogin= {this.state.currentUser} />}></Route> */}
            {/* <Route exact path="/"  render={(props) => <Home handleLogin={this.loadCurrentlyLoggedInUser} />}></Route> */}
            <Route exact path="/home" component={Home}></Route>

            <Route exact path="/shortqs" component={Shortqs}></Route>
            <Route exact path="/mcqsqs" component={Mcqsqs}></Route>
            <Route exact path="/fillblankqs" component={Fillblankqs}></Route>
            <Route exact path="/truefalseqs" component={Truefalseqs}></Route>
            <Route exact path="/matchingqs" component={Matchingqs}></Route>
            <Route exact path="/notesqs" component={Notesqs}></Route>

            <Route exact path="/tutorial" component={Tutorialex}></Route>


            <PrivateRoute path="/shortqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Shortqsnew}></PrivateRoute>

            <PrivateRoute path="/mcqsqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Mcqsqsnew}></PrivateRoute>
            <PrivateRoute path="/fillblankqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Fillblankqsnew}></PrivateRoute>
            <PrivateRoute path="/truefalseqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Truefalseqsnew}></PrivateRoute>
            <PrivateRoute path="/matchingqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Matchingqsnew}></PrivateRoute>
            <PrivateRoute path="/notesqsnew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Notesqsnew}></PrivateRoute>


            <Route exact path="/home#about" component={Home.about}></Route>


            <PrivateRoute path="/profile" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Profile}></PrivateRoute>
              
            <PrivateRoute path="/profilenew" authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} allUser={this.state.allUser}
              component={Profilenew}></PrivateRoute>

            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>

            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>

            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <br></br>

        </div>
        <Alert stack={{ limit: 1 }}
          timeout={3000}
          position='top-left' effect='slide' offset={65} />

        <AppFooter authenticated={this.state.authenticated} onLogout={this.handleLogout} currentUser={this.state.currentUser} /></div>



    );
  }
}

export default App;
