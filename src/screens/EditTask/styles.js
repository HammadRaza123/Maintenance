import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    mainViewContainer: {
        backgroundColor: Colors.primaryBlue,
        flex: 1
    },
    container: {
        width: width(90),
        alignSelf: 'center'
    }
});
export default styles;
