import React from 'react';
import { connect } from 'react-redux';

import { firebase, db } from '../../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser, user } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.getUserObject(authUser.uid).then(snapshot => user(snapshot.val()))
          onSetAuthUser(authUser);
        }
        else {
          onSetAuthUser(null);
          user(null);
        }
      });


    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    user: (user) => dispatch({type: 'USER_CONNECT', user}),
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;