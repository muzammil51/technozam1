import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { getCurrentUser, login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
        this.setState
    }
    
    render() {
        if(this.props.authenticated) {
            
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location}
                
            }}/>;            
        }

        return (
            
            <div class='login-container row d-flex justify-content-center align-items-center h-900'>

<div class="col-md-2 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"></img>
      </div>

                <div className="login-content col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <h1 className="login-title">Good To See You! <h2>Login to continue.</h2> </h1>

                    <p className='h8'>Login with:</p>

                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    
    render() {
        return (
            <div>
                <a className="google" href={GOOGLE_AUTH_URL} >
                    <img src={googleLogo} style={{height:"75px", marginRight:"50px"}} alt="Google" /></a>
                <a className="facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} style={{height:"60px",marginRight:"50px"}} alt="Facebook" /> </a>
                <a className="github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} style={{height:"60px"}} alt="Github" /></a>
            </div>
            
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");

            // this.props.history.push("/");
            window.location.reload("/");

        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password (must be 8 characters long)"
                        value={this.state.password} onChange={this.handleInputChange} 
                        pattern="(?=.*).{8,}" required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>                    
        );
    }
}

export default Login
