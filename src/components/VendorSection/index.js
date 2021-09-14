import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const Component = ({ vendorLogo, vendorTitle, arrowIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.vendorContainer} onPress={onPress}>
      <Image
        style={styles.vendorLogo}
        source={vendorLogo} />
      <Text style={styles.vendorTitle}>{vendorTitle}</Text>
      {arrowIcon ? <Icon style={styles.vendorIcon} name='rightcircle' /> : <View></View>}
    </TouchableOpacity>
  );
};
export default Component;
