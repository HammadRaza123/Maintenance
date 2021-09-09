import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import VendorSection from '../../../components/VendorSection';
import { Get_VendorList } from '../../../Services/Request';
import styles from './styles';
export default function Vendors(props) {
  const [vendorList, setVendorList] = useState([])
  const renderItem = ({ item }) => (
    <VendorSection onPress={() => props.navigation.navigate('HavcInfo')} arrowIcon
      vendorLogo={require('../../../assets/images/havc2.png')} vendorTitle={item} />
  );
  const getTaskList = async () => {
    const response = await Get_VendorList({ type: 'vendor' })
    if (response?.success) {
      const result = response.data?.map(i => i.name) //console.log
      setVendorList(result)
    }
    else {
      console.log('Task Type error is', JSON.stringify(response.data));
    }
  }
  useEffect(() => {
    getTaskList()
  }, [])
  return (
    <ScreenWrapper headerUnScrollable={() => <Header hideActionIcon title={'Vendors'} />} >
      <FlatList style={styles.mainViewContainer}
        showsVerticalScrollIndicator={false}
        data={vendorList}
        renderItem={renderItem}
      // keyExtractor={item => item.id}
      />
    </ScreenWrapper>
  );
}