import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomLine from '../../../components/BottomLine';
import Button from '../../../components/Button';
import Counter from '../../../components/Counter';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import MultilineInputbox from '../../../components/MultilineInputbox';
import ToggleButton from '../../../components/ToggleButton';
import Colors from '../../../utills/Colors';
import styles from './styles';
export default function AddTask({ navigation }) {
  const [statusValue, setstatusValue] = useState('All');
  const [typeValue, settypeValue] = useState('AirCondition');
  const [locationValue, setlocationValue] = useState('Rentdigi/GSK');
  const [areaValue, setareaValue] = useState('1071 Chappelle');
  const [assignedValue, setassignedValue] = useState('Bath');
  const [roomValue, setroomValue] = useState('Newest to Oldest');
  const [statusOptions, setstatusOptions] = useState(['New', 'Closed', 'Re-newed', 'Pending', 'Delayed', 'Excluded']);
  const [typeOptions, settypeOptions] = useState(['option1', 'option2']);
  const [locationOptions, setlocationOptions] = useState(['option1', 'option2']);
  const [areaOptions, setareaOptions] = useState(['option1', 'option2']);
  const [assignedOptions, setassignedOptions] = useState(['option1', 'option2']);
  const [roomOptions, setroomOptions] = useState(['option1', 'option2']);
  const [hoursValue, sethoursValue] = useState(0);
  const [minutesValue, setminutesValue] = useState(0);
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <View style={styles.mainContainer}>
        <Header
          title={'Add'}
          rightIcon={'close-a'}
          onpressAction={() => navigation.goBack()} />
        <ScrollView style={styles.InnerContainer} showsVerticalScrollIndicator={false}>
          {/* <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior='padding'
          style={styles.InnerContainer} > */}

          <Dropdown
            LabelValue={'Status'}
            defaultValue={statusValue}
            option={statusOptions}
            onselect={(index) => setstatusValue(statusOptions[index])}
          />
          <Dropdown
            LabelValue={'Type'}
            defaultValue={typeValue}
            option={typeOptions}
            onselect={(index) => settypeValue(typeOptions[index])}
          />
          <Dropdown
            LabelValue={'Location'}
            defaultValue={locationValue}
            option={locationOptions}
            onselect={(index) => setlocationValue(locationOptions[index])}
          />
          <Dropdown
            LabelValue={'Area'}
            defaultValue={areaValue}
            option={areaOptions}
            onselect={(index) => setareaValue(areaOptions[index])}
          />
          <Dropdown
            LabelValue={'Assigned'}
            defaultValue={assignedValue}
            option={assignedOptions}
            onselect={(index) => setassignedValue(assignedOptions[index])}
          />
          <Dropdown
            LabelValue={'Room#'}
            defaultValue={roomValue}
            option={roomOptions}
            onselect={(index) => setroomValue(roomOptions[index])}
          />
          <Counter
            time={'Hours'}
            increaseCount={() => sethoursValue(hoursValue + 1)}
            decreaseCount={() => sethoursValue(hoursValue - 1)}
            count={hoursValue} />
          <BottomLine />
          <Counter
            increaseCount={() => setminutesValue(minutesValue + 1)}
            decreaseCount={() => setminutesValue(minutesValue - 1)}
            time={'Minutes'}
            count={minutesValue}
          />
          <BottomLine />
          <ToggleButton
            toggleLabel={'Priority'}
            trackOnColor={Colors.togglelightBlue}
            trackOffColor={Colors.textcolor}
          />
          <KeyboardAwareScrollView
            keyboardDismissMode={'interactive'}
            scrollEnabled={true}
          >
            <MultilineInputbox
              inputLabel={'Comments'}
              placeholder={'Write here...'}
            />
          </KeyboardAwareScrollView>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>

        <View style={styles.ButtonContainer}>
          <Button onPress={() => goBack()}
            title={'Cancel'}
          /><Button
            onPress={() => navigation.navigate('EditTask')}
            title={'Save'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}