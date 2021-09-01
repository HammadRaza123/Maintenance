import { StyleSheet } from 'react-native';
import { width } from 'react-native-dimension';
import Colors from '../../../utills/Colors';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: Colors.pageBlack,
    flex: 1
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.primaryBlue,
    fontSize: width(6)
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  listStyle: {
    backgroundColor: Colors.pageBlack
  }
});
export default styles;
