import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { width } from 'react-native-dimension';
import Header from '../../../components/Header';
import Colors from '../../../utills/Colors';
import styles from './styles';
export default function Stats() {
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header title={'Stats'} hideActionIcon />
      <Text style={{
        color: Colors.primaryBlue, justifyContent: 'center',
        textAlign: 'center', textAlignVertical: 'center', flex: 1, fontSize: width(80), fontWeight: 'bold'
      }}>X</Text>
    </SafeAreaView>
  );
}