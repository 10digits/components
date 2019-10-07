import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';

import './styles.css';

const Input = props => (
  <Field
    isOptional={props.isOptional}
    label={props.children}
    status={props.status}
    help={props.help}
  >
    <input className="Input" placeholder="Start typing…" />
  </Field>
);

Input.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
  help: PropTypes.string,
  isOptional: PropTypes.bool,
};

Input.defaultProps = {
  status: '',
  isOptional: false,
};

export default Input;
