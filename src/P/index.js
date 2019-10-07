import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const P = props => <p className="P">{props.children}</p>;

P.propTypes = {
  children: PropTypes.node.isRequired,
};

export default P;
