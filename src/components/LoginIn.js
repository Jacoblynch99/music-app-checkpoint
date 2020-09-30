import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { Grid } from '@material-ui/core'
import SomeComponent from './SomeComponent'

class LoginIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            username: '',
            password: '',
        }
    }

    onInput = (event) => {
        event.target.name === 'username'
            ? this.setState({ username: event.target.value })
            : this.setState({ password: event.target.value })
    }

    Validate = (event) => {
        if (
            this.state.username === 'hello' &&
            this.state.password === 'world'
        ) {
            this.setState({ loggedIn: true })
        } else {
            alert('username: hello, password: world')
        }
    }

    render() {
        return this.state.loggedIn ? (
            <SomeComponent />
        ) : (
            <form style={{ marginTop: 10 }}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            required
                            id="standard-basic"
                            label="Username"
                            onKeyUp={this.onInput}
                            name="username"
                            style={{ marginTop: 10, width: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-basic"
                            label="Password"
                            type="password"
                            onKeyUp={this.onInput}
                            name="password"
                            style={{ marginTop: 10, width: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={this.Validate}
                            style={{ marginTop: 10, width: 150 }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default LoginIn
