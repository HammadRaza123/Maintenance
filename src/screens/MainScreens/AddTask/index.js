import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { width } from 'react-native-dimension';
import DocumentPicker from 'react-native-document-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import { LabelRow } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ToggleButton from '../../../components/ToggleButton';
import { Add_NewTask, Get_AreaType, Get_TaskClass, Get_TaskType } from '../../../Services/Request';
import AppColors from '../../../utills/Colors';
import styles from './styles';
export default function AddTask({ navigation: { goBack } }) {
  const [typeValue, settypeValue] = useState({ name: 'Select a Task Type' });
  const [areaValue, setareaValue] = useState({ name: 'Select a Area Type' });
  const [taskClassValue, setTaskClassValue] = useState({ name: 'Select a Task Class' });
  const [emailValue, setEmailValue] = useState('');
  const [suitValue, setSuitValue] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [priorityValue, setPriorityValue] = useState(true);
  const [phoneValue, setPhoneValue] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [typeOptions, settypeOptions] = useState([]);
  const [areaOptions, setareaOptions] = useState([]);
  const [taskClassOptions, setTaskClassOptions] = useState([]);
  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setImageFile(res[0])
      setFileName(res[0].name)
      console.log(
        'results is ' + JSON.stringify(res),
        // res[0].uri,
        // res[0].type, // mime type
        // res[0].name,
        // res[0].size,
      )
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  const user = useSelector((state) => state.Auth.user);

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
  const getAreaTypes = async () => {
    const response = await Get_AreaType()
    if (response?.success) {
      const data = response.data?.map(i => i) //console.log
      setareaOptions(data)
    }
    else {
      console.log('Area Type error is', JSON.stringify(response));
    }
  }
  const getTaskClass = async () => {
    const response = await Get_TaskClass()
    if (response?.success) {
      const data = response.data?.map(i => i) //console.log
      setTaskClassOptions(data)
    }
    else {
      console.log('Task Class error is', JSON.stringify(response));
    }
  }
  useEffect(() => {
    getTaskTypes()
    getAreaTypes()
    getTaskClass()
  }, [])
  const saveTask = async () => {
    const taskDetails = {
      email: emailValue,
      type: typeValue._id,
      area: areaValue._id,
      taskClass: taskClassValue._id,
      suit: suitValue,
      priority: priorityValue,
      submittedBy: submittedBy,
      phone: phoneValue,
      doc: {
        uri: Platform.OS == 'ios'
          ? imageFile?.uri.replace('file://', '')
          : imageFile?.uri,
        name: imageFile?.name,
        type: imageFile?.type
      }
    }
    const response = await Add_NewTask(taskDetails)
    if (response?.success) {
      ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT);
      navigation.navigate('TaskList')
    }
    else {
      ToastAndroid.show('Please fill all Details', ToastAndroid.SHORT);
      console.log('Add Task error is', JSON.stringify(response));
    }

  }
  return (

    <ScreenWrapper scrollEnabled containerStyle={{ backgroundColor: AppColors.pageBlack }} headerUnScrollable={() =>
      <Header title={'Add Task'} rightIcon={'close-a'} onpressAction={() => goBack()} />} >
      <View style={styles.mainContainer}>
        <View style={styles.InnerContainer}>
          <LabelRow labelValue={'Facility'} value={'Rentdigi'} editable={false} />
          <LabelRow labelValue={'Email'} value={emailValue} onChangeText={(value) => setEmailValue(value)} />
          <Dropdown
            LabelValue={'Type'}
            defaultValue={typeValue.name}
            option={typeOptions}
            onselect={(index, value) => settypeValue(value)}
          />
          <Dropdown
            LabelValue={'Area'}
            defaultValue={areaValue.name}
            option={areaOptions}
            onselect={(index, value) => setareaValue(value)}
          />
          <Dropdown
            LabelValue={'Class'}
            defaultValue={taskClassValue.name}
            option={taskClassOptions}
            onselect={(index, value) => setTaskClassValue(value)}
          />
          <LabelRow labelValue={'Suit'} value={suitValue} onChangeText={(value) => setSuitValue(value)} />
          <ToggleButton
            toggleLabel={'Priority'}
            trackOnColor={AppColors.togglelightBlue}
            trackOffColor={AppColors.textcolor}
            value={priorityValue}
            onValueChange={() => {
              setPriorityValue(previousState => !previousState)
            }}
          />
          <LabelRow labelValue={'Submitted By'} value={submittedBy} onChangeText={(value) => setSubmittedBy(value)} />
          <LabelRow labelValue={'Phone'} value={phoneValue} onChangeText={(value) => setPhoneValue(value)}
            keyboardType={'phone-pad'} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={uploadFile} style={styles.uploadButton}>
              <Entypo name='attachment' size={width(4)} color={AppColors.white} />
              <Text style={styles.buttonText}>Upload File</Text>
            </TouchableOpacity>
            <Text style={styles.fileNameText}>{fileName ? fileName : null}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => goBack()} title={'Cancel'} />
          <Button onPress={() => saveTask()} title={'Save'} />
        </View>
      </View>
    </ScreenWrapper>
  );
}