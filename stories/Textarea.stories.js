import React from 'react';
import { Textarea } from '../src';

export default {
  title: 'Textarea',
};

const text = 'Textarea label';

export const required = () => <Textarea>{text}</Textarea>;
export const optional = () => <Textarea isOptional>{text}</Textarea>;
export const withHelp = () => <Textarea help="Enter some text">{text}</Textarea>;

export const error = () => <Textarea status="error">{text}</Textarea>;
export const warning = () => <Textarea status="warning">{text}</Textarea>;
export const optionalWithWarningAndHelp = () => (
  <Textarea status="warning" help="That doesn't look quite right" isOptional>
    {text}
  </Textarea>
);
