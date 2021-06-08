import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import './css/app.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './pages/Home/Home'
import Login from './pages/Login/login'

function App() {
    return (
        <div className="App row">
            <Router>
                {
                    localStorage.getItem('token') ? (
                        <Redirect to="/home" />
                    ) : (
                        null
                    )
                }
                <Switch>
                    <Route exact path="/" component={Login} />
                    <ProtectedRoute path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
