import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import Colors from '../../../utills/Colors';

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
  }
});
export default styles;
