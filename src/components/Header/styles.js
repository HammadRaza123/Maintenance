import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    statusBarStyle: {

    },
    leadingIcon: {
        justifyContent: 'center',
        left: width(5),
        padding: width(2),
        alignSelf: 'center',
        borderRadius: width(4),
        backgroundColor: Colors.white
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width(6),
        alignContent: 'center',
        color: Colors.white
    },
    headerRightSection: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightIcon: {
        right: width(5),
        alignSelf: 'center',
        backgroundColor: Colors.white,
        padding: width(2),
        borderRadius: width(4),

    },
    headerContainer: {
        backgroundColor: Colors.primaryBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: height(1.5),
        // borderBottomLeftRadius: width(5),
        // borderBottomRightRadius: width(5),
        alignContent: 'center'
    }
}
);
export default styles;
