import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import TaskList from './tasks/TaskList'
import CreateTasks from './tasks/CreateTasks'

import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <ToastProvider>
            <Router>
                <Switch>
                    <Route exact path="/create-tasks" component={CreateTasks} />
                    <Route exact path="/view-tasks" component={TaskList} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/" component={SignIn} />
                </Switch>
            </Router>
        </ToastProvider>
    )
}

export default App
