import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const {
      className,
      placeholder,
      ...rest
    } = this.props;

    return (
      <input className={className} placeholder={placeholder} {...rest} />
    );
  }
}

FormInput.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
