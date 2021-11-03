import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../misc/history'
import Home from './pages/Home'
import Timer from './pages/Timer'


const App = () => {
    return (
        <div className="app-container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/timer" exact component={Timer}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App