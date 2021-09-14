import { useFocusEffect } from '@react-navigation/core';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { width } from 'react-native-dimension';
import { PieChart } from "react-native-gifted-charts";
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { Get_Status } from '../../../Services/Request';
import Colors from '../../../utills/Colors';
import styles from './styles';
export default function Stats() {
  const [data, setData] = useState([])
  const renderItem = ({ item }) => (
    <View style={styles.valueRow}>
      <Text style={styles.textValue}>{item.text}</Text>
      <Text style={styles.textValue}>{item.value}</Text>
    </View>
  );
  const statusHeader = () => {
    return (
      <View style={styles.valueRow}>
        <Text style={styles.headingText}>Status</Text>
        <Text style={styles.headingText}>Value</Text>
      </View>
    )
  }
  const getStatusCount = async () => {
    const response = await Get_Status()
    if (response?.success) {
      setData(response?.data?.data)
    }
    else {
      console.log('Status count error is' + JSON.stringify(response.data));
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      getStatusCount()
    }, [])
  );
  return (
    <ScreenWrapper headerUnScrollable={() => <Header title={'Statistics'} hideActionIcon />}>
      <View
        style={styles.mainViewContainer} >
        {data == '' ?
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={Colors.primaryBlue} size='large' />
          </View>
          : <><PieChart donut={true} data={data}
            showText={true} textSize={width(3)}
          />
            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={statusHeader()}
              data={data}
              renderItem={renderItem}
            /></>
        }
      </View>
    </ScreenWrapper>
  );
}