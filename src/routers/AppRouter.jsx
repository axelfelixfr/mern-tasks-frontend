import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { AuthRouter } from './AuthRouter';
import { ProjectsView } from '../components/projects/ProjectsView';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={AuthRouter} /> */}
        <Route exact path="/projects" component={ProjectsView} />
      </Switch>
    </Router>
  );
};
