import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import TaskListComponent from '../../../components/Tasklist';
import { Get_TaskList } from '../../../Services/Request';
import styles from './styles';
export default function TaskList(props) {
  const [taskList, setTaskList] = useState([])
  const getTaskList = async () => {
    const response = await Get_TaskList()
    if (response?.success) {
      setTaskList(response.data.tasks)
    }
    else {
      console.log('Task Type error is', JSON.stringify(response.data));
    }
  }
  useEffect(() => {
    getTaskList()
  }, [])
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header leadIcon leadingIcon={'plus-a'} title={'Task List'} rightIcon={'equalizer'}
        onpressADD={() => props.navigation.navigate('AddTask')}
        onpressAction={() => props.navigation.navigate('Filter')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={taskList}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TaskListComponent
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

      </ScrollView>

    </SafeAreaView>
  );
}