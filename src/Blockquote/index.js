import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Blockquote = props => (
  <blockquote className="Blockquote"><span className="Blockquote__text">{props.children}</span></blockquote>
);

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blockquote;
