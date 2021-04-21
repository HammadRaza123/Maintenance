import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: width(2),
    backgroundColor: Colors.transparent,
    width: '40%',
    paddingVertical: height(1.5),
    margin: width(2),
    elevation: 2,
    borderWidth:width(0.08),
    borderColor:Colors.lineColor,
  },
  text: {
    color: Colors.white,
    fontSize: width(5),
    fontWeight:'bold'
  }
});
export default styles;
