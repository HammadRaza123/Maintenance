import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor:Colors.pageBlack,
    flex:1
    },
    cardStyle:{
      backgroundColor: Colors.white,
      width:width(90),
      alignSelf:'center',
      paddingVertical:height(2),
      paddingHorizontal:width(2),
      borderRadius:width(2),
      marginBottom:height(2)
    }
});
export default styles;
