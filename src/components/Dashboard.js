import React, {useState} from 'react';
import { Grid, Typography, Card, Switch, Slider, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    paddingTop: 50, 
    paddingLeft: 200
  },
  card: {
    maxWidth: 300, 
    height: 200, 
    paddingLeft: 15, 
    paddingTop:20
  },
  slider: {
    width: 250, 
    marginLeft: 20, 
    paddingTop:30
  },
  select: {
    width: 250, 
    marginLeft: 10, 
    paddingTop:20
  },
  firstType: {
    paddingTop:10
  },
  secondType: {
    paddingTop:20
  },
  firstGrid: {
    paddingTop: 10
  },
  secondGrid: {
    paddingTop:50
  }
});

export default function Dashboard() {

   const classes = useStyles();

  const [selectValue, setSelect] = useState('')
  const [volumeValue, setVolume] = useState('')
  const [checkedValue, setSwitch] = useState({
    isChecked: true
  })


  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }

  const handleVolumeChange = ( event, newValue) => {
    setVolume(newValue)
    console.log(newValue)
  }

  const handleSwitchChange = ( event ) => {
    setSwitch({ ...checkedValue, [event.target.name]: event.target.checked })
  }


  return (
    <Grid container direction="column" justify="center" alignItems="baseline" spacing={3} className={classes.firstGrid}>
      <Typography variant="h4" className={classes.text}>
        Welcome User!
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.secondGrid}>  
        <Grid item>
          <Card className={classes.card}>
            <Typography variant="h5" className={classes.firstType}>
              Online Mode
            </Typography>
            <Typography variant="subtitle1" className={classes.secondType}>
              Is this application connected to the internet?
            </Typography>
            <Switch checked={checkedValue.isChecked} name="isChecked" onChange={handleSwitchChange}/>
          </Card>
        </Grid>
        <Grid item >
          <Card className={classes.card}>
            <Typography variant="h5" className={classes.firstType}>
              Master Volume
            </Typography>
            <Typography variant="subtitle1" className={classes.secondType}>
              Overrides all other sound settings in the application.
            </Typography>
            <Slider
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
              className={classes.slider}
              onChange={handleVolumeChange}
            />
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <Typography variant="h5" className={classes.firstType}>
              Sound Quality
            </Typography>
            <Typography variant="subtitle1" className={classes.secondType}>
              Manually control the music quality in event of poor connection.
            </Typography>
            <Select onChange={handleSelectChange} value={selectValue} className={classes.select}>
              <MenuItem value={'High'}>
                High
              </MenuItem>
              <MenuItem value={'Medium'}>
                Medium
              </MenuItem>
              <MenuItem value={'Low'}>
                Low
              </MenuItem>
            </Select>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h4" color="initial" className={classes.text}>
        Comments?
      </Typography>
    </Grid>
  )
}



 