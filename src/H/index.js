import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

const H = props => {
  const C = `h${props.ordinal}`;
  const title = props.isTitle
    ? props.children.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) + '.'
    : props.children;
  return (
    <C
      className={classNames([
        'H',
        `H${props.ordinal}`,
        {
          'H__is-title': props.isTitle,
        },
      ])}
    >
      {title}
      {props.subtitle ? <span class="H__subtitle">{props.subtitle}</span> : null}
    </C>
  );
};

H.propTypes = {
  children: PropTypes.string.isRequired,
  ordinal: PropTypes.number.isRequired,
  isTitle: PropTypes.bool,
  subtitle: PropTypes.node,
};

H.defaultProps = {
  isTitle: false,
};

export default H;
