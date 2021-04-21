import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Component = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
};

export default Component;
