import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import { LabelRow } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ToggleButton from '../../../components/ToggleButton';
import AppColors from '../../../utills/Colors';
import { width } from 'react-native-dimension';
import Entypo from 'react-native-vector-icons/Entypo'
import DocumentPicker from 'react-native-document-picker'
import styles from './styles';
import moment from 'moment';
import { Get_TaskType } from '../../../Services/Request';
export default function EditTask(props) {
  const currentTask = props.route.params
  const [statusValue, setstatusValue] = useState({ name: currentTask.status });
  const [typeValue, settypeValue] = useState({ name: currentTask.type.name });
  const [areaValue, setareaValue] = useState({ name: currentTask.area.name });
  const [emailValue, setEmailValue] = useState(currentTask.email);
  const [suitValue, setSuitValue] = useState(currentTask.suit);
  const [priority, setPriority] = useState(currentTask.priority);
  const [assignedValue, setAssignedValue] = useState(currentTask.assignedManagers[0].name);
  const [submittedBy, setSubmittedBy] = useState(currentTask.submittedBy);
  const [phoneValue, setPhoneValue] = useState(currentTask.phone);
  const [fileName, setFileName] = useState(currentTask.document);
  const [taskClassValue, setTaskClassValue] = useState(currentTask.taskClass.name);
  const [statusOptions, setstatusOptions] = useState([
    { name: 'New' }, { name: 'Closed' }, { name: 'Re-newed' },
    { name: 'Pending' }, { name: 'Delayed' }, { name: 'Excluded' }
  ]);
  const [typeOptions, settypeOptions] = useState([]);
  const [areaOptions, setareaOptions] = useState([]);
  // console.log(currentTask);
  const [taskClassOptions, setTaskClassOptions] = useState(['class1', 'class2',]);
  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setFileName(res[0].name)
      // console.log(
      //   'results is ' + JSON.stringify(res),
      //   // res[0].uri,
      //   // res[0].type, // mime type
      //   // res[0].name,
      //   // res[0].size,
      // )
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  const getTaskTypes = async () => {
    const response = await Get_TaskType()
    if (response?.success) {
      const data = response?.data?.map(i => i) //console.log
      settypeOptions(data)
    }
    else {
      console.log('Task Type error is', JSON.stringify(response));
    }
  }
  useEffect(() => {
    getTaskTypes()
    // getAreaTypes()
    // getTaskClass()
  }, [])
  return (
    <ScreenWrapper scrollEnabled containerStyle={{ backgroundColor: AppColors.pageBlack }} headerUnScrollable={() =>
      <Header title={'Edit Task'} rightIcon={'close-a'} onpressAction={() => props.navigation.goBack()} />} >
      <View style={styles.mainContainer}>
        <Text style={{ alignSelf: 'center', color: 'red' }}>{currentTask.priority}</Text>
        <View style={styles.InnerContainer}>
          <LabelRow labelValue={'Facility'} value={'Rentdigi'} editable={false} />
          <LabelRow labelValue={'Email'} value={emailValue} onChangeText={(value) => setEmailValue(value)} />
          <Dropdown
            defaultValue={statusValue.name}
            option={statusOptions}
            onselect={(index, value) => setstatusValue(value)}
          />
          <LabelRow labelValue={'Date Created'} value={moment(currentTask.createdAt).format('DD-MM-YYYY')} editable={false} />
          <Dropdown
            defaultValue={typeValue.name}
            option={typeOptions}
            onselect={(index, value) => settypeValue(value)}
          />
          {/* <Dropdown
            LabelValue={'Select a Area Type'}
            defaultValue={areaValue}
            option={areaOptions}
            onselect={(index) => setareaValue(areaOptions[index])}
          />
          <LabelRow labelValue={'Assigned to'} value={assignedValue} onChangeText={(value) => setAssignedValue(value)} />
          <Dropdown
            LabelValue={'Select a Task Class'}
            defaultValue={taskClassValue}
            option={taskClassOptions}
            onselect={(index) => setTaskClassValue(taskClassOptions[index])}
          /> */}
          <LabelRow labelValue={'Suit'} value={suitValue} onChangeText={(value) => setSuitValue(value)} />
          <ToggleButton value={priority} onValueChange={(value) => setPriority(value)}
            toggleLabel={'Priority'}
            trackOnColor={AppColors.togglelightBlue}
            trackOffColor={AppColors.textcolor}
          />
          <LabelRow labelValue={'Submitted By'} value={submittedBy} onChangeText={(value) => setSubmittedBy(value)} />
          <LabelRow labelValue={'Phone'} value={phoneValue} onChangeText={(value) => setPhoneValue(value)}
            keyboardType={'phone-pad'} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={uploadFile} style={styles.uploadButton}>
              <Entypo name='attachment' size={width(4)} color={AppColors.white} />
              <Text style={styles.buttonText}>{currentTask.document ? "Update File" : "Upload File"}</Text>
            </TouchableOpacity>
            <Text style={styles.fileNameText}>{fileName ? fileName : null}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => props.navigation.goBack()} title={'Cancel'} />
          <Button onPress={() => console.log('update the file')} title={'Update'} />
        </View>
      </View>
    </ScreenWrapper>
  );
}