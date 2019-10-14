import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import classnames from 'classnames';

const CountBadge = ({
  children,
  hideCount,
  isAttached,
  fillColor,
  strokeColor,
  size,
}) => {
  const count =
    children > 99 ? (
      <Fragment>
        99<sup>+</sup>
      </Fragment>
    ) : (
      children
    );
  return (
    <div
      className={classnames([
        'CountBadge',
        {
          'CountBadge__is-attached': isAttached,
        },
      ])}
      style={{
        color: strokeColor,
        backgroundColor: fillColor,
        fontSize: size / 2,
        height: size,
        width: size,
      }}
      title={children}
    >
      {hideCount ? null : count}
    </div>
  );
};

CountBadge.propTypes = {
  hideCount: PropTypes.bool,
  children: PropTypes.string.isRequired,
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  size: PropTypes.number,
};

CountBadge.defaultProps = {
  hideCount: false,
  isAttached: false,
  strokeColor: '#ffffff',
  fillColor: '#d01c1c',
  size: 24,
};

export default CountBadge;
