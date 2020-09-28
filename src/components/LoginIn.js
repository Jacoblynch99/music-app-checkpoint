import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Dashboard from './Dashboard'
import { Grid } from '@material-ui/core';


class LoginIn extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      loggedIn: true
    }
  }

  Login = (event) => {
    this.setState({loggedIn: true})
  }

  render() { 
      return this.state.loggedIn ? <Dashboard/> : ( 
        <form className={this.props.className}>
          <Grid container spacing={2} direction="column" justify="center" alignItems="center">
            <Grid item>
              <TextField id="standard-basic" label="Username" className="input-field"/>
            </Grid>
            <Grid item>
              <TextField id="standard-basic" label="Password" className="input-field"/>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="medium" onClick={this.Login} style={{marginTop: 10, width: 150}}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
       );
    }
  }

 
export default LoginIn;



