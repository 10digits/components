import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

const generateStyle = function(accentHex, isInverse) {
  return {
    [isInverse ? 'color' : 'backgroundColor']: accentHex,
    borderColor: accentHex,
  };
};

const Tag = ({ children, inverse, accentHex }) => {
  const classes = classnames([
    'Tag',
    {
      'Tag__is-inverse': inverse,
    },
  ]);
  return (
    <span className={classes} style={generateStyle(accentHex, inverse)}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  accentHex: PropTypes.string,
  inverse: PropTypes.bool,
};

export default Tag;
