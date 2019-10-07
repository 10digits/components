import React, { Fragment } from 'react';
import { H, Time, Clickable } from '../src';

export default {
  title: 'H',
};

const subtitle = (
  <Fragment>
    Written on <Time dateTime="2019-04-18" /> in{' '}
    <Clickable onClick="https://google.com">Victoria</Clickable>
  </Fragment>
);

export const h1 = () => <H ordinal={1}>H Component</H>;
export const h2 = () => <H ordinal={2}>H Component</H>;
export const h3 = () => <H ordinal={3}>H Component</H>;
export const h4 = () => <H ordinal={4}>H Component</H>;
export const h1IsTitle = () => (
  <H isTitle ordinal={1}>
    H Component
  </H>
);
export const h2HasSubtitle = () => (
  <H subtitle="Sub" ordinal={2}>
    H Component
  </H>
);
export const h3HasFancySubtitle = () => (
  <H subtitle={subtitle} isTitle ordinal={3}>
    Travelling the World
  </H>
);
