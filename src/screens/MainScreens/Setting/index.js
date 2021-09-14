import React, { useState } from 'react';
import { ToastAndroid, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { LabelRow, MultiInput } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { logout } from '../../../Redux/Actions/Auth';
import { notes } from '../../../Redux/Actions/Notes';
import { Update_Password } from '../../../Services/Request';
import Colors from '../../../utills/Colors';
import styles from './styles';
export default function Setting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);
  const Savednotes = useSelector((state) => state.Notes.notes);
  const currentUser = user.name
  const [password, setPassword] = useState('')
  const [saveStatus, setSaveStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [newPassword, setNewPassword] = useState('')
  const [notesValue, setNotes] = useState(Savednotes)
  const savednotes = () => {
    setSaveStatus(true)
    dispatch(notes(notesValue)),
      ToastAndroid.show('Notes Saved', ToastAndroid.SHORT)
    setSaveStatus(false)
  }
  const update = async () => {
    setUpdateStatus(true)
    const details = {
      username: user.username,
      password: password,
      newPassword: newPassword
    }
    const response = await Update_Password(details)
    if (response?.success) {
      setUpdateStatus(false)
      ToastAndroid.show('Updated Successfully', ToastAndroid.SHORT);
    }
    else {
      setUpdateStatus(false)
      ToastAndroid.show('Update Failed', ToastAndroid.LONG);
    }
  }
  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() => <Header title={'Setting'} hideActionIcon />}>
      <View style={styles.mainViewContainer}>
        <View>
          <LabelRow labelValue={'User'} value={currentUser} editable={false} />
          <LabelRow labelValue={'Password'} value={password} onChangeText={(value) => setPassword(value)} />
          <LabelRow labelValue={'New Password'} value={newPassword} onChangeText={(value) => setNewPassword(value)} />
          <Button containerStyle={styles.updateBtn} isLoading={updateStatus} title='Update' onPress={() => update()} />
          <View>
            <MultiInput placeholder='Notes' containerStyle={styles.multiBox} inputTextStyle={styles.multiInputTextStyle}
              value={notesValue} onChangeText={(value) => setNotes(value)} />
            <Button isLoading={saveStatus} title='Save Note' containerStyle={styles.saveBtn}
              onPress={() => savednotes()} />
          </View>
        </View>
        <Button containerStyle={styles.logoutBtn} btnTextStyle={styles.logoutBtnText} title='Logout' onPress={() => dispatch(logout())} />
      </View>
    </ScreenWrapper>
  );
}