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
    padding: width(2.5)
  },
  forgotText: {
    fontSize: width(4),
    color: Appcolor.primaryBlue
  },
  btnStyle: {
    backgroundColor: Appcolor.primaryBlue
  },
  cancelBtnTextStyle: {
    fontSize: width(5),
    fontWeight: 'bold',
    color: Appcolor.primaryBlue
  }
});

export default styles;
