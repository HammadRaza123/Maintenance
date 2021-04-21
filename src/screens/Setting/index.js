import React, { Fragment } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
export default function Setting() {
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header rightIcon={'save'}
        title={'Setting'}
      />
      
    </SafeAreaView>
  );
}