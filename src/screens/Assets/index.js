import React, {Fragment} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import styles from './styles';
export default function Assets() {
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.heading}>Assets!</Text>
          </View>
    );
  }