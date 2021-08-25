import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
export default function Assets() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.heading}>Assets!</Text>
    </View>
  );
}