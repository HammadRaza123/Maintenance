import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { width } from 'react-native-dimension';
import Header from '../../../components/Header';
import VendorDetails from '../../../components/VendorDetails';
import VendorSection from '../../../components/VendorSection';
import styles from './styles';
export default function HavcInfo({ navigation: { goBack } }) {
  const data = [
    { label: 'Phone', value: '1745893437' },
    { label: 'Fax', value: '----------' },
    { label: 'Email', value: 'Xyz@gmail.com' },
    { label: 'Contact', value: '325844500' },
    { label: 'Address', value: '1073 Chappelle blvd' },
    { label: 'Address2', value: 'Nill' },
    { label: 'City', value: 'Edmontom' },
    { label: 'Stat/prov', value: 'AB' },
    { label: 'Zip', value: 't6w 3m 1' },
  ]
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header hideActionIcon
        leadIcon
        leadingIcon={'leftcircle'} onpressADD={() => goBack()}
        title={'Vendors Information'}
      />
      <View style={{ marginTop: width(2) }}></View>
      <VendorSection
        vendorLogo={require('../../../assets/images/havc2.png')}
        vendorTitle={'HAVC/Refrigeration'}
      />
      <View style={{ marginTop: width(2) }}></View>
      <ScrollView>
        <VendorDetails
          nameTitle={'Name'} detailTitle={'Appliance Outlet'}
          data={data}
        />
        <VendorDetails
          nameTitle={'Name'} detailTitle={'Gerald-Appliance'}
          data={data}
        />
      </ScrollView>
    </SafeAreaView>
  );
}