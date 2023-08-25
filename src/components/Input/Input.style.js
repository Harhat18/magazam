import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#e0e0e0e0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    color: 'white',

    ...Platform.select({
      ios: {
        paddingVertical: 15, // Sadece iOS için padding ekleme
        paddingLeft: 10,
      },
    }),
  },
  input: {
    flex: 1,
  },
});
