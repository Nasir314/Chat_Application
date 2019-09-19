import React from 'react';
import './pleasewait.css';

const PleaseWait = props => {
  const { color } = props;
  const { heading } = props;
  const { fontWeight } = props;
  const { fontSize } = props;
  const { marginTop } = props;
  const { marginLeft } = props;

  return (
    <div className="pleasewait" style={{ ...props, marginLeft: '10px' }}>
      {heading || 'Loading...'}
    </div>
  );
};
export default PleaseWait;
