import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route as OriginalRoute, Redirect, withRouter } from 'react-router-dom';

class Route extends PureComponent {
  static propTypes = {
    layout: PropTypes.func,
    disabledScroll: PropTypes.bool,
    location: PropTypes.object.isRequired,
    isPublic: PropTypes.bool,
    isPrivate: PropTypes.bool,
    token: PropTypes.string,
  };

  static defaultProps = {
    isPublic: false,
    isPrivate: false,
    token: null,
  };

  render() {
    const {
      isPublic,
      isPrivate,
      token,
      ...props
    } = this.props;

    if (isPublic && token) {
      return <Redirect to="/contacts" />;
    }

    if (isPrivate && !token) {
      return <Redirect to="/sign-in" />;
    }

    return (
      <OriginalRoute {...props} />
    );
  }
}

export default withRouter(Route);
