import React from 'react'
import TaskList from './tasks/TaskList'
import CreateTasks from './tasks/CreateTasks'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/create-tasks" component={CreateTasks} />
                <Route exact path="/view-tasks" component={TaskList} />
            </Switch>
        </Router>
    )
}

export default App
