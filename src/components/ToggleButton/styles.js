import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    toggleLabel: {
        color: Colors.white,
        fontSize: width(4)
    }
}
);
export default styles;
