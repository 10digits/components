import React from 'react';
import { Input } from '../src';

export default {
  title: 'Input',
};

const text = 'Type something';

export const required = () => <Input>{text}</Input>;
export const optional = () => <Input isOptional>{text}</Input>;
export const withHelp = () => <Input help="Enter some text">{text}</Input>;

export const error = () => <Input status="error">{text}</Input>;
export const warning = () => <Input status="warning">{text}</Input>;
export const optionalWithErrorAndHelp = () => (
  <Input status="error" help="That doesn't look quite right" isOptional>
    {text}
  </Input>
);
