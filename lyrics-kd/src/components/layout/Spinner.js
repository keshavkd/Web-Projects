import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src = {spinner}
        alt = "Loading..."
        style = {{ width: '200px', margin: '2.2rem auto', display: 'block' }}
      />
    </div>
  );
};