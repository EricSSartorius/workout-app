import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Workouts } from '../api/workouts';
import Workout from './Workout';
import WorkoutForm from './pages/WorkoutForm';
import AccountsUIWrapper from './AccountsUIWrapper';

class App extends Component {

  render() {
    return (
      <div>
        <AccountsUIWrapper />
        <h1>APP</h1>
      </div>
    );
  }
}

App.propTypes = {

};


const ExerciseRoute = () => (
  <div>
    <h1>Exercises</h1>
    {/* <h3>Incomplete Exercises: ({this.props.incompleteCount})</h3>
    <label className="hide-completed">
      <input
        type="checkbox"
        readOnly
        checked={this.state.hideCompleted}
        onClick={this.toggleState.bind(this, 'hideCompleted')}
      />
      Hide Completed Workouts
    </label> */}
</div>
)








export default createContainer(() => {
  Meteor.subscribe('workouts');

  return {
    // workouts: Workouts.find({}, { sort: { createdAt: -1 } }).fetch(),
    // incompleteCount: Workouts.find({ checked: { $ne: true } }).count(),
    // currentUser: Meteor.user(),
  };
}, App);
