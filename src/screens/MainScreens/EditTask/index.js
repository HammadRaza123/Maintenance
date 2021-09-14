import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { width } from 'react-native-dimension';
import DocumentPicker from 'react-native-document-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import { LabelRow } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import ToggleButton from '../../../components/ToggleButton';
import { Get_TaskType, Update_Tasks } from '../../../Services/Request';
import AppColors from '../../../utills/Colors';
import styles from './styles';
export default function EditTask(props) {
  const currentTask = props.route.params
  const [updateStatus, setUpdateStatus] = useState(false);
  const [statusValue, setstatusValue] = useState({ name: currentTask.status });
  const [typeValue, settypeValue] = useState({ name: currentTask.type.name });
  const [emailValue, setEmailValue] = useState(currentTask.email);
  const [suitValue, setSuitValue] = useState(currentTask.suit);
  const [priority, setPriority] = useState(currentTask.priority);
  const [submittedBy, setSubmittedBy] = useState(currentTask.submittedBy);
  const [phoneValue, setPhoneValue] = useState(currentTask.phone);
  const [fileName, setFileName] = useState(currentTask.document);
  const [statusOptions, setstatusOptions] = useState([
    { name: 'New' }, { name: 'Closed' }, { name: 'Re-newed' },
    { name: 'Pending' }, { name: 'Delayed' }, { name: 'Excluded' }
  ]);
  const [typeOptions, settypeOptions] = useState([]);
  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setFileName(res[0])
      // console.log(
      //   'results is ' + JSON.stringify(res),
      //   // res[0].uri,
      //   // res[0].type, // mime type
      //   // res[0].name,
      //   // res[0].size,
      // )
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
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
  const updateTask = async () => {
    setUpdateStatus(true)
    const data = {
      _id: currentTask._id,
      status: statusValue.name,
      type: currentTask.type._id,
      suit: suitValue,
      priority: priority,
      submittedBy: submittedBy,
      phone: phoneValue,
      document: fileName != currentTask.document ?
        {
          uri: Platform.OS == 'ios'
            ? fileName?.uri.replace('file://', '')
            : fileName?.uri,
          name: fileName?.name,
          type: fileName?.type
        } : currentTask.document
    }
    const response = await Update_Tasks(data)
    if (response?.success) {
      setUpdateStatus(false)
      ToastAndroid.show('Task Updated Successfully', ToastAndroid.SHORT);
      props.navigation.navigate('TaskList')
    }
    else {
      setUpdateStatus(false)
      ToastAndroid.show('Unable to Update Task', ToastAndroid.SHORT);
    }
  }
  useEffect(() => {
    getTaskTypes()
  }, [])
  return (
    <ScreenWrapper scrollEnabled containerStyle={{ backgroundColor: AppColors.pageBlack }} headerUnScrollable={() =>
      <Header title={'Edit Task'} rightIcon={'close-a'} onpressAction={() => props.navigation.goBack()} />} >
      <View style={styles.mainContainer}>
        <Text style={{ alignSelf: 'center', color: 'red' }}>{currentTask.priority}</Text>
        <View style={styles.InnerContainer}>
          <LabelRow labelValue={'Facility'} value={'Rentdigi'} editable={false} />
          <LabelRow labelValue={'Email'} editable={false} value={emailValue} onChangeText={(value) => setEmailValue(value)} />
          <Dropdown
            LabelValue={'Status'}
            defaultValue={statusValue.name}
            option={statusOptions}
            onselect={(index, value) => setstatusValue(value)}
          />
          <LabelRow labelValue={'Date Created'} value={moment(currentTask.createdAt).format('DD-MM-YYYY')} editable={false} />
          <Dropdown
            LabelValue={'Type'}
            defaultValue={typeValue.name}
            option={typeOptions}
            onselect={(index, value) => settypeValue(value)}
          />
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
            <Text style={styles.fileNameText}>{fileName ? fileName.name || fileName : null}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => props.navigation.goBack()} title={'Cancel'} />
          <Button isLoading={updateStatus} loaderColor={AppColors.white} onPress={() => updateTask()} title={'Update'} />
        </View>
      </View>
    </ScreenWrapper>
  );
}