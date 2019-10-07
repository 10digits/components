import React from 'react';
import { Tag } from '../src';

export default {
  title: 'Tag',
};

export const empty = () => <Tag>Tag Component</Tag>;
export const inverse = () => <Tag inverse>Tag Component</Tag>;
export const accent = () => <Tag accentHex="#d01c1c">Tag Component</Tag>;
export const inverseAndAccented = () => (
  <Tag inverse accentHex="#da4f49">
    Tag Component
  </Tag>
);
