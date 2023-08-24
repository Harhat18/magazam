import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onType, value, onBlur}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        onBlur={onBlur}
      />
      <Icon name="account" size={20} />
    </View>
  );
};

export default Input;
