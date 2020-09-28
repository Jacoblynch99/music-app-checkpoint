import React, {Component} from 'react'
import { Container } from '@material-ui/core';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Container fixed>
        <h1>
          Welcome
        </h1>
      </Container>
    );
  }
}
 
export default Dashboard;