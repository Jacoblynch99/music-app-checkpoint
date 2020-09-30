import React from 'react'
import { Switch, Route } from 'react-router'
import LoginIn from './components/LoginIn'
import Dashboard from './components/Dashboard'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginIn} />
            <Route path="/dash" component={Dashboard} />
        </Switch>
    )
}

export default Router
