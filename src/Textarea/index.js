import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';

import './styles.css';

const Textarea = props => (
  <Field
    isOptional={props.isOptional}
    label={props.children}
    status={props.status}
    help={props.help}
  >
    <textarea className="Textarea" placeholder="Start typing…" rows="5" />
  </Field>
);

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
  help: PropTypes.string,
  isOptional: PropTypes.bool,
};

Textarea.defaultProps = {
  status: '',
  isOptional: false,
};

export default Textarea;
