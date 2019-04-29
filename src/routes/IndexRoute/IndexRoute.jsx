import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter, Link } from 'react-router-dom';
import Route from '../../components/Route'
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import './IndexRoute.css';

class IndexRoute extends Component {
  render() {
    const { token } = this.props;

    return (
      <Fragment>
        <div className="header">
          <Link className="link" to="/sign-in">
            Sign In
          </Link>
          <Link className="link" to="/sign-up">
            Sign Up
          </Link>
        </div>
        <Switch>
          <Redirect exact from="/" to={token ? '/contacts' : '/sign-up'} />
          <Route path="/sign-in" component={SignIn} isPublic />
          <Route path="/sign-up" component={SignUp} isPublic />
          <Redirect to="/sign-in" />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ signUp }) => ({
  token: signUp.userData && signUp.userData.token,
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(IndexRoute);
