import {ActivityIndicator, Pressable, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="#2f4f4f" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </Pressable>
  );
};

export default Button;
