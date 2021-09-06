import moment from 'moment';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import TaskListComponent from '../../../components/Tasklist';
import styles from './styles';
export default function FilteredTasks({ route, navigation: { navigate } }) {
  const filteredResult = route?.params;
  return (
    <ScreenWrapper headerUnScrollable={() => <Header leadIcon leadingIcon={'plus-a'} title={'Filtered Tasks'} rightIcon={'equalizer'}
      onpressADD={() => navigate('AddTask')} onpressAction={() => navigate('Filter')}
    />}>

      {filteredResult == '' ?
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>No result found</Text>
        </View>
        :
        <FlatList style={styles.listStyle}
          data={filteredResult}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TaskListComponent
                key={item._id}
                createdAt={moment(item.createdAt).format('DD-MM-YYYY')}
                onPress={() => navigate('EditTask', item)}
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

    </ScreenWrapper >
  );
}