import React from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { width, height, totalSize } from 'react-native-dimension';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
const Component = ({ vendorLogo, vendorTitle, arrowIcon, onPress }) => {
    return (
        <TouchableOpacity style={styles.vendorContainer}
        onPress={onPress}>
          <Image
        style={styles.vendorLogo}
        source={vendorLogo}  />
        <Text style={styles.vendorTitle}>{vendorTitle}</Text>

       {arrowIcon ?  <Icon style={styles.vendorIcon} name='rightcircle' /> : <View></View>}
        </TouchableOpacity>
    );
};
export default Component;
