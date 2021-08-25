import { StyleSheet } from 'react-native';
import { width } from 'react-native-dimension';
import Appcolor from '../../../utills/Colors'

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width(30),
    height: width(30),
    margin: width(5),
    borderRadius: width(4)
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginRight: width(10)
  },
  forgotText: {
    fontSize: width(4),
    color: Appcolor.pageBlack
  }
});

export default styles;
