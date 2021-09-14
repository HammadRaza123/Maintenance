import React, { useEffect, useState } from 'react';
import { ToastAndroid, View } from 'react-native';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import { LabelRow } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { Get_FilteredTasks, Get_TaskClass } from '../../../Services/Request';
import Colors from '../../../utills/Colors';
import styles from './styles';

export default function Filter({ navigation: { goBack, navigate } }) {
  const [taskClassValue, setTaskClassValue] = useState({ name: 'Select a Task Class' });
  const [taskClassOptions, setTaskClassOptions] = useState([]);
  const [suitValue, setSuitValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [filterStatus, setFilterStatus] = useState(false);

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
  const getFilterResult = async () => {
    setFilterStatus(true)
    const filterDetails = {
      email: emailValue,
      suit: suitValue,
      submittedBy: submittedBy,
    }
    const response = await Get_FilteredTasks(filterDetails)
    if (response?.success) {
      setFilterStatus(false)
      navigate('FilteredTasks', response.data.tasks)
    }
    else {
      setFilterStatus(false)
      console.log('Task Type error is', response.message);
      ToastAndroid.show('Result not found', ToastAndroid.SHORT);
    }
  }
  useEffect(() => {
    getTaskClass()
  }, [])
  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() => <Header
      title={'Filter'}
      rightIcon={'close-a'}
      onpressAction={() => goBack()}
    />}>
      <View style={styles.mainContainer}>
        <View style={styles.InnerContainer}>
          <LabelRow labelValue={'Suit'} value={suitValue} onChangeText={(value) => setSuitValue(value)} />
          <LabelRow labelValue={'Submitted By'} value={submittedBy} onChangeText={(value) => setSubmittedBy(value)} />
          <LabelRow labelValue={'Email'} value={emailValue} onChangeText={(value) => setEmailValue(value)} />
          <Dropdown
            LabelValue={'Class'} defaultValue={taskClassValue.name} option={taskClassOptions}
            onselect={(index, value) => setTaskClassValue(value)} />
        </View>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => goBack()} title={'Cancel'} />
          <Button isLoading={filterStatus} onPress={() => getFilterResult()} title={'Filter'} />
        </View>

      </View>
    </ScreenWrapper>
  );
}