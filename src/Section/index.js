import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Section = props => <section className="Section">{props.children}</section>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
