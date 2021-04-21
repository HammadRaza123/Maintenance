import React, { Fragment } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import { width, height, totalSize } from 'react-native-dimension';
import LabelRow from '../../components/LabelRow';
import Colors from '../../utills/Colors';
export default function EditTask(props) {
    const data = [
        {label: 'Status', value: 'New'},
        {label: 'Task', value: '1745897'},
        {label: 'Class', value: 'Call'},
        {label: 'Area', value: '109 SH'},
        {label: 'Type', value: 'Plumb'},
        {label: 'Room', value: '321'},
        {label: 'Email', value: 'xyz@gmail.com'},
        {label: 'Created', value: '7 April 2021 10:09pm'},
        {label: 'Changed', value: '---------'},
        {label: 'Delayed Date', value: '---------'},
        {label: 'Duration', value: '0h:0m'},
        {label: 'Assigned to', value: 'John Doe'},
        {label: 'Submitted by', value: 'Lora ipsum'},
      ]
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header leadIcon leadingIcon={'angle-left'} rightIcon={'checkbox-active'}
        editText={'Edit'} onpressADD={()=>props.navigation.goBack()}
      />
      <View style={styles.container}>
     <LabelRow
        data={data} textColor={Colors.white} fontWeight={'bold'}
      />
      <Text>upload docs</Text>
      </View>
    </SafeAreaView>
  );
}