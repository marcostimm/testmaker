import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
          console.log('You need to login to access this page')
        // this.props.addFlashMessage({
        //   type: 'error',
        //   text: 'You need to login to access this page'
        // });
        this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // addFlashMessage: PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { })(Authenticate);
}