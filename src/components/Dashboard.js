import React, { useState } from 'react'
import {
    Grid,
    Typography,
    Card,
    Switch,
    Slider,
    Select,
    MenuItem,
    CardContent,
    CardActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Text from './Text'

const useStyles = makeStyles({
    text: {
        paddingTop: 50,
        paddingLeft: 200,
    },
    card: {
        maxWidth: 300,
        height: 200,
        paddingLeft: 15,
        paddingTop: 20,
    },
    slider: {
        width: 250,
        marginLeft: 20,
        paddingTop: 30,
    },
    select: {
        width: 250,
        marginLeft: 10,
        paddingTop: 20,
    },
    firstType: {
        paddingTop: 10,
    },
    secondType: {
        paddingTop: 20,
    },
    firstGrid: {
        paddingTop: 10,
    },
    secondGrid: {
        paddingTop: 50,
    },
})

export default function Dashboard() {
    const classes = useStyles()

    const [selectValue, setSelect] = useState('')
    const [volumeValue, setVolume] = useState('')
    const [checkedValue, setSwitch] = useState({
        isChecked: true,
    })
    const [notifications, setNotifications] = useState({
        switch: '',
        sound: '',
        select: '',
    })

    const handleSelectChange = (event) => {
        setSelect(event.target.value)
        if (event.target.value === 'Low') {
            setNotifications({
                ...notifications,
                select:
                    'Music quality is degraded. Increase quality if your connection allows it.',
            })
        } else {
            setNotifications({ ...notifications, select: '' })
        }
    }

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue)
        if (newValue > 79) {
            setNotifications({
                ...notifications,
                sound:
                    'Listening to music at a high volume could cause long-term hearing loss.',
            })
        } else {
            setNotifications({ ...notifications, sound: '' })
        }
    }

    const handleSwitchChange = (event) => {
        setSwitch({
            ...checkedValue,
            [event.target.name]: event.target.checked,
        })
        if (!event.target.checked) {
            setNotifications({
                ...notifications,
                switch:
                    "Your application is offline. You won't be able to share or stream music to other devices.",
            })
        } else {
            setNotifications({ ...notifications, switch: '' })
        }
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="baseline"
            spacing={3}
            className={classes.firstGrid}
        >
            <Typography variant="h4" className={classes.text}>
                Welcome User!
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.secondGrid}
            >
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5">Online Mode</Typography>
                            <Typography variant="subtitle1">
                                Is this application connected to the internet?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Switch
                                checked={checkedValue.isChecked}
                                name="isChecked"
                                onChange={handleSwitchChange}
                            />
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5">Master Volume</Typography>
                            <Typography variant="subtitle1">
                                Overrides all other sound settings in the
                                application.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Slider
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={0}
                                max={100}
                                onChange={handleVolumeChange}
                            />
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5">Sound Quality</Typography>
                            <Typography variant="subtitle1">
                                Manually control the music quality in event of
                                poor connection.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Select
                                onChange={handleSelectChange}
                                value={selectValue}
                            >
                                <MenuItem value={'High'}>High</MenuItem>
                                <MenuItem value={'Medium'}>Medium</MenuItem>
                                <MenuItem value={'Low'}>Low</MenuItem>
                            </Select>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="h4" color="initial" className={classes.text}>
                System Notifications:
                <Text
                    switch={notifications.switch}
                    sound={notifications.sound}
                    select={notifications.select}
                />
            </Typography>
        </Grid>
    )
}
