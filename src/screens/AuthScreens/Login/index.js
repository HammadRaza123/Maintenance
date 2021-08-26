import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { InputField } from '../../../components/InputField';
import { ForgotModal } from '../../../components/CustomModal';
import { login } from '../../../Redux/Actions/Auth';
import styles from './styles';
import Appcolor from '../../../utills/Colors'
import logo from '../../../assets/images/logo.png'
export default function Login(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [userNameErrorMsg, setUserNameErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const togglePassword = () => { setPasswordVisibility(!passwordVisibility) }
  const closeModal = () => { setModalVisibility(false) }
  const updateUserName = (value) => {
    setUserName(value)
    if (value.length < 3) {
      setUserNameErrorMsg('User Name is too short')
      return false
    } else {
      setUserNameErrorMsg('')
      return true
    }
  }
  const updatePassword = (value) => {
    setPassword(value)
    if (value.length < 6) {
      setPasswordErrorMsg('Password is too short')
      return false
    } else {
      setPasswordErrorMsg('')
      return true
    }
  }
  const validation = () => {
    if (updateUserName(userName) == true && updatePassword(password) == true) {
      dispatch(login({ userName: 'John Doe' }))
    } else {

    }
  }

  return (
    <ScreenWrapper statusBarColor={Appcolor.transparent}>
      <View style={styles.mainViewContainer}>
        <Image source={logo} style={styles.logo} />
        <InputField placeholder={'Enter user name'} suffix suffixIcon={'user'} value={userName}
          onChangeText={(value) => updateUserName(value)} errorEnabled={userNameErrorMsg != ''}
          errorMsg={userNameErrorMsg} />
        <InputField placeholder={'Enter password'} suffix suffixIcon={passwordVisibility ? 'eye' : 'eye-off'}
          secureTextEntry={passwordVisibility} onPressSuffix={() => togglePassword()}
          value={password} onChangeText={(value) => updatePassword(value)}
          errorEnabled={passwordErrorMsg != ''} errorMsg={passwordErrorMsg} />
        <Button title="Login" onPress={() => validation()} containerStyle={styles.btnStyle} />
        <TouchableOpacity style={styles.forgotBtn} onPress={() => setModalVisibility(true)}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <ForgotModal modalHeading='Reset password ?' onClose={() => closeModal()} isVisible={modalVisibility}
        cancelBtnTextStyle={styles.cancelBtnTextStyle}
        onPressCancel={() => closeModal()}
        onPressYes={() => closeModal()} />
    </ScreenWrapper>
  );
}
