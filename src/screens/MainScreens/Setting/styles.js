import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import Colors from '../../../utills/Colors';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: Colors.pageBlack,
    padding: width(4),
    alignSelf: 'center',
    height: height(83),
    justifyContent: 'space-between'
  },
  multiBox: {
    borderColor: Colors.white,
    borderWidth: width(.15),
    borderRadius: width(2)
  },
  multiInputTextStyle: {
    color: Colors.white
  },
  saveBtn: {
    backgroundColor: Colors.primaryBlue,
    position: 'absolute',
    right: 0,
    bottom: -height(8)
  },
  updateBtn: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primaryBlue
  },
  logoutBtn: {
    width: width(40),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.red,
    borderWidth: width(.5)
  },
  logoutBtnText: {
    color: Colors.red
  }
});
export default styles;
