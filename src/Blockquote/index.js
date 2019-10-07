import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Blockquote = props => (
  <blockquote className="Blockquote">{props.children}</blockquote>
);

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blockquote;
