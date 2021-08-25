import { StyleSheet } from 'react-native';
import { width } from 'react-native-dimension';
import Colors from '../../../utills/Colors';

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
