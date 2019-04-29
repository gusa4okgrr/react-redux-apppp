import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators } from '../../redux/actions/signIn';
import './SignIn.css';

class SignIn extends Component {
  onSubmit = (values) => {
    this.props.signIn(values);
  }

  render() {
    const { handleSubmit, pristine } = this.props;

    return (
      <form className="form-page" onSubmit={handleSubmit(this.onSubmit)}>
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
          className="form-button"
          type="submit"
          disabled={pristine}
        >
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signIn: actionCreators.signIn,
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'signInForm',
    // validate,
  }),
)(SignIn);
