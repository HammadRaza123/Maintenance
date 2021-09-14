import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    statusBarStyle: {

    },
    leadingIcon: {
        left: width(5)
    },
    emptyView: {
        left: width(5),
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width(6),
        alignContent: 'center',
        color: Colors.white
    },
    rightEmptyView: {
        right: width(5),
        alignSelf: 'center',
        padding: width(2),
        borderRadius: width(4)
    },
    rightIcon: {
        right: width(5),
        alignSelf: 'center',
        backgroundColor: Colors.white,
        padding: width(2),
        borderRadius: width(4)
    },
    headerContainer: {
        backgroundColor: Colors.primaryBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: height(1.5),
        alignItems: 'center',
        elevation: 1
    }
}
);
export default styles;
