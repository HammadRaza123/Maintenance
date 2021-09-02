import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
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
    <ScreenWrapper
      headerUnScrollable={() => <Header leadIcon leadingIcon={'plus-a'} title={'Task List'} rightIcon={'equalizer'}
        onpressADD={() => props.navigation.navigate('AddTask')}
        onpressAction={() => props.navigation.navigate('Filter')}
      />}>

      <FlatList style={styles.mainViewContainer}
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


    </ScreenWrapper>
  );
}