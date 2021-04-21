import React from 'react';
import { View, Text, StatusBar,TouchableOpacity } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
const Component = ({ leadIcon, hideActionIcon, leadingIcon,title,rightIcon,onpressADD, onpressAction, editText }) => {
    return (
        <View style={styles.headerContainer}>
            <StatusBar translucent={false} barStyle="default"
                backgroundColor={Colors.primaryBlue} />
                {leadIcon ? 
                 <TouchableOpacity 
            onPress={onpressADD}
            style={styles.leadingIcon}>
                <FontistoIcon name={leadingIcon} size={width(4)}/>
            </TouchableOpacity>:
                <View style={styles.emptyView}></View>
            }
           
            <Text style={styles.titleText}>
                {title}
            </Text>
           {hideActionIcon ? <View></View> :
           <View style={styles.headerRightSection}>
           <Text style={styles.titleText}>{editText}</Text>
            <TouchableOpacity
            onPress={onpressAction}
           style={styles.rightIcon}>
           <FontistoIcon name={rightIcon} size={width(4)}/>
           </TouchableOpacity>
           </View>
           }
        </View>
    );
};
export default Component;
