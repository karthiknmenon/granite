import React from 'react'
import TaskList from './tasks/TaskList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/tasks" component={TaskList} />
                <Route path="/tasks/new" component={CreateTasks} />
            </Switch>
        </Router>
    )
}

export default App
