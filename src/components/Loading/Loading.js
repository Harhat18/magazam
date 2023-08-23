import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView source={require('../../asests/loading.json')} autoPlay loop />
  );
}

export default Loading;
