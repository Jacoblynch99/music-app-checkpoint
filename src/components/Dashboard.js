import React, {Component} from 'react'
import { Grid, Typography, Card, Switch, Slider, Select, MenuItem } from '@material-ui/core';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isChecked : false,
      selectValue : 'Medium',
      volumeValue : 40
    }
  }

  handleSelectChange = (event) => {
    this.setState({selectValue: event.target.value})
  }

  handleVolumeChange = ( event, newValue) => {
    this.setState({volumeValue: newValue})
  }

  handleSwitchChange = () => {
    this.setState({isChecked: this.state.isChecked === false ? true : false})
  }
  
  render() { 
    return (  
      <Grid container direction="column" justify="center" alignItems="center" spacing={3} style={{ paddingTop: 10}}>
        <Typography variant="h4">
          Welcome User!
        </Typography>

        <Grid container direction="row" justify="center" alignItems="center" spacing={2} style={{ paddingTop:100}}>  
          <Grid item>
            <Card style={{ maxWidth: 300, height: 200, paddingLeft: 15, paddingTop:20}}>
              <Typography variant="h5" style={{ paddingTop:10}}>
                Online Mode
              </Typography>
              <Typography variant="subtitle1" style={{ paddingTop:20}}>
                Is this application connected to the internet?
              </Typography>
              <Switch checked={this.state.isChecked} onChange={this.handleSwitchChange}/>
            </Card>
          </Grid>
          <Grid item >
            <Card style={{ maxWidth: 300, height: 200, paddingLeft: 15, paddingTop:20}}>
              <Typography variant="h5" style={{ paddingTop:10}}>
                Master Volume
              </Typography>
              <Typography variant="subtitle1" style={{ paddingTop:20}}>
                Overrides all other sound settings in the application.
              </Typography>
              <Slider
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                style={{ width: 250, marginLeft: 20, paddingTop:30}}
                value={this.state.volumeValue}
                onChange={this.handleVolumeChange}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 300, height: 200, paddingLeft: 15, paddingTop:20}}>
              <Typography variant="h5" style={{ paddingTop:10}}>
                Sound Quality
              </Typography>
              <Typography variant="subtitle1" style={{ paddingTop:20}}>
                Manually control the music quality in event of poor connection.
              </Typography>
              <Select onChange={this.handleSelectChange} value={this.state.selectValue} style={{ width: 250, marginLeft: 10, paddingTop:20}}>
                <MenuItem value={'High'}>High</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'Low'}>Low</MenuItem>
              </Select>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
 
export default Dashboard;