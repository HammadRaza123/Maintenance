import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { width } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Colors from '../../utills/Colors';
import styles from './styles';
const Component = ({
    leadIcon = false,
    hideActionIcon = false,
    leadingIcon = null,
    title = '',
    rightIcon = null,
    onpressADD = () => { },
    onpressAction = () => { }
}) => {
    return (
        <View style={styles.headerContainer}>
            {leadIcon ?
                <TouchableOpacity onPress={onpressADD} style={styles.leadingIcon}>
                    <AntDesign name={leadingIcon} size={width(7)} color={Colors.white} />
                </TouchableOpacity> :
                <View style={styles.emptyView}></View>
            }
            <Text style={styles.titleText}>{title}</Text>
            {hideActionIcon ? <View style={styles.rightEmptyView}></View> :
                <TouchableOpacity onPress={onpressAction} style={styles.rightIcon}>
                    <FontistoIcon name={rightIcon} size={width(4)} />
                </TouchableOpacity>
            }
        </View>
    );
};
export default Component;
