import React from 'react'
import {Form,FieldGroup,Checkbox,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  onSubmit(e){
    this.props.onLogin(this.state.email,this.state.password);
    e.preventDefault();
  }

  handleEmailInput(e){
    this.setState({'email':e.target.value})
  }

  handlePasswordInput(e){
    this.setState({'password':e.target.value})
  }

  render(){
    return(
      <div className="limiter">
        <div className="container-login100" style={{background:"blue"}}>
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>
    
              <span className="login100-form-title p-b-34 p-t-27">
                Log in
              </span>
    
              <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input className="input100" type="text" name="username" placeholder="Username"></input>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>
    
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password"></input>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
    
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
                <label className="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>
    
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Login
                </button>
              </div>
    
              <div className="text-center p-t-90">
                <a className="txt1" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}




