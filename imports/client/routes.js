import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
 } from 'react-router';
import { render } from 'react-dom';

import MainLayout from './layouts/MainLayout';
import App from './App';
import WorkoutForm from './pages/WorkoutForm';
import ExerciseForm from './pages/ExerciseForm';
import Timer from './pages//Timer';
import NotFound from './pages/NotFound';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={App} />
        <Route path='/workout' component={WorkoutForm} />
        <Route path='/exercise' component={ExerciseForm} />
        <Route path='/timer' component={Timer} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
