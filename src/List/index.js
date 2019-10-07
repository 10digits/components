import React from 'react';
import PropTypes from 'prop-types';

import Uuid from '../Uuid';

const Row = props => (
  <tr>
    {props.index ? (
      <td>
        <Uuid>{props.index}</Uuid>
      </td>
    ) : null}
    <td>{props.children}</td>
  </tr>
);

Row.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.string,
};

const List = props => (
  <table>
    <thead>
      <tr>
        <td>{props.children}</td>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <Row key={item.id} index={item.id}>
            {item.name}
          </Row>
        ))
      ) : (
        <Row>{`No ${props.children} to display.`}</Row>
      )}
    </tbody>
  </table>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default List;
