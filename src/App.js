import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Layout from './components/Layout/Layout';
import Routing from './components/Routing/Routing';

class App extends Component {

  render() {
    return (
      <div>
        <Layout />
        <Switch>
          <Route path="/routing" component={Routing} />
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Route path="*" render={(props) => <NoMatch {...props} />}>
          </Route>
          <Redirect from="/all-courses" to="/courses" />
        </Switch>
      </div>
    );
  }
}

function NoMatch(props) {
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
