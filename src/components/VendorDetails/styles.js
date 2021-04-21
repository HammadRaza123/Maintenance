import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.white,
        width:width(90),
        alignSelf:'center',
        paddingVertical:height(2),
        paddingHorizontal:width(2),
        borderRadius:width(2),
        marginBottom:height(2)
    },
    VendorDetailRow: {
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal:width(3),
        borderBottomWidth: width(0.15),
        borderBottomColor: Colors.lineColor,
    },
    detailTitle:{
        color:Colors.primaryBlue,
        fontSize:width(4),
        fontWeight:'bold'
    },
    detailText:{
        color:Colors.primaryBlue,
        fontSize:width(4),
        fontWeight:'normal',
    },
}
);
export default styles;
