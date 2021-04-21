import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TextInput,
  View,
  Text,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import ToggleButton from '../../components/ToggleButton';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import BottomLine from '../../components/BottomLine';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MultilineInputbox from '../../components/MultilineInputbox';
import Colors from '../../utills/Colors';
import {getArea,getRequestType} from '../../utills/Api';
export default function AddTask({navigation}) {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getArea();
    const res1= await getRequestType();
    if (res.success) {
      setareaOptions(res.data);
    }
    if (res1.success) {
      settypeOptions(res1.data);
    }
  };
  const [statusValue, setstatusValue] = useState('New');
  // const [typeValue, settypeValue] = useState('');
  const [locationValue, setlocationValue] = useState('Rentdigi/GSK');
  // const [areaValue, setareaValue] = useState('');
  const [assignedValue, setassignedValue] = useState('Bath');
  const [roomValue, setroomValue] = useState('Newest to Oldest');
  const [statusOptions, setstatusOptions] = useState(['New', 'Pending']);
  const [typeOptions, settypeOptions] = useState([]);
  const [locationOptions, setlocationOptions] = useState([
    'option1',
    'option2',
  ]);
  const [areaOptions, setareaOptions] = useState([]);
  const [assignedOptions, setassignedOptions] = useState([
    'option1',
    'option2',
  ]);
  const [roomOptions, setroomOptions] = useState(['option1', 'option2']);
  const [hoursValue, sethoursValue] = useState(0);
  const [minutesValue, setminutesValue] = useState(0);
  const [submittedBy, setSubmittedBy] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <View style={styles.mainContainer}>
        <Header
          title={'Add'}
          rightIcon={'close-a'}
          onpressAction={() => navigation.goBack()}
        />
        <ScrollView
          style={styles.InnerContainer}
          showsVerticalScrollIndicator={false}>
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
            defaultValue={typeOptions[0]?.name}
            option={typeOptions.map((item) => item.name)}
            onselect={(index) => settypeValue(typeOptions[index].name)}
          />
          {/* <Dropdown
            LabelValue={'Location'}
            defaultValue={locationValue}
            option={locationOptions}
            onselect={(index) => setlocationValue(locationOptions[index])}
          /> */}
          <Dropdown
            LabelValue={'Area'}
            defaultValue={areaOptions[0]?.name}
            option={areaOptions.map((item) => item.name)}
            onselect={(index) => setareaValue(areaOptions[index].name)}
          />
          <TextInput
            value={submittedBy}
            onChangeText={(val) => setSubmittedBy(val)}
            placeholder={'Submitted By'}
            style={styles.dropdownField}
            placeholderTextColor={Colors.white}
          />
          <TextInput
            value={email}
            onChangeText={(val) => setEmail(val)}
            placeholder={'Email'}
            style={styles.dropdownField}
            placeholderTextColor={Colors.white}
          />
          <TextInput
            value={phone}
            onChangeText={(val) => setPhone(val)}
            placeholder={'Phone No'}
            style={styles.dropdownField}
            placeholderTextColor={Colors.white}
          />
          {/* <Dropdown
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
          /> */}
          <Counter
            time={'Hours'}
            increaseCount={() => sethoursValue(hoursValue + 1)}
            decreaseCount={() => sethoursValue(hoursValue - 1)}
            count={hoursValue}
          />
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
            scrollEnabled={true}>
            <MultilineInputbox
              inputLabel={'Comments'}
              placeholder={'Write here...'}
            />
          </KeyboardAwareScrollView>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>

        <View style={styles.ButtonContainer}>
          <Button onPress={() => navigation.goBack()} title={'Cancel'} />
          <Button
            onPress={() => navigation.navigate('EditTask')}
            title={'Save'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
