import { Meteor } from 'meteor/meteor';

import '../imports/api/Workouts';
import '../imports/server/accounts';

Meteor.publish('currentUser', function() {
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      roles: 1
    }
  });
});

Meteor.startup(() => {
  // code to run on server at startup
});
