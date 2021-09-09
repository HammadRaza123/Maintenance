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
import styles from './styles';
export default function Setting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);
  const Savednotes = useSelector((state) => state.Notes.notes);
  const currentUser = user.name
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [notesValue, setNotes] = useState(Savednotes)
  const update = async () => {
    const details = {
      username: user.username,
      password: password,
      newPassword: newPassword
    }
    const response = await Update_Password(details)
    if (response?.success) {
      ToastAndroid.show('Updated Successfully', ToastAndroid.SHORT);
    }
    else {
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
          <View>
            <MultiInput placeholder='Notes' containerStyle={styles.multiBox} inputTextStyle={styles.multiInputTextStyle}
              value={notesValue} onChangeText={(value) => setNotes(value)} />
            <Button title='Save Note' containerStyle={styles.saveBtn}
              onPress={() => {
                dispatch(notes(notesValue)),
                  ToastAndroid.show('Notes Saved', ToastAndroid.SHORT)
              }} />
          </View>
        </View>
        <View style={styles.row}>
          <Button title='logout' onPress={() => dispatch(logout())} />
          <Button title='Update' onPress={() => update()} />
        </View>
      </View>
    </ScreenWrapper>
  );
}