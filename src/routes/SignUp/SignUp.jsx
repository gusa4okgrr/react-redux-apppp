import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators } from '../../redux/actions/signUp';
import './SignUp.css';

class SignUp extends Component {

  onSubmit = (values) => {
    this.props.signUp(values);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      invalid,
      error,
    } = this.props;

    return (
      <form className="form-page" onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="firstName"
          type="text"
          className="form-input"
          placeholder="First Name"
          component="input"
        />
        <Field
          name="lastName"
          type="text"
          className="form-input"
          placeholder="Last Name"                 
          component="input"
        />
        <Field
          name="email"
          type="email"
          className="form-input"   
          placeholder="Email"                 
          component="input"
        />
        <Field
          name="password"
          type="password"
          className="form-input"
          placeholder="Password"                 
          component="input"
        />
        <button
          className="form-button-sign-up"
          type="submit"
          disabled={pristine || invalid}
        >
          Create Account
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signUp: actionCreators.signUp,
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'signUpForm',
    // validate,
  }),
)(SignUp);
