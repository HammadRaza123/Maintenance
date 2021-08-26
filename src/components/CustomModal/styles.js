
import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import AppColors from '../../utills/Colors';

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: AppColors.white,
        width: width(80),
        borderRadius: width(5),
        alignSelf: 'center',
        paddingBottom: height(3)
    },
    modalHeading: {
        textAlign: 'center',
        color: AppColors.textColor,
        fontSize: width(6),
        fontFamily: 'Poppins-Bold'
    },
    closeContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: width(4),
        justifyContent: 'space-between',
        paddingHorizontal: width(4)
    },
    bodyContainer: {
        justifyContent: 'space-evenly',
    },
    inputBox: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: AppColors.transparent,
        borderColor: AppColors.gray,
        borderWidth: width(.15)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        width: '45%',
        backgroundColor: AppColors.primaryBlue
    },
    noButtonStyle: {
        width: '45%'
    }
})
export default styles;
