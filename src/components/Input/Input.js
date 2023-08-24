import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeholder, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onchangeText={onType} />
    </View>
  );
};

export default Input;
