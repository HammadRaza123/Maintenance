import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    MainCounterRow:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    LeftSection:{
        flexDirection:'row',
        alignItems:'center',
    },
    timeText:{
        color:Colors.white,
        width:width(15),
        fontSize:width(4)
    },
    addButton:{
        backgroundColor:Colors.green,
        borderRadius:width(3),
        width:width(6),
        height:width(6),
        justifyContent:'center'
    },
    decreaseButton:{
        backgroundColor:Colors.red,
        borderRadius:width(3),
        width:width(6),
        height:width(6),
        justifyContent:'center'
    },
    buttonIcon:{
        color:Colors.white,
        fontSize:width(4),
        textAlign:'center'
    }
}
);
export default styles;
