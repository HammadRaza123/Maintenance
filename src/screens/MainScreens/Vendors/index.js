import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { width } from 'react-native-dimension';
import Header from '../../../components/Header';
import VendorSection from '../../../components/VendorSection';
import styles from './styles';
export default function Vendors(props) {
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header hideActionIcon
        title={'Vendors'}
      />
      <View style={{ marginTop: width(2) }}></View>
      <VendorSection
        onPress={() => props.navigation.navigate('HavcInfo')}
        vendorLogo={require('../../../assets/images/havc2.png')}
        vendorTitle={'HAVC/Refrigeration'}
        arrowIcon
      />
      <VendorSection
        onPress={() => props.navigation.navigate('PlumbingInfo')}
        vendorLogo={require('../../../assets/images/plumbing.png')}
        vendorTitle={'PLUMBING'}
        arrowIcon
      />
      <VendorSection
        onPress={() => props.navigation.navigate('PaintingInfo')}
        vendorLogo={require('../../../assets/images/painting.png')}
        vendorTitle={'PAINTING'}
        arrowIcon
      />
    </SafeAreaView>
  );
}