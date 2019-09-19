import React from 'react';
import Loading from 'react-loading-animation';
import './spinner.css';

const Spinner = props => {
  if (props.SpinnerInsideButton === true) {
    return (
      <div id="spinner">
        <Loading style={{ height: props.height, width: props.width }} />
      </div>
    );
  }

  return (
    <div id="spinner">
      <Loading />
    </div>
  );
};

export default Spinner;
