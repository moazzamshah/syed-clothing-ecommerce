import React from 'react';

const NotFound = (props) => {
  console.log(props);
  return (
    <div>
      <h2> Page not found </h2>
      <button onClick={() => props.history.goBack()}> Go back </button>
    </div>
  );
};

export default NotFound;
