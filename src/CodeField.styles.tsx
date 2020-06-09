import {Platform, StyleSheet} from 'react-native';

const codeFieldStyles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    fontSize: 1,
    ...Platform.select({
      web: {
        width: '100%',
        // Fix iOS aggressive zoom
        fontSize: 16,
      },
    }),
  },
});

export default codeFieldStyles;
