import React, { Fragment } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import VendorSection from '../../components/VendorSection';
import { width } from 'react-native-dimension';
export default function Vendors(props) {
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header hideActionIcon
        title={'Vendors'}
      />
      <View style={{marginTop:width(2)}}></View>
      <VendorSection
      onPress = {()=>props.navigation.navigate('HavcInfo')}
      vendorLogo={require('../../assets/images/havc2.png')}
      vendorTitle={'HAVC/Refrigeration'}
      arrowIcon
      />
      <VendorSection
       onPress = {()=>props.navigation.navigate('PlumbingInfo')}
      vendorLogo={require('../../assets/images/plumbing.png')}
      vendorTitle={'PLUMBING'}
      arrowIcon
      />
      <VendorSection
       onPress = {()=>props.navigation.navigate('PaintingInfo')}
      vendorLogo={require('../../assets/images/painting.png')}
      vendorTitle={'PAINTING'}
      arrowIcon
      />
    </SafeAreaView>
  );
}