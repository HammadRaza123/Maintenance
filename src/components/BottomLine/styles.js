import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    bottomLine:{
        borderBottomColor:Colors.lineColor,
        borderBottomWidth:width(0.15),
        marginVertical:width(2)
    }
}
);
export default styles;
