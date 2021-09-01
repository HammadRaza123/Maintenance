import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
    dropdownView: {
        marginBottom: width(1),
    },
    Placeholders: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
        padding: width(1)
    },
    dropdownField: {
        width: width(90),
        backgroundColor: Colors.transparent,
        borderWidth: width(0.15),
        padding: width(1),
        height: height(5),
        justifyContent: 'center',
        borderRadius: width(1),
        borderColor: Colors.white,
        marginBottom: height(1.5)
    },
    dropdownText: {
        color: Colors.white,
        justifyContent: 'space-between',
        fontSize: width(4),
    },
    dropdownOption: {
        color: Colors.pageBlack,
        justifyContent: 'space-between',
        fontSize: width(4),
    },
    dropdownIcon: {
        color: Colors.white,
        fontSize: width(4)
    },
    dropdownStyle: {
        backgroundColor: Colors.white,
        borderWidth: width(0.15),
        borderRadius: width(1),
        borderColor: Colors.white,
        width: width(85),
        maxHeight: height(12)
    },
    dropdownTextHighlightStyle: {
        backgroundColor: Colors.primaryBlue,
        color: Colors.white,
        borderWidth: width(0.15),
        borderBottomLeftRadius: width(1),
        borderBottomRightRadius: width(1),
        borderColor: Colors.white,
    }
}
);
export default styles;
