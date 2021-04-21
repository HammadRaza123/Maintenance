import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    LabelDetailRow: {
        justifyContent: 'space-between',
        flexDirection:'row',
        borderBottomWidth: width(0.15),
        borderBottomColor: Colors.lineColor,
    },
    detailTitle:{
        color:Colors.primaryBlue,
        fontSize:width(4),
        fontWeight:'bold'
    },
    detailText:{
        lineHeight:height(5),
        fontSize:width(4),
    },
}
);
export default styles;
