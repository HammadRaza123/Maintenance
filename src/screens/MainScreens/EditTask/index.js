import React, { useState } from 'react';
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
export default function EditTask(props) {
  const [statusValue, setstatusValue] = useState('New');
  const [typeValue, settypeValue] = useState('');
  const [areaValue, setareaValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [suitValue, setSuitValue] = useState('');
  const [assignedValue, setAssignedValue] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [fileName, setFileName] = useState('');
  const [taskClassValue, setTaskClassValue] = useState('');
  const [statusOptions, setstatusOptions] = useState(['New', 'Closed', 'Re-newed', 'Pending', 'Delayed', 'Excluded']);
  const [typeOptions, settypeOptions] = useState(['option1', 'option2']);
  const [areaOptions, setareaOptions] = useState(['option1', 'option2']);
  const [taskClassOptions, setTaskClassOptions] = useState(['class1', 'class2',]);
  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
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
  return (
    <ScreenWrapper scrollEnabled containerStyle={{ backgroundColor: AppColors.pageBlack }} headerUnScrollable={() =>
      <Header title={'Edit Task'} rightIcon={'close-a'} onpressAction={() => props.navigation.goBack()} />} >
      <ScrollView style={styles.mainContainer}>
        <View style={styles.InnerContainer}>
          <LabelRow labelValue={'Facility'} value={'Rentdigi'} editable={false} />
          <LabelRow labelValue={'Email'} value={emailValue} onChangeText={(value) => setEmailValue(value)} />
          <Dropdown
            LabelValue={'Status'}
            defaultValue={statusValue}
            option={statusOptions}
            onselect={(index) => setstatusValue(statusOptions[index])}
          />
          <Text>Date Created</Text>
          <Dropdown
            LabelValue={'Select a Task Type'}
            defaultValue={typeValue}
            option={typeOptions}
            onselect={(index) => settypeValue(typeOptions[index])}
          />
          <Dropdown
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
          />
          <LabelRow labelValue={'Suit'} value={suitValue} onChangeText={(value) => setSuitValue(value)} />
          <ToggleButton
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
              <Text style={styles.buttonText}>Update File</Text>
            </TouchableOpacity>
            <Text style={styles.fileNameText}>{fileName ? fileName : null}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => props.navigation.goBack()} title={'Cancel'} />
          <Button onPress={() => console.log('update the file')} title={'Update'} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}