import React, { Fragment } from 'react';
import { Article, H, Time, P, Tag, HR, Image, Blockquote, Clickable } from '../src';

export default {
  title: 'Article',
};

export const empty = () => (
  <Article>
    <H
      ordinal="2"
      isTitle
      subtitle={
        <Fragment>
          Written on <Time dateTime="2019-10-07" />
        </Fragment>
      }
    >
      My stay in London
    </H>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </P>
    <Blockquote>How about them apples.</Blockquote>
    <P>
      Lorem ipsum dolor <Clickable onClick="https://omgaz.co/">sit amet</Clickable>,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </P>

    <Image
      caption="Boracay @ Flickr"
      src="https://i2.wp.com/farm8.staticflickr.com/7352/27919254421_a096d9796b_c.jpg?resize=800%2C571"
    />
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </P>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </P>
    <HR />
    <P>
      Tagged as <Tag accentHex="#ff4785">Victoria</Tag>
    </P>
  </Article>
);
