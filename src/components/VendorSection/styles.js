import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    vendorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height(.7),
        alignItems: 'center',
        marginHorizontal: width(4),
        borderRadius: width(2),
        backgroundColor: Colors.white
    },
    vendorLogo: {
        width: width(30),
        height: width(30),
        justifyContent: 'flex-start'
        // backgroundColor: 'red',

    },
    vendorTitle: {
        color: Colors.primaryBlue,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: width(5)
    },
    vendorIcon: {
        color: Colors.primaryBlue,
        fontSize: width(8),
        paddingRight: width(2)
    }
}
);
export default styles;
