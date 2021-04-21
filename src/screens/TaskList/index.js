import React, { Fragment } from 'react';
import { ScrollView, FlatList, View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskListComponent from '../../components/Tasklist';
import Header from '../../components/Header';
export default function TaskList(props) {
  const data = [
    {
      id: '1',
      date: '17 Nov 2021',
      title: 'Light',
      assigne: 'John',
      areacode: "309 111 SH",
      description: 'Burnt out light under microwave phone next to me ipsum wave to next sporty boy to you...read more',
      phone: '3068307322',
      btnLabel: 'New'
    },
    {
      id: '2',
      date: '17 Nov 2021',
      title: 'Light',
      assigne: 'John',
      areacode: "309 111 SH",
      description: 'Burnt out light under microwave phone next to me ipsum wave to next sporty boy to you...read more',
      phone: '3068307322',
      btnLabel: 'New'
    },
    {
      id: '3',
      date: '17 Nov 2021',
      title: 'Light',
      assigne: 'John',
      areacode: "309 111 SH",
      description: 'Burnt out light under microwave phone next to me ipsum wave to next sporty boy to you...read more',
      phone: '3068307322',
      btnLabel: 'Pending'
    },
    {
      id: '4',
      date: '17 Nov 2021',
      title: 'Light',
      assigne: 'John',
      areacode: "309 111 SH",
      description: 'Burnt out light under microwave phone next to me ipsum wave to next sporty boy to you...read more',
      phone: '3068307322',
      btnLabel: 'Closed'
    },
  ];
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header
      leadIcon
        leadingIcon={'plus-a'}
        title={'Task List'}
        rightIcon={'equalizer'}
        onpressADD={() => props.navigation.navigate('AddTask')
      }
        onpressAction={() =>
          props.navigation.navigate('FilterTask')
      }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TaskListComponent
                key={item.id}
                date={item.date}
                title={item.title}
                assigne={item.assigne}
                areacode={item.areacode}
                description={item.description}
                phone={item.phone}
                btnLabel={item.btnLabel}
              />
            );
          }
          }
        />

      </ScrollView>

    </SafeAreaView>
  );
}