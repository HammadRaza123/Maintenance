import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColor from '../../../utills/Colors';

const styles = StyleSheet.create({
  mainViewContainer: {
    // backgroundColor: Colors.pageBlack,
    // flex: 1
  },
  mainContainer: {
    backgroundColor: AppColor.primaryBlue,
    paddingVertical: height(2),
    borderBottomLeftRadius: width(8),
    borderBottomRightRadius: width(8)
  },
  InnerContainer: {
    width: width(90),
    alignSelf: 'center'
  },
  ButtonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width(90),
    marginTop: height(5),
    alignSelf: 'center'
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: width(.15),
    borderColor: AppColor.white,
    padding: width(2),
    borderRadius: width(2)
  },
  buttonText: {
    fontSize: width(4),
    color: AppColor.white,
    marginLeft: width(2),
  },
  fileNameText: {
    fontSize: width(4),
    marginLeft: width(2),
    width: '65%',
    color: AppColor.white60
  }
});
export default styles;
