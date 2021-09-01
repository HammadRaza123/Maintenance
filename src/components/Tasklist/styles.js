import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'red',
        paddingHorizontal: 10
    },
    detailedtask: {
        backgroundColor: Colors.white,
        width: width(80),
        padding: width(2),
        borderRadius: width(3),
        flexDirection: 'row',
        marginVertical: height(2),
        marginLeft: width(14)
    },
    TaskLogo: {
        marginLeft: -width(15),
        width: width(32),
        height: width(32),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    textSection: {
        width: '60%',
    },
    createdAtText: {
        color: Colors.textcolor,
        fontSize: width(4),
        opacity: 0.6
    },
    titletext: {
        fontSize: width(4),
        color: Colors.primaryBlue,
    },
    descriptiontext: {
        color: Colors.textcolor,
        opacity: 0.6,
        fontSize: width(3)
    },
    buttonStyle: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        position: 'absolute',
        marginTop: height(1),
        right: width(2),
        elevation: 12,
        borderRadius: width(1.5),
        paddingHorizontal: width(2),
        paddingVertical: height(0.5)
    },
    newButtonText: {
        textAlign: 'center',
        color: Colors.primaryBlue,
    },
    pendingButtonText: {
        textAlign: 'center',
        color: Colors.yellowText,
    },
    closedButtonText: {
        textAlign: 'center',
        color: Colors.greenText,
    }

}
);
export default styles;
