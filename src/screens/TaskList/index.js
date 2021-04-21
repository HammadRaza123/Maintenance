import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import TaskListComponent from '../../components/Tasklist';
import Header from '../../components/Header';
import {getDetails} from '../../utills/Api';
export default function TaskList(props) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getData();
  }, [page]);
  const getData = async () => {
    const res = await getDetails(page);
    // console.log(res)
    if (res.success) {
      setPageCount(res.count);
      setTasks([...res.data, ...tasks]);
    }
  };
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header
        leadIcon
        leadingIcon={'plus-a'}
        title={'Task List'}
        rightIcon={'equalizer'}
        onpressADD={() => props.navigation.navigate('AddTask')}
        onpressAction={() => props.navigation.navigate('FilterTask')}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => {
          return (
            <TaskListComponent
              key={item.id}
              date={item.createdAt.substr(0, 10)}
              title={item.type.name}
              assigne={item?.assignedVendors?.name}
              areacode={item.area.shortName}
              description={item.type.description}
              phone={item.phone}
              btnLabel={item.status}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}
