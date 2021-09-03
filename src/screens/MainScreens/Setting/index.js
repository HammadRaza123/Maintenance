import React, { useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { LabelRow, MultiInput } from '../../../components/InputField';
import { logout } from '../../../Redux/Actions/Auth';
import styles from './styles';
export default function Setting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);
  const currentUser = user.name
  const [userName, setUserName] = useState(currentUser)
  const [password, setPassword] = useState('')
  const [notes, setNotes] = useState('')

  // const update = async () => {
  //   const response = await Get_TaskList()
  //   if (response?.success) {
  //     // setTaskList(response.data.tasks)
  //     ToastAndroid.show('User Updated Successfully', ToastAndroid.SHORT);
  //   }
  //   else {
  //     ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT);
  //   }
  // }
  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() => <Header title={'Setting'} hideActionIcon />}>
      <View style={styles.mainViewContainer}>
        <View>
          <LabelRow labelValue={'User'} value={userName} onChangeText={(value) => setUserName(value)} />
          <LabelRow labelValue={'Password'} value={password} onChangeText={(value) => setPassword(value)} />
          <MultiInput placeholder='Notes' containerStyle={styles.multiBox} inputTextStyle={styles.multiInputTextStyle}
            value={notes} onChangeText={(value) => setNotes(value)} />
        </View>
        <View style={styles.row}>
          <Button title='logout' onPress={() => dispatch(logout())} />
          <Button title='Update' onPress={() => console.log('shahbashy')} />
        </View>
      </View>
    </ScreenWrapper>
  );
}