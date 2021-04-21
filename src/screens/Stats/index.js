import React, { Fragment } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
export default function Stats() {
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header
        leadIcon
        leadingIcon={'qrcode'}
        title={'Asset List'}
        rightIcon={'equalizer'}
        onpressAction={() =>
          props.navigation.navigate('FilterTask')
        }
      />
      <Text style={{
        color: Colors.primaryBlue, justifyContent: 'center',
        textAlign: 'center', textAlignVertical: 'center', flex: 1, fontSize: width(80), fontWeight: 'bold'
      }}>X</Text>
    </SafeAreaView>
  );
}