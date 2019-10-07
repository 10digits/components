import React from 'react';
import { action } from '@storybook/addon-actions';

import { Clickable } from '../src';

export default {
  title: 'Clickable',
};

export const a = () => <Clickable onClick="http://omgaz.co">omgaz.co</Clickable>;
export const button = () => <Clickable onClick={action('clicked')}>Click me</Clickable>;
