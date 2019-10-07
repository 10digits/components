import React from 'react';
import { Image } from '../src';

export default {
  title: 'Image',
};

export const empty = () => (
  <Image src="https://i2.wp.com/farm8.staticflickr.com/7352/27919254421_a096d9796b_c.jpg" />
);
export const withCaption = () => (
  <Image
    caption="Boracay @ Flickr"
    src="https://i2.wp.com/farm8.staticflickr.com/7352/27919254421_a096d9796b_c.jpg?resize=800%2C571"
  />
);
