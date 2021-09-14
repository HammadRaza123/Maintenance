import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Colors from '../../utills/Colors';
import styles from './styles';

const Button = ({
  title = '',
  onPress = () => { },
  containerStyle = {},
  btnTextStyle = {},
  isLoading = false,
  loaderColor = Colors.white
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size='small' />
      ) : (
        <Text style={[styles.text, btnTextStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;