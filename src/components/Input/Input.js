import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        placeholderTextColor={'black'}
        secureTextEntry={isSecure}
      />
      <Icon size={25} name={iconName} />
    </View>
  );
};

export default Input;
