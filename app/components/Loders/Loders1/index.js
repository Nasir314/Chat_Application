import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = props => {
  const { textAlign } = props;
  const { marginTop } = props;
  const { color } = props;
  const { height } = props;
  const { width } = props;
  return (
    <div style={{ textAlign, marginTop }}>
      <Loader type="Puff" color={color} height={height} width={width} />
    </div>
  );
};

export default LoaderSpinner;
