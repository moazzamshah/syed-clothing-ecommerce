import React from 'react';
import Directory from '../../directory/Directory.component';
import './homePage.styles.scss';

const Homepage = (props) => {
  console.log(props)
  return (
    <div>
      <Directory />
    </div>
  );
};

export default Homepage;