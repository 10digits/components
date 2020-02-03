import React from 'react';
import { CountBadge, Clickable } from '../src';

export default {
  title: 'CountBadge',
};

export const twelve = () => <CountBadge>12</CountBadge>;
export const four = () => <CountBadge fillColor="#797979">4</CountBadge>;
export const one = () => (
  <CountBadge strokeColor="#333333" fillColor="#c78ae3">
    1
  </CountBadge>
);
export const ninetyNine = () => <CountBadge fillColor="#006dcc">99</CountBadge>;
export const twoHundred = () => <CountBadge>200</CountBadge>;
export const small = () => <CountBadge size={16}>2</CountBadge>;
export const smallNoCount = () => (
  <CountBadge hideCount size={12}>
    2
  </CountBadge>
);
export const large = () => (
  <CountBadge fillColor="#e7912f" strokeColor="#e7542f" size={100}>
    50
  </CountBadge>
);
export const extraLarge = () => <CountBadge size={400}>88</CountBadge>;

export const attached = () => (
  <span style={{ position: 'relative' }}>
    <Clickable
      onClick={() => {
        return;
      }}
    >
      Count
    </Clickable>
    <CountBadge size={24} isAttached>2</CountBadge>
  </span>
);
