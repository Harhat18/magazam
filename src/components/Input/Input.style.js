import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#e0e0e0e0',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 15, // Sadece iOS için padding ekleme
        paddingLeft: 10,
      },
    }),
  },
});
