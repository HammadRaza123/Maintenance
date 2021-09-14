import { useFocusEffect } from '@react-navigation/core';
import moment from 'moment';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TaskListComponent from '../../../components/Tasklist';
import { Get_TaskList } from '../../../Services/Request';
import Colors from '../../../utills/Colors';
import styles from './styles';
export default function TaskList(props) {
  const [taskList, setTaskList] = useState([])
  const [list, setList] = useState(true)
  const getTaskList = async () => {
    const response = await Get_TaskList()
    if (response?.success) {
      setTaskList(response.data.tasks)
    }
    else {
      console.log('Task Type error is', JSON.stringify(response.data));
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      getTaskList()
    }, [])
  );
  return (
    <ScreenWrapper
      headerUnScrollable={() => <Header leadIcon leadingIcon={'pluscircle'} title={'Task List'} rightIcon={'equalizer'}
        onpressADD={() => props.navigation.navigate('AddTask')}
        onpressAction={() => props.navigation.navigate('Filter')}
      />}>
      {taskList == [] ?
        <ActivityIndicator color={Colors.white} size='large' />
        :
        <FlatList style={styles.mainViewContainer}
          data={taskList}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TaskListComponent
                onPress={() => props.navigation.navigate('EditTask', item)}
                key={item._id}
                createdAt={moment(item.createdAt).format('DD-MM-YYYY')}
                submittedBy={item?.submittedBy}
                assignedVendors={item?.assignedVendors?.name}
                areacode={item?.suit + ' , ' + item.area.name}
                description={item?.details}
                phone={item?.phone}
                status={item?.status}
              />
            );
          }
          }
        />
      }
    </ScreenWrapper>
  );
}