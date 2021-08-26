import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({
  title = '',
  onPress = () => { },
  containerStyle = {},
  btnTextStyle = {}
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.text, btnTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;