import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = props => (
  <Fragment>
    <div
      className="Image"
      role="presentation"
      style={{ backgroundImage: `url(${props.src}` }}
    ></div>
    {props.caption ? (
      <figcaption className="Image__caption">{props.caption}</figcaption>
    ) : null}
  </Fragment>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default Image;
