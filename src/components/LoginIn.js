import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Dashboard from './Dashboard'
import { Grid } from '@material-ui/core';


class LoginIn extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  onInput = (event) => {
    event.target.name === 'username' ? this.setState({username: event.target.value}) : this.setState({password: event.target.value})
  }

  Validate = (event) => {
    if (this.state.username === "hello" && this.state.password === "world") {
      this.setState({loggedIn: true})
    } else {
      alert('username: hello, password: world')
    }
  }

  render() { 
      return this.state.loggedIn ? <Dashboard/> : ( 
        <form style={{marginTop: 10}}>
          <Grid container spacing={2} direction="column" justify="center" alignItems="center">
            <Grid item>
              <TextField required id="standard-basic" label="Username" onKeyUp={this.onInput} name='username'/>
            </Grid>
            <Grid item>
              <TextField required id="standard-basic" label="Password" onKeyUp={this.onInput} name='password'/>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="medium" onClick={this.Validate} style={{marginTop: 10, width: 150}}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
       );
    }
  }

 
export default LoginIn;



