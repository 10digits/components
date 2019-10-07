import React from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import './styles.css';

dayjs.extend(advancedFormat);

const Time = ({ dateTime }) => {
  const isUSA = /^America\//.test(Intl.DateTimeFormat().resolvedOptions().timeZone);
  return (
    <time className="Time" dateTime={dateTime} title={dateTime}>
      {dayjs(dateTime).format(isUSA ? 'MMM Do, YYYY' : 'Do MMM, YYYY')}
    </time>
  );
};

Time.propTypes = {
  dateTime: function(props, propName, componentName) {
    if (!/\d{4}(-\d{2}){2}/.test(props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. expected "yyyy-mm-dd" Validation failed.',
      );
    }
  },
};

export default Time;
