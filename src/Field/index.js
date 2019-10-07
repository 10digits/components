import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Field = props => {
  const cn = classNames('Field', {
    [`Field__has-${props.status}`]: props.status.length > 0,
  });

  return (
    <label className={cn}>
      {props.label}
      {props.isOptional ? <small className="Field__optional">recommended</small> : null}
      {props.help ? <small className="Field__help">{props.help}</small> : null}
      {props.children}
    </label>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  help: PropTypes.string,
  label: PropTypes.string.isRequired,
  status: PropTypes.string,
  isOptional: PropTypes.bool,
};

Field.defaultProps = {
  status: '',
  isOptional: false,
};

export default Field;
