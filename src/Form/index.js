import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Form = props => <form className="Form">{props.children}</form>;

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
