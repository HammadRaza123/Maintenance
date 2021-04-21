import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  commentLabel: {
    marginBottom: width(1),
    color: Colors.white,
    fontSize: width(4),
  },
  commentBox: {
    backgroundColor: Colors.transparent,
    borderWidth: width(0.15),
    color: Colors.white,
    borderRadius: width(2),
    borderColor: Colors.lineColor
  },
}
);
export default styles;
