import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { width } from 'react-native-dimension';
import { PieChart } from "react-native-gifted-charts";
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { Get_TaskList } from '../../../Services/Request';
import styles from './styles';
export default function Stats() {
  const data = [
    { value: 50, text: 'New' },
    { value: 80, text: 'Pending' },
    { value: 50, text: 'Closed' },
    { value: 80, text: 'Delayed' },
    { value: 80, text: 'Canceled' },
  ]
  let arr = ['pending', 'inprogess', 'canceled', 'delayed', 'pending', 'inprogess',
    'canceled', 'delayed', 'pending', 'inprogess', 'canceled', 'delayed', 'pending',
    'inprogess', 'canceled', 'delayed', 'pending', 'inprogess', 'canceled', 'delayed',]
  const [taskList, setTaskList] = useState([])
  const getTaskList = async () => {
    const response = await Get_TaskList()
    if (response?.success) {
      const sdata = response.data.tasks?.map(i => i.status) //console.log
      setTaskList(sdata)
    }
    else {
      console.log('Task Type error is', JSON.stringify(response.data));
    }
  }
  useEffect(() => {
    getTaskList()
  }, [])

  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() => <Header title={'Stats'} hideActionIcon />}>
      <View
        style={styles.mainViewContainer} >
        <PieChart donut={true} data={data}
          // radius={120}       //size pie
          showText={true} textSize={width(3)}
        />
        {console.log('result is ', taskList)}
        {/* <Text>
          {taskList}
        </Text> */}
      </View>
    </ScreenWrapper>
  );
}