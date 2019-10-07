import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form, Input, Textarea, Clickable } from '../src';

export default {
  title: 'Form',
};

export const empty = () => (
  <Form>
    <Input>Name</Input>
    <Input>Age</Input>
    <Textarea>About</Textarea>
  </Form>
);

export const withErrors = () => (
  <Form>
    <Input status="error">Name</Input>
    <Input status="error">Age</Input>
    <Textarea status="error">About</Textarea>
  </Form>
);

export const withWarnings = () => (
  <Form>
    <Input status="warning">Name</Input>
    <Input status="warning">Age</Input>
    <Textarea status="warning">About</Textarea>
  </Form>
);

export const withMixedStatuses = () => (
  <Form>
    <Input help="What do people call you?" status="warning">
      Name
    </Input>
    <Input isOptional help="How many years old are you?">
      Age
    </Input>
    <Textarea help="Write a few words about you and your interests" status="error">
      About
    </Textarea>
    <Clickable onClick={action('clicked')}>Save</Clickable>
  </Form>
);
