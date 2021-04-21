import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: Colors.pageBlack,
    flex: 1
  },
  mainContainer: {
    backgroundColor: Colors.primaryBlue,
    height: height(88),
    justifyContent: 'space-between',
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
    alignSelf: 'center'
  },
  dropdownField: {
    width: width(90),
    backgroundColor: Colors.transparent,
    borderWidth: width(0.15),
    padding: width(1),
    height: height(5),
    color:Colors.white,
    justifyContent: 'center',
    borderRadius: width(1),
    borderColor: Colors.white,
    marginBottom:height(1.5)
},
});
export default styles;
