import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/Colors';

const styles = StyleSheet.create({
  mainInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: height(0.15),
    marginVertical: height(2),
  },
  inputSection: {
    width: '80%',
  },
  inputText: {
    color: AppColors.textColor,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: width(4),
    paddingVertical: 0,
    // height: height(4.75)
  },
  errorMsg: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '200',
    fontSize: width(3),
    color: AppColors.red,
    marginBottom: height(.5)
  },
  suffixStyle: {
    position: 'absolute',
    right: -width(0),
    padding: width(4)
  },

  // ********************************  multi line input  *************************************

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  greyBox: {
    backgroundColor: AppColors.greyButton,
    borderRadius: width(2),
    paddingHorizontal: width(4),
    paddingVertical: height(1),
    marginVertical: height(1),
  },
  inputBox: {
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Medium',
    fontSize: width(4),
    color: AppColors.black
  },
  imageStyle: {
    resizeMode: 'cover',
    width: width(8),
    height: width(8),
    borderRadius: width(4),
    marginRight: width(2)
  },
  reviewerName: {
    fontFamily: 'Poppins-Medium',
    fontSize: width(3.5),
    color: AppColors.black
  },
});
export default styles;
