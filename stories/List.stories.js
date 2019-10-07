import React from 'react';
import { List } from '../src';

export default {
  title: 'List',
};

export const empty = () => <List items={[]}>Posts</List>;
export const full = () => (
  <List
    items={[
      { name: 'A new day', id: '8b424791-1534-4516-b31a-900360944166' },
      { name: 'Starting fresh', id: '23109b4d-00fc-4608-9fb3-efe789fd068f' },
    ]}
  >
    Posts
  </List>
);
