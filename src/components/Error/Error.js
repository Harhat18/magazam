import React from 'react';
import LottieView from 'lottie-react-native';

function Error() {
  return (
    <LottieView source={require('../../asests/error.json')} autoPlay loop />
  );
}

export default Error;
