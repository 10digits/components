import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Uuid = props => (
  <props.elementType title={props.children} className="uuid">
    {props.children.slice(0, 5).toUpperCase()}
  </props.elementType>
);

Uuid.propTypes = {
  children: PropTypes.string.isRequired,
  elementType: PropTypes.string,
};

Uuid.defaultProps = {
  elementType: 'span',
};

export default Uuid;
