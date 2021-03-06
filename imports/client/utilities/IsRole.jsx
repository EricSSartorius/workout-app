import React, { PropTypes } from 'react';

const IsRole = ({role, children}) => {
  if(Roles.userIsInRole(Meteor.userId(), role)) {
    return children;
  }
  return null;
}

IsRole.propTypes = {
  role: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default IsRole;
