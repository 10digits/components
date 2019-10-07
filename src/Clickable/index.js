import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const touch = url => fetch(url, { method: 'HEAD' }).then(response => response.ok);

class Clickable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: this.props.disabled,
      isValidating: this.props.validate,
      isInvalid: false,
    };
    this.props.validate && this.validateLink();
  }

  validateLink = () => {
    if (!this.state.disabled && typeof onClick === 'string') {
      const href = onClick.replace(/^http:/, 'https:'); // upgrade to https
      touch(href).then(isOkay => {
        if (isOkay) {
          this.setState({ isInvalid: false, isValidating: false });
        } else {
          console.warn(
            '[%s]: Link "%s" from "%s" is invalid.',
            new Date().toString(),
            href,
            window.location.href,
          );
          this.setState({ isInvalid: true, isValidating: false });
        }
      });
    }
  };

  get elemProps() {
    const { onClick, className } = this.props;
    const isExternal =
      typeof onClick === 'string' && onClick.indexOf(window.location.hostname) === -1;
    const elemProps = {
      disabled:
        Boolean(this.state.isDisabled) ||
        Boolean(this.state.isInvalid) ||
        Boolean(this.state.isValidating),
      className: classNames([
        'Clickable',
        className,
        {
          'Clickable__is-invalid': this.state.isInvalid,
          'Clickable__is-disabled': this.state.isDisabled,
          'Clickable__is-validating': this.state.isValidating,
          'Clickable__is-external': isExternal,
        },
      ]),
    };

    if (typeof ariaLabel === 'string' && /\w/g.test(ariaLabel)) {
      elemProps['aria-label'] = ariaLabel;
    }

    return elemProps;
  }

  render() {
    const { onClick, children } = this.props;
    switch (typeof onClick) {
      case 'string':
        const isExternal = onClick.indexOf(window.location.hostname) === -1;
        const newTabProps = isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {};
        const href = onClick.replace(/^http:/, 'https:'); // upgrade to https

        return (
          <a href={href} {...this.elemProps} {...newTabProps}>
            {children}
          </a>
        );
      default:
        return (
          <button onClick={onClick} {...this.elemProps} type="button">
            {children}
          </button>
        );
    }
  }
}

Clickable.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  validate: PropTypes.bool,
};

Clickable.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  validate: false,
};

export default Clickable;
