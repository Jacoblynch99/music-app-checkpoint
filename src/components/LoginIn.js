import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Dashboard from './Dashboard'


class LoginIn extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      loggedIn: false
    }
  }

  Login = (event) => {
    this.setState({loggedIn: true})
  }

  render() { 
      return this.state.loggedIn ? <Dashboard/> : ( 
        <form className={this.props.className}>
          <TextField id="standard-basic" label="Username" className="input-field"/>
          <TextField id="standard-basic" label="Password" className="input-field"/>
          <Button variant="contained" color="primary" size="medium" onClick={this.Login} style={{marginTop: 10, width: 150}}>
            Login
          </Button>
        </form>
       );
    }
  }

 
export default LoginIn;



