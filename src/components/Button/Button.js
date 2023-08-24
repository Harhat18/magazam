import {View, Pressable, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({text}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </Pressable>
  );
};

export default Button;
