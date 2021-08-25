import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import Colors from '../../../utills/Colors';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: Colors.pageBlack,
    flex: 1
  },
  cardStyle: {
    backgroundColor: Colors.white,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    borderRadius: width(2),
    marginBottom: height(2)
  }
});
export default styles;
